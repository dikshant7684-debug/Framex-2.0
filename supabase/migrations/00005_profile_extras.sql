-- ===== FrameX Profile Extras Migration =====
-- Adds missing columns to profiles table used by Profile.jsx edit form

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS cover_url TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS full_name TEXT;
