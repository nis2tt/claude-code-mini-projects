# HookHub - Project Specification

## Project Overview

**HookHub** is a curated directory of open-source Claude Code hooks, designed to help developers discover and browse community-created hooks that enhance their Claude Code experience.

### What Are Claude Code Hooks?

Claude Code hooks are user-defined shell commands that execute at various points in Claude Code's lifecycle, providing deterministic control over Claude Code's behavior. Unlike relying on the LLM to choose when to run commands, hooks provide guaranteed execution at specific lifecycle events.

**Common Use Cases:**
- **Notifications**: Get alerts when tasks complete (desktop notifications, sounds, TTS)
- **Automatic Formatting**: Run code formatters (Prettier, Black, etc.) after file edits
- **Logging & Tracking**: Record executed commands and track agent activity
- **Custom Permissions**: Block modifications to protected files (production configs, etc.)
- **AI Enhancement**: Add AI-powered thinking and completion messages
- **Multi-Agent Observability**: Monitor Claude Code agents in real-time

### Existing Hook Projects (Reference)

From our research, notable open-source hook repositories include:

1. **[Claude Code Hooks Mastery](https://github.com/disler/claude-code-hooks-mastery)** - Comprehensive demonstration of all 8 hook lifecycle events with TTS playback and AI-generated completion messages
2. **[claude-hooks by johnlindquist](https://github.com/johnlindquist/claude-hooks)** - TypeScript-powered hook system with full type safety and auto-completion
3. **[ClaudeKit](https://github.com/carlrannaberg/claudekit)** - Toolkit of custom commands, hooks, and utilities featuring automatic enhancement
4. **[Claude Code Showcase](https://github.com/ChrisWiles/claude-code-showcase)** - Comprehensive project configuration example with hooks, skills, agents, and GitHub Actions
5. **[decider/claude-hooks](https://github.com/decider/claude-hooks)** - Hooks to enforce clean code practices and automate workflows
6. **[Multi-Agent Observability](https://github.com/disler/claude-code-hooks-multi-agent-observability)** - Real-time monitoring for Claude Code agents

## MVP Goals & Scope

### In Scope ✅

1. **Display Functionality**
   - Show curated Claude Code hooks in a responsive grid layout
   - Display hook metadata: name, category, description, author, GitHub link

2. **Filtering**
   - Filter hooks by category
   - "All" option to show all hooks

3. **User Interaction**
   - Click on hook card to navigate to GitHub repository
   - Responsive design for mobile, tablet, and desktop

4. **Visual Design**
   - Clean, modern UI using Tailwind CSS
   - Category-coded badges
   - Hover effects and smooth transitions

### Out of Scope ❌

1. User authentication or accounts
2. User-submitted hooks (manual curation only for MVP)
3. Search functionality (category filter only)
4. Hook ratings, comments, or reviews
5. Hook installation automation
6. Backend API or database
7. Individual hook detail pages
8. GitHub stats (stars, forks, last updated)

## User Stories

1. **As a developer**, I want to browse available Claude Code hooks so I can discover tools to enhance my workflow
2. **As a developer**, I want to filter hooks by category so I can find hooks relevant to my specific needs
3. **As a developer**, I want to see a clear description of each hook so I can understand what it does before visiting the repo
4. **As a developer**, I want to click on a hook to visit its GitHub repository so I can install and use it
5. **As a developer**, I want a responsive experience so I can browse hooks on any device

## Data Model

### Hook Interface

```typescript
interface Hook {
  id: string;              // Unique identifier (e.g., "disler-hooks-mastery")
  name: string;            // Display name (e.g., "Claude Code Hooks Mastery")
  category: HookCategory;  // Category classification
  description: string;     // Brief description (1-2 sentences, ~100-150 chars)
  githubUrl: string;       // Full GitHub repository URL
  author: string;          // GitHub username or organization name
}

type HookCategory =
  | "Notifications"
  | "Formatting"
  | "Logging"
  | "Security"
  | "AI Enhancement"
  | "Multi-Agent"
  | "Workflow";
```

### Category Definitions

- **Notifications**: Hooks that provide alerts, sounds, or visual notifications
- **Formatting**: Hooks that auto-format code or enforce code style
- **Logging**: Hooks that track commands, log activity, or record history
- **Security**: Hooks that control access permissions and safeguard sensitive files
- **AI Enhancement**: Hooks that extend Claude's functionality with AI-powered features
- **Multi-Agent**: Hooks that monitor and coordinate multiple Claude agent instances
- **Workflow**: Hooks for automating development workflows and boosting productivity

### Initial Seed Data

Minimum of 6 hooks to populate the initial grid:

```typescript
const initialHooks: Hook[] = [
  {
    id: "disler-hooks-mastery",
    name: "Claude Code Hooks Mastery",
    category: "AI Enhancement",
    description: "Comprehensive demonstration of all 8 hook lifecycle events with TTS playback and AI-generated completion messages.",
    githubUrl: "https://github.com/disler/claude-code-hooks-mastery",
    author: "disler"
  },
  {
    id: "johnlindquist-claude-hooks",
    name: "TypeScript Claude Hooks",
    category: "Workflow",
    description: "TypeScript-powered hook system with full type safety and auto-completion for efficient hook development.",
    githubUrl: "https://github.com/johnlindquist/claude-hooks",
    author: "johnlindquist"
  },
  {
    id: "carlrannaberg-claudekit",
    name: "ClaudeKit",
    category: "AI Enhancement",
    description: "Comprehensive toolkit with custom commands, hooks, and utilities featuring automatic enhancement through thinking-level hooks.",
    githubUrl: "https://github.com/carlrannaberg/claudekit",
    author: "carlrannaberg"
  },
  {
    id: "chriswiles-showcase",
    name: "Claude Code Showcase",
    category: "Workflow",
    description: "Complete project configuration example with hooks, skills, agents, commands, and GitHub Actions workflows.",
    githubUrl: "https://github.com/ChrisWiles/claude-code-showcase",
    author: "ChrisWiles"
  },
  {
    id: "decider-claude-hooks",
    name: "Clean Code Hooks",
    category: "Formatting",
    description: "Comprehensive hooks to enforce clean code practices and automate workflows with code quality checks.",
    githubUrl: "https://github.com/decider/claude-hooks",
    author: "decider"
  },
  {
    id: "disler-multi-agent-observability",
    name: "Multi-Agent Observability",
    category: "Multi-Agent",
    description: "Real-time monitoring for Claude Code agents through simple hook event tracking and observability tools.",
    githubUrl: "https://github.com/disler/claude-code-hooks-multi-agent-observability",
    author: "disler"
  }
];
```

## UI/UX Design

### Page Layout Structure

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  HookHub                                                 │
│  Discover Claude Code Hooks                             │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  [All] [Notifications] [Formatting] [Logging]           │
│  [Security] [AI Enhancement] [Multi-Agent] [Workflow]   │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ Hook 1  │  │ Hook 2  │  │ Hook 3  │                 │
│  │         │  │         │  │         │                 │
│  └─────────┘  └─────────┘  └─────────┘                 │
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                 │
│  │ Hook 4  │  │ Hook 5  │  │ Hook 6  │                 │
│  │         │  │         │  │         │                 │
│  └─────────┘  └─────────┘  └─────────┘                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Header Component

- **Title**: "HookHub" (large, bold)
- **Tagline**: "Discover Claude Code Hooks" (subtitle, muted color)
- **Optional**: GitHub link icon to HookHub repository
- **Styling**: Clean, centered, ample spacing

### Category Filter Component

- **Layout**: Horizontal scrollable pills on mobile, wrapped flex on desktop
- **"All" Pill**: Default selected state, shows all hooks
- **Category Pills**: One for each HookCategory
- **Selected State**: Filled background, bold text
- **Unselected State**: Border only, regular text
- **Interaction**: Click to filter, smooth transition

### Hook Card Component

Each card displays:

1. **Category Badge** (top-left)
   - Small pill/chip with category name
   - Color-coded by category
   - Bold, uppercase text

2. **Hook Name** (prominent)
   - Large, bold font
   - Truncate if too long (1-2 lines max)

3. **Description** (body)
   - 2-3 lines of text
   - Muted color (gray-600/gray-400)
   - Line clamp to prevent overflow

4. **Author** (metadata)
   - Small text, muted
   - Format: "by @username"
   - GitHub icon prefix

5. **GitHub Link Indicator**
   - External link icon (top-right or bottom-right)
   - Subtle, indicates clickability

**Card States:**
- **Default**: White background (dark mode: dark gray), subtle border
- **Hover**: Slight elevation (shadow), border color change, smooth transition
- **Active/Click**: Navigate to GitHub repo in new tab

### Color Scheme

**Base Colors:**
- Background: `bg-zinc-50` (light) / `bg-black` (dark)
- Card Background: `bg-white` (light) / `bg-zinc-900` (dark)
- Text Primary: `text-zinc-900` (light) / `text-zinc-50` (dark)
- Text Secondary: `text-zinc-600` (light) / `text-zinc-400` (dark)

**Category Badge Colors:**

| Category         | Light Mode        | Dark Mode         |
|------------------|-------------------|-------------------|
| Notifications    | `bg-blue-100 text-blue-800` | `bg-blue-900 text-blue-200` |
| Formatting       | `bg-purple-100 text-purple-800` | `bg-purple-900 text-purple-200` |
| Logging          | `bg-green-100 text-green-800` | `bg-green-900 text-green-200` |
| Security         | `bg-red-100 text-red-800` | `bg-red-900 text-red-200` |
| AI Enhancement   | `bg-amber-100 text-amber-800` | `bg-amber-900 text-amber-200` |
| Multi-Agent      | `bg-cyan-100 text-cyan-800` | `bg-cyan-900 text-cyan-200` |
| Workflow         | `bg-pink-100 text-pink-800` | `bg-pink-900 text-pink-200` |

### Responsive Design Breakpoints

- **Mobile (< 640px)**:
  - 1 column grid
  - Full-width cards with padding
  - Category filter scrolls horizontally

- **Tablet (640px - 1024px)**:
  - 2 column grid
  - Cards with hover effects
  - Category filter wraps

- **Desktop (> 1024px)**:
  - 3 column grid
  - Maximum container width
  - All filters visible without scrolling

**Grid Specifications:**
```css
/* Mobile */
grid-template-columns: repeat(1, 1fr)
gap: 1rem (16px)

/* Tablet */
grid-template-columns: repeat(2, 1fr)
gap: 1.5rem (24px)

/* Desktop */
grid-template-columns: repeat(3, 1fr)
gap: 2rem (32px)
max-width: 1280px
```

## Technical Architecture

### Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Icons**: Lucide React (for GitHub, external link icons)
- **Deployment**: Vercel (recommended)

### File Structure

```
hookhub_suraj/
├── app/
│   ├── layout.tsx              # Root layout (existing, minimal changes)
│   ├── page.tsx                # Main page - hook grid view
│   └── globals.css             # Global Tailwind styles (existing)
│
├── components/
│   ├── Header.tsx              # Site header with title/tagline
│   ├── CategoryFilter.tsx      # Category filter pills
│   └── HookCard.tsx            # Individual hook card component
│
├── lib/
│   └── types.ts                # TypeScript interfaces (Hook, HookCategory)
│
├── data/
│   └── hooks.ts                # Static hook data array
│
├── spec/
│   └── CLAUDE.md               # This specification document
│
├── public/
│   └── (existing Next.js assets)
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

### Component Specifications

#### 1. `lib/types.ts`

```typescript
export type HookCategory =
  | "Notifications"
  | "Formatting"
  | "Logging"
  | "Security"
  | "AI Enhancement"
  | "Multi-Agent"
  | "Workflow";

export interface Hook {
  id: string;
  name: string;
  category: HookCategory;
  description: string;
  githubUrl: string;
  author: string;
}
```

#### 2. `data/hooks.ts`

```typescript
import { Hook } from "@/lib/types";

export const hooks: Hook[] = [
  // ... initial seed data (6+ hooks as defined above)
];
```

#### 3. `components/Header.tsx`

**Purpose**: Display site branding and tagline

**Props**: None

**Rendering**:
- H1 with "HookHub" title
- Subtitle/tagline
- Optional GitHub link

**Styling**:
- Centered text
- Large title (text-4xl or text-5xl)
- Muted subtitle (text-lg, text-zinc-600)

#### 4. `components/CategoryFilter.tsx`

**Purpose**: Render category filter pills

**Props**:
```typescript
interface CategoryFilterProps {
  categories: HookCategory[];
  selectedCategory: HookCategory | "All";
  onSelectCategory: (category: HookCategory | "All") => void;
}
```

**State**: None (controlled by parent)

**Rendering**:
- Map over ["All", ...categories]
- Render button/pill for each
- Apply selected styles conditionally

**Styling**:
- Flex container with wrap
- Pills with rounded borders
- Selected: filled background
- Unselected: border only
- Hover effects

#### 5. `components/HookCard.tsx`

**Purpose**: Display individual hook information

**Props**:
```typescript
interface HookCardProps {
  hook: Hook;
}
```

**Rendering**:
- Wrapped in `<a>` tag with `href={hook.githubUrl}`
- Category badge at top
- Hook name (bold, large)
- Description (2-3 lines, line-clamp)
- Author info with icon
- External link icon

**Styling**:
- Card with border and shadow
- Hover: elevation increase
- Smooth transitions
- Category-specific badge color

**Accessibility**:
- `target="_blank"` for external links
- `rel="noopener noreferrer"` for security

#### 6. `app/page.tsx` (Main Page)

**Purpose**: Main application page with hook grid

**State**:
```typescript
const [selectedCategory, setSelectedCategory] = useState<HookCategory | "All">("All");
```

**Data Flow**:
1. Import hooks from `data/hooks.ts`
2. Filter hooks based on selectedCategory
3. Pass filtered hooks to HookCard components

**Rendering**:
- Header component
- CategoryFilter component
- Grid container with HookCard components

**Styling**:
- Responsive grid (1/2/3 columns)
- Container with max-width
- Padding and spacing

## Implementation Plan

### Phase 1: Setup & Types

**Goal**: Establish data structures and dependencies

1. **Create `lib/types.ts`**
   - Define Hook interface
   - Define HookCategory type
   - Export both

2. **Create `data/hooks.ts`**
   - Import Hook type
   - Define hooks array with 6+ initial hooks
   - Export hooks array

3. **Install Dependencies**
   ```bash
   npm install lucide-react
   ```

### Phase 2: Build Components

**Goal**: Create reusable UI components

4. **Create `components/Header.tsx`**
   - Simple functional component
   - Title and tagline
   - Tailwind styling

5. **Create `components/CategoryFilter.tsx`**
   - Accept props: categories, selectedCategory, onSelectCategory
   - Map categories to pills
   - Handle click events
   - Apply conditional styling

6. **Create `components/HookCard.tsx`**
   - Accept hook prop
   - Render card with all hook data
   - Import icons from lucide-react
   - Apply category-specific badge colors
   - Link to GitHub repo

### Phase 3: Main Page

**Goal**: Compose components into main page

7. **Update `app/page.tsx`**
   - Remove default Next.js starter content
   - Import hooks data
   - Add state for selectedCategory
   - Implement filter logic
   - Render Header, CategoryFilter, HookCard grid
   - Apply responsive grid styling

8. **Update `app/globals.css` (if needed)**
   - Add custom category badge colors if not using Tailwind utilities
   - Add any custom animations or transitions

### Phase 4: Polish & Testing

**Goal**: Refine UI and verify functionality

9. **Responsive Design**
   - Test on mobile (< 640px)
   - Test on tablet (640px - 1024px)
   - Test on desktop (> 1024px)
   - Adjust grid gaps and padding

10. **Dark Mode**
    - Verify dark mode classes work correctly
    - Test category badge colors in dark mode
    - Ensure sufficient contrast

11. **Interactions**
    - Add hover effects to cards
    - Add hover effects to filter pills
    - Verify smooth transitions
    - Test all GitHub links

12. **Build & Verify**
    - Run `npm run build` (ensure no TypeScript errors)
    - Run `npm run dev` and test locally
    - Check browser console for errors
    - Validate responsive behavior

## Verification & Testing

### Manual Testing Checklist

**Functionality:**
- [ ] Homepage loads without errors
- [ ] All 6+ hooks are displayed in grid
- [ ] Category filter shows "All" + 7 categories
- [ ] Clicking "All" shows all hooks
- [ ] Clicking each category filters correctly
- [ ] Only hooks matching selected category are shown
- [ ] Hook cards display: name, category badge, description, author
- [ ] Clicking a hook card navigates to correct GitHub repo
- [ ] GitHub links open in new tab
- [ ] All external links have proper security attributes

**Responsive Design:**
- [ ] Mobile (< 640px): 1 column grid
- [ ] Tablet (640px - 1024px): 2 column grid
- [ ] Desktop (> 1024px): 3 column grid
- [ ] Category filter is scrollable on mobile
- [ ] Category filter wraps on tablet/desktop
- [ ] Cards maintain aspect ratio across breakpoints

**Visual Design:**
- [ ] Header is centered and readable
- [ ] Category badges have correct colors
- [ ] Text is legible in both light and dark modes
- [ ] Cards have proper spacing and padding
- [ ] Hover effects work on cards
- [ ] Hover effects work on filter pills
- [ ] Transitions are smooth (not jarring)

**Dark Mode:**
- [ ] Background colors are appropriate
- [ ] Text has sufficient contrast
- [ ] Category badges are readable
- [ ] Card borders are visible
- [ ] Hover states work in dark mode

**Build & Performance:**
- [ ] `npm run build` succeeds with no errors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No console errors in browser
- [ ] Page loads quickly (< 2 seconds)

### Browser Testing

Test on the following browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing

- [ ] Keyboard navigation works (tab through filter pills)
- [ ] Links have focus states
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader can read hook information

## Future Enhancements (Post-MVP)

### Phase 2 Features

1. **Search Functionality**
   - Full-text search across name and description
   - Combine with category filtering

2. **Sorting Options**
   - Sort by name (A-Z, Z-A)
   - Sort by category
   - Sort by author

3. **GitHub Integration**
   - Display star count
   - Display fork count
   - Display last updated date
   - Fetch data via GitHub API

4. **Hook Details Page**
   - Individual page for each hook (`/hooks/[id]`)
   - Display README content
   - Show installation instructions
   - Display hook code examples

5. **Installation Guide**
   - Modal with copy-paste instructions
   - Quick copy button for hook URLs
   - Link to Claude Code hooks documentation

6. **User Submissions**
   - Form to submit new hooks
   - Backend API for storage
   - Moderation/approval workflow

### Phase 3 Features

7. **Hook Previews**
   - Show example hook code in modal
   - Syntax highlighting
   - Copy button for code snippets

8. **Tags & Labels**
   - Additional metadata beyond categories
   - Multi-tag filtering
   - Tag cloud/popular tags

9. **Collections**
   - Curated collections (e.g., "Essential Hooks", "Productivity Pack")
   - User-created collections (requires auth)

10. **Analytics**
    - Track popular hooks (click-through rate)
    - Display "Most Popular" section
    - Trending hooks

11. **RSS Feed**
    - Subscribe to new hook announcements
    - Filter by category

12. **Theme Toggle**
    - Manual dark/light mode toggle
    - Respect system preference
    - Persist user choice

## Dependencies

### Current (Already Installed)

- next: 16.1.1
- react: 19.2.3
- react-dom: 19.2.3
- typescript: 5.x
- tailwindcss: 4.x

### To Add

```bash
npm install lucide-react
```

**Lucide React** provides:
- GitHub icon
- External link icon
- Other icons as needed (filter, search in future phases)

## Key Files Summary

### Files to Create

| File | Purpose | Dependencies |
|------|---------|--------------|
| `lib/types.ts` | TypeScript type definitions | None |
| `data/hooks.ts` | Static hook data array | `lib/types.ts` |
| `components/Header.tsx` | Site header component | None |
| `components/CategoryFilter.tsx` | Category filter UI | `lib/types.ts` |
| `components/HookCard.tsx` | Hook card component | `lib/types.ts`, `lucide-react` |

### Files to Modify

| File | Changes | Reason |
|------|---------|--------|
| `app/page.tsx` | Replace default content with HookHub UI | Main application page |
| `package.json` | Add `lucide-react` dependency | Icons for UI |
| `app/globals.css` | Optionally add custom styles | Category badge colors (if needed) |

---

## Resources

### Claude Code Hooks Documentation
- [Official Hooks Guide](https://code.claude.com/docs/en/hooks-guide)
- [GitHub: claude-code](https://github.com/anthropics/claude-code)

### Referenced Repositories
- [Claude Code Hooks Mastery](https://github.com/disler/claude-code-hooks-mastery)
- [claude-hooks (TypeScript)](https://github.com/johnlindquist/claude-hooks)
- [ClaudeKit](https://github.com/carlrannaberg/claudekit)
- [Claude Code Showcase](https://github.com/ChrisWiles/claude-code-showcase)
- [Clean Code Hooks](https://github.com/decider/claude-hooks)
- [Multi-Agent Observability](https://github.com/disler/claude-code-hooks-multi-agent-observability)

### Design Inspiration
- [GitHub Topics: claude-code](https://github.com/topics/claude-code)
- [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)

---

**Specification Version**: 1.0
**Last Updated**: 2026-01-11
**Status**: Ready for Implementation
