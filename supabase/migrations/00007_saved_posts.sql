-- ===== FrameX Saved Posts Table =====
-- Allows users to bookmark/bookmark posts for later viewing.
-- Unique constraint prevents duplicate saves per user per post.

CREATE TABLE IF NOT EXISTS saved_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  post_id BIGINT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, post_id)
);

-- Index for fast lookups of a user's saved posts
CREATE INDEX IF NOT EXISTS idx_saved_posts_user_id ON saved_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_posts_post_id ON saved_posts(post_id);

-- RLS: users manage their own saved posts
ALTER TABLE saved_posts ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own saved posts
CREATE POLICY "Users can view their own saved posts"
  ON saved_posts FOR SELECT
  USING (auth.uid() = user_id);

-- Allow users to save (insert) posts
CREATE POLICY "Users can save posts"
  ON saved_posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Allow users to unsave (delete) their own saved posts
CREATE POLICY "Users can delete their own saved posts"
  ON saved_posts FOR DELETE
  USING (auth.uid() = user_id);
