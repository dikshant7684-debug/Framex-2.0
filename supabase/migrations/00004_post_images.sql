-- ===== FrameX Post Images & Audience Settings Migration =====
-- Adds audience column, media JSONB array, and post-images storage bucket

-- 1. ADD AUDIENCE COLUMN TO POSTS
ALTER TABLE posts ADD COLUMN IF NOT EXISTS audience TEXT DEFAULT 'public' CHECK (audience IN ('public', 'followers', 'private'));

-- 2. ADD MEDIA JSONB ARRAY FOR MULTIPLE IMAGE SUPPORT
ALTER TABLE posts ADD COLUMN IF NOT EXISTS media JSONB DEFAULT '[]'::jsonb;

-- 3. CREATE POST-IMAGES STORAGE BUCKET
INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
SELECT * FROM (VALUES
  ('post-images', 'post-images', true, false, 20971520, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[])
) AS data(id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = data.id);

-- 4. STORAGE RLS POLICIES FOR POST-IMAGES BUCKET

-- Public read access
DROP POLICY IF EXISTS "Public read access for post-images" ON storage.objects;
CREATE POLICY "Public read access for post-images" ON storage.objects
  FOR SELECT USING (bucket_id = 'post-images');

-- Authenticated users can upload
DROP POLICY IF EXISTS "Authenticated users can upload to post-images" ON storage.objects;
CREATE POLICY "Authenticated users can upload to post-images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'post-images' AND auth.role() = 'authenticated');

-- Users can update their own post-images
DROP POLICY IF EXISTS "Users can update own post-images" ON storage.objects;
CREATE POLICY "Users can update own post-images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'post-images' AND auth.uid() = owner::uuid);

-- Users can delete their own post-images
DROP POLICY IF EXISTS "Users can delete own post-images" ON storage.objects;
CREATE POLICY "Users can delete own post-images" ON storage.objects
  FOR DELETE USING (bucket_id = 'post-images' AND auth.uid() = owner::uuid);
