# Sublime Text Cheatsheet Design

**Date:** 2026-08-02  
**Repository:** `cskwork/sublime-text-cheatsheet`  
**Status:** Approved working design

## Goal

Create a small, public, fast-loading reference site for the most-used Sublime Text commands that developers reach for while exploring code: finding files, searching a folder, replacing text, navigating symbols, multi-cursor editing, building, and reviewing changes.

The site should be useful at a glance, remain readable on a phone, and be easy to update when Sublime Text changes. It will be published as a standalone GitHub Pages site and will not modify the existing AIDT repository.

## Approach

Use a dependency-free static site with HTML, CSS, and JavaScript. This is preferable to a framework build for a single-page reference because it minimizes deployment risk, keeps the site inspectable, and makes GitHub Pages publishing a simple artifact upload.

## Information architecture

1. **Header / hero**: version badge, short value proposition, quick platform switcher, and a search field.
2. **Quick path**: a small row of the highest-frequency workflows: find file, find in folder, replace, command palette, and build.
3. **Command library**: filterable cards grouped into:
   - Find & Replace
   - Navigate
   - Edit Faster
   - Multi-cursor
   - Project & Build
   - Git & Diff
   - Customize
   - Command Line
4. **Workflow notes**: short “use this when…” notes for search scope, regex, project indexing, and safe replace-all.
5. **Sources / footer**: official Sublime HQ links, version freshness note, repository link, and license.

## Interaction model

- The default platform is macOS, with Windows/Linux as a second display mode.
- Platform selection updates every shortcut without reloading and persists in `localStorage`.
- Search matches command name, description, category, tags, and shortcut text.
- Category chips filter the command library; an “All” state restores the full list.
- Each card has a copy button for shell commands or configuration snippets, with a visible success state and an accessible live-region announcement.
- URL hash anchors identify important workflows and allow links to be shared.
- Empty search states explain how to broaden the query.
- The page remains fully usable without JavaScript: content is present in the HTML and links remain available, while filtering and platform switching enhance the experience.

## Visual direction

The visual identity is an “editor darkroom”: near-black ink background, warm paper command cards, thin ruled dividers, signal-orange accents, and cool cyan metadata. It should feel like a developer field guide rather than a generic dashboard.

Typography uses a characterful display serif for editorial labels and a readable sans/monospace pairing for commands and keys. Motion is restrained: staggered entrance, hover elevation, and a reduced-motion fallback. Color is never the only signal for state.

## Content policy

- The site labels the current stable release as **Sublime Text 4, build 4200**, matching Sublime HQ’s download page checked on 2026-08-02.
- Shortcut values are cross-platform where the official documentation provides them, and verified against the installed Sublime Text default macOS/Windows/Linux keymaps when needed.
- Platform-specific command behavior is called out instead of implying that all shortcuts are universal.
- The reference is intentionally a “most-used” selection, not a complete command catalog.

## Files

- `index.html`: semantic page shell and accessible content fallback.
- `styles.css`: design tokens, responsive layout, cards, keycaps, and motion.
- `script.js`: command data, platform rendering, search, filters, copy behavior, and URL state.
- `sources.md`: source ledger with checked URLs and scope notes.
- `README.md`: project overview, maintenance notes, and Pages URL.
- `LICENSE`: MIT license for the cheat-sheet content and implementation.
- `.github/workflows/pages.yml`: deploys the repository root to GitHub Pages.

## Verification

Before publishing:

- `node --check script.js`
- parse the HTML with Python’s standard library and assert the required sections and command count exist
- serve locally with `python3 -m http.server` and exercise search, filters, platform switching, copy feedback, and responsive layout in a browser
- check links and the repository is clean before commit

After publishing:

- confirm the repository is public and the default branch is `main`
- confirm the Pages workflow completes successfully
- open the public Pages URL and verify the title, build badge, required workflows, and interactive controls
- record any GitHub Pages propagation delay separately from application failures

## Research sources

- Sublime HQ download and current stable build: https://www.sublimetext.com/download
- Sublime Text 4 build 4200 release notes: https://www.sublimetext.com/blog/articles/sublime-text-4200
- Official documentation index: https://www.sublimetext.com/docs/
- Multiple selection with the keyboard: https://www.sublimetext.com/docs/multiple_selection_with_the_keyboard.html
- Indexing and symbol navigation: https://www.sublimetext.com/docs/indexing.html
- Command line interface: https://www.sublimetext.com/docs/command_line.html
- Projects and `.sublime-project`: https://www.sublimetext.com/docs/projects.html
- Key bindings: https://www.sublimetext.com/docs/key_bindings.html
- Settings: https://www.sublimetext.com/docs/settings.html
- Build systems: https://www.sublimetext.com/docs/build_systems.html
- Incremental diff: https://www.sublimetext.com/docs/incremental_diff.html
- Git integration: https://www.sublimetext.com/docs/git_integration.html
- Column selection: https://www.sublimetext.com/docs/column_selection.html
- Distraction Free Mode: https://www.sublimetext.com/docs/distraction_free.html
