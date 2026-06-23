-- ===== FrameX Storage Buckets Migration =====
-- Creates storage buckets for avatars and cover images
-- Run this in your Supabase SQL Editor after the previous migrations

-- 1. STORAGE BUCKETS
INSERT INTO storage.buckets (id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
SELECT * FROM (VALUES
  ('avatars', 'avatars', true, false, 5242880, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]),
  ('covers', 'covers', true, false, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[])
) AS data(id, name, public, avif_autodetection, file_size_limit, allowed_mime_types)
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = data.id);

-- 2. STORAGE RLS POLICIES

-- Allow public read access to avatars bucket
DROP POLICY IF EXISTS "Public read access for avatars" ON storage.objects;
CREATE POLICY "Public read access for avatars" ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars');

-- Allow authenticated users to upload to avatars bucket
DROP POLICY IF EXISTS "Authenticated users can upload to avatars" ON storage.objects;
CREATE POLICY "Authenticated users can upload to avatars" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.role() = 'authenticated');

-- Allow users to update their own avatar
DROP POLICY IF EXISTS "Users can update own avatars" ON storage.objects;
CREATE POLICY "Users can update own avatars" ON storage.objects
  FOR UPDATE USING (bucket_id = 'avatars' AND auth.uid() = owner::uuid);

-- Allow users to delete their own avatar
DROP POLICY IF EXISTS "Users can delete own avatars" ON storage.objects;
CREATE POLICY "Users can delete own avatars" ON storage.objects
  FOR DELETE USING (bucket_id = 'avatars' AND auth.uid() = owner::uuid);

-- Public read access for covers bucket
DROP POLICY IF EXISTS "Public read access for covers" ON storage.objects;
CREATE POLICY "Public read access for covers" ON storage.objects
  FOR SELECT USING (bucket_id = 'covers');

-- Authenticated users can upload to covers bucket
DROP POLICY IF EXISTS "Authenticated users can upload to covers" ON storage.objects;
CREATE POLICY "Authenticated users can upload to covers" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'covers' AND auth.role() = 'authenticated');

-- Users can update their own covers
DROP POLICY IF EXISTS "Users can update own covers" ON storage.objects;
CREATE POLICY "Users can update own covers" ON storage.objects
  FOR UPDATE USING (bucket_id = 'covers' AND auth.uid() = owner::uuid);

-- Users can delete their own covers
DROP POLICY IF EXISTS "Users can delete own covers" ON storage.objects;
CREATE POLICY "Users can delete own covers" ON storage.objects
  FOR DELETE USING (bucket_id = 'covers' AND auth.uid() = owner::uuid);
