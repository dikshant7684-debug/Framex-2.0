-- ===== FrameX Post-Profile FK Relationships =====
-- Adds explicit foreign key constraints from post/comment/etc user_id columns
-- to profiles.id so that PostgREST can resolve nested join syntax like
-- `profiles:user_id (id, username, ...)` in the schema cache.
--
-- Each table's user_id already references auth.users(id), and profiles.id
-- also references auth.users(id), so these constraints are redundant at
-- the data level but required by PostgREST for relationship resolution.

-- Posts: user_id → profiles.id
ALTER TABLE posts DROP CONSTRAINT IF EXISTS fk_posts_user_id_profiles;
ALTER TABLE posts ADD CONSTRAINT fk_posts_user_id_profiles
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Comments: user_id → profiles.id
ALTER TABLE comments DROP CONSTRAINT IF EXISTS fk_comments_user_id_profiles;
ALTER TABLE comments ADD CONSTRAINT fk_comments_user_id_profiles
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Conversation participants: user_id → profiles.id
ALTER TABLE conversation_participants DROP CONSTRAINT IF EXISTS fk_conv_participants_user_id_profiles;
ALTER TABLE conversation_participants ADD CONSTRAINT fk_conv_participants_user_id_profiles
  FOREIGN KEY (user_id) REFERENCES profiles(id) ON DELETE CASCADE;

-- Messages: sender_id → profiles.id
ALTER TABLE messages DROP CONSTRAINT IF EXISTS fk_messages_sender_id_profiles;
ALTER TABLE messages ADD CONSTRAINT fk_messages_sender_id_profiles
  FOREIGN KEY (sender_id) REFERENCES profiles(id) ON DELETE CASCADE;
