# FrameX Chat Page Redesign — Social Chat Interface

**Date:** 2026-06-21
**Status:** Approved

## Overview

Redesign the FrameX Chat page into a modern social-chat interface inspired by Instagram, Discord, and Telegram. Mobile-first layout with premium glassmorphism aesthetics, micro-interactions, and smooth 60fps performance.

## Layout Architecture

Three-zone layout:
- **Left:** Slide-out navigation sidebar (hidden by default)
- **Center:** Dedicated conversation/messages zone
- **Right:** Floating vertical stories rail (fixed position)

### Color Palette
- Background: `#050816`
- Glass cards: `rgba(255,255,255,0.08)`
- Accent (neon green): `#C6FF00`
- Secondary (cyan): `#00E5FF`
- Text: white (`#ffffff`)
- Rounded corners: 20px–28px

## Components

### 1. Navigation Sidebar (Left Slide-Out)
- **Width:** ~280px on mobile
- **Position:** Fixed left, slides in with spring animation (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`)
- **Styling:** Dark glassmorphism, strong blur, semi-transparent bg, subtle borders, neon green accents
- **Default state:** Hidden (translateX(-100%))
- **Overlay:** Dark backdrop behind sidebar, tapping outside closes it
- **Contents:**
  - User profile section: 48px avatar, username, online status indicator (green dot)
  - Navigation items: Home, Chats, Communities, Explore, Notifications, Settings — each with icon + label, active state with neon accent
  - Bottom: Logout button + app version "v1.0.0"
- **Behavior:** Smooth slide animation, body scroll lock when open, does not cover entire screen

### 2. Top Header (Fixed)
- **Position:** Fixed top, z-index above content
- **Styling:** Glassmorphism with blur, consistent with app theme
- **Layout:**
  - Left: Hamburger button + FrameX logo (small)
  - Center: Current chat/channel name
  - Right: Search icon, Notifications icon, New Chat icon
- **Behavior:** Remains fixed while scrolling messages

### 3. Conversation Area (Center)
- **Messages:** Floating bubbles with glassmorphism
  - Incoming: Dark translucent glass cards
  - Outgoing: Neon green (#C6FF00) accent styling
  - Timestamps below each bubble
  - Read receipts (visual indicator)
  - Reaction support (placeholder UI)
  - Reply support (placeholder UI)
  - Typing indicator with bouncing dots animation
  - Fade + slide-up animation on new messages
- **Empty state:** Centered icon + "No messages yet" text
- **Date divider:** "Today" separator between message groups

### 4. Stories Rail (Right Side)
- **Position:** Fixed on right edge, vertically centered
- **Container:** Floating glass pill-shaped panel, blur effects, subtle shadows, 20px border radius
- **Scroll:** Vertical scrollable list of story avatars
- **Avatar size:** 58px (mobile) / 70px (desktop)
- **Styling:**
  - Circular avatars with gradient rings for unread stories
  - Small green online indicator dot
  - Gentle floating animation on each avatar
  - Unread stories glow subtly (pulse animation)
- **Interaction:** Slightly expand on hover/tap, open story viewer on selection
- **Story viewer:** Modal overlay with story content, user info, close button, tap to advance

### 5. Message Composer (Bottom)
- **Position:** Fixed above bottom edge, floating
- **Styling:** Pill-shaped container, glassmorphism, blur effects, soft shadows
- **Contents:**
  - Attachment button (paperclip icon)
  - Emoji button (smile icon)
  - Voice note button (mic icon)
  - Text input field (placeholder: "Message #channel...")
  - Send button (paper plane icon, neon green accent)
- **Behavior:** Disabled state when no channel selected or empty input

### 6. Micro-Interactions
- Sidebar: Spring physics slide animation
- Stories: Gentle floating animation (keyframe), glow pulse on unread
- Buttons: Scale to 0.92 on tap/click
- Messages: Fade + slide-up on appearance
- All interactions target smooth 60fps (use transform/opacity only)

## Responsive Behavior

### Mobile (<768px)
- Sidebar: Full opening animation with dark overlay
- Stories rail: Reduced size or hidden, avatars 58px
- Header: Compact padding
- Messages: Reduced padding
- Composer: Compact padding

### Tablet (768-1024px)
- Stories: 58px avatars
- Sidebar: Overlay mode

### Desktop (>1024px)
- Full three-zone layout
- Stories: 70px avatars
- Sidebar: Overlay slide-out

## Data Flow

- **Channels/Messages/Profiles:** Existing Supabase backend integration preserved
  - Auth check on mount, redirect to /login if no session
  - Channels fetched on init, active channel selectable
  - Messages fetched per active channel via supabase query
  - Real-time subscription for new messages via supabase channel
  - Send message inserts via supabase
- **Stories:** Mock data (array of users with story images, no backend required)
- **Sign out:** Clear supabase session, navigate to /login

## Error Handling

- Loading state: Spinner with "Loading chat..." message
- Empty messages: "No messages yet. Start the conversation!" with icon
- Disabled input when no channel selected
- Send button disabled when input is empty or no active channel

## Chat Page Specifications

If the user says to proceed after presenting the design, generate the subtasks for implementation. If they want to iterate on the design, incorporate feedback. If there's something else you need to do, choose the right tool.

## File Changes

- **Modified:** `src/pages/Chat.jsx` — complete rewrite with new UI
- No other files should need changes (CSS is inline via `<style>` tag, following existing pattern)
