# Chat Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign Chat.jsx into a modern social-chat interface with glassmorphism sidebar, header, messages, stories rail, and composer.

**Architecture:** A single React component (`Chat.jsx`) with inline CSS styles. Keeps existing Supabase backend for channels/messages. Adds mock stories data. All UI is new — the old Nav component is not used; the chat page has its own header.

**Tech Stack:** React, Supabase, CSS keyframes/transitions, react-router-dom

**Global Constraints:**
- Colors: bg `#050816`, glass `rgba(255,255,255,0.08)`, accent `#C6FF00`, cyan `#00E5FF`, white text
- Rounded corners: 20px–28px
- 60fps animations (transform/opacity only)
- Mobile-first responsive design
- No horizontal overflow
- Stories rail visible while chatting

---

### Task 1: Complete Chat.jsx Rewrite

**Files:**
- Overwrite: `src/pages/Chat.jsx`

**Description:** Rewrite the entire Chat component with the new social-chat interface including sidebar, header, conversation area, stories rail, and message composer.

- [ ] **Step 1: Write the complete Chat.jsx**

The file contains all of:
1. **Imports** — React hooks, react-router-dom, supabase client, icons
2. **CSS** — Full component stylesheet inline via `<style>` tag
3. **Mock stories data** — Array of story users with avatars, names, online status
4. **Story viewer** — Modal that opens on story tap, shows story content
5. **Sidebar component** — Slide-out from left with profile, nav items, logout
6. **Chat header** — Fixed glass header with hamburger, logo, channel name, icons
7. **Stories rail** — Fixed right-side floating glass pill with vertical avatars
8. **Message bubbles** — Incoming/outgoing glass cards with timestamps
9. **Typing indicator** — Bouncing dots animation
10. **Message composer** — Floating pill input with attachment/emoji/voice/send
11. **Main Chat component** — State management, supabase integration, event handlers

- [ ] **Step 2: Verify the build works**

```bash
cd /data/data/com.termux/files/home/framex && npm run build 2>&1 | tail -20
```
Expected: Build succeeds with no errors.

- [ ] **Step 3: Verify routes and navigation**

Run the dev server and check that /chat renders without crash, sidebar opens/closes, stories rail renders, messages display.
