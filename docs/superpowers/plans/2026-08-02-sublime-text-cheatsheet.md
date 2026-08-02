# Sublime Text Cheatsheet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `subagent-driven-development` or `executing-plans` to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Build and publish a dependency-free, responsive Sublime Text 4 build 4200 command reference with search, platform switching, filters, copy feedback, source notes, and GitHub Pages deployment.

**Architecture:** A semantic `index.html` provides an accessible content shell and non-JavaScript fallback. `styles.css` owns the darkroom visual system and responsive layout. `script.js` owns a single command data model plus rendering and interaction state, so adding or correcting a shortcut only changes one data object. GitHub Pages deploys the repository root as a static artifact through Actions.

**Tech Stack:** HTML5, CSS custom properties, vanilla JavaScript, GitHub Actions Pages deploy, Python standard library for validation, Playwright/browser smoke tests.

---

### Task 1: Create the semantic page shell and design system

**Files:**
- Create: `index.html`
- Create: `styles.css`

- [ ] **Step 1: Create the HTML shell.**

Create `index.html` with the following structural requirements:

```html
<header class="site-header">brand, stable build badge, platform switch</header>
<main>
  <section id="hero">eyebrow, h1, intro, search form</section>
  <nav id="quick-path" aria-label="Quick workflows">five anchor links</nav>
  <section id="library" aria-labelledby="library-title">
    <div class="library-toolbar">result count, category filter buttons</div>
    <div id="command-grid" class="command-grid"></div>
    <p id="empty-state" hidden>No matching commands...</p>
  </section>
  <section id="field-notes">four short workflow notes</section>
</main>
<footer id="sources">official source links and repository link</footer>
<div id="live-region" class="sr-only" aria-live="polite"></div>
<script src="script.js"></script>
```

Use buttons for platform and filter controls, labels for the search input, `aria-pressed` on toggles, and a skip link to `#library`. Keep the initial `command-grid` empty so JavaScript owns one rendering path while the surrounding headings and source links remain visible without JavaScript.

- [ ] **Step 2: Add the CSS token layer and layout.**

Define tokens for ink background, paper surfaces, orange accent, cyan accent, muted text, borders, radii, and shadows. Define styles for the hero, command cards, keycaps, tags, buttons, toolbars, field notes, footer, focus rings, empty state, and responsive breakpoints at 900px and 620px. Use `@media (prefers-reduced-motion: reduce)` to disable transitions and animations. Use a system-safe serif/sans/monospace stack with `Georgia`, `ui-sans-serif`, and `ui-monospace` fallbacks so the site has no external font dependency.

The default visual treatment must remain high contrast: warm paper cards on the dark background, orange only as an accent, and visible outlines for keyboard focus and active filters.

- [ ] **Step 3: Commit the static shell.**

Run:

```bash
git add index.html styles.css
git commit -m "feat: add cheatsheet page shell and darkroom design system"
```

Expected: one commit containing only `index.html` and `styles.css`.

---

### Task 2: Add the researched command library and interactions

**Files:**
- Create: `script.js`

- [ ] **Step 1: Define the command data model.**

Create a `commands` array. Each object must have `id`, `category`, `title`, `description`, `mac`, `pc`, `tags`, and optional `copy`. Include at least these researched workflows and shortcuts:

```js
{ id: "find-file", category: "Find & Replace", title: "Find a file", description: "Fuzzy-search files in the current window or project.", mac: "⌘ P", pc: "Ctrl P", tags: ["file", "goto", "project"] }
{ id: "find-folder", category: "Find & Replace", title: "Find in files", description: "Search file contents across the folders in the current window.", mac: "⇧ ⌘ F", pc: "Ctrl ⇧ F", tags: ["folder", "search", "project"] }
{ id: "find", category: "Find & Replace", title: "Find in file", description: "Open the find panel for the active file.", mac: "⌘ F", pc: "Ctrl F", tags: ["search", "match"] }
{ id: "replace", category: "Find & Replace", title: "Replace in file", description: "Open the replace panel for the active file.", mac: "⌥ ⌘ F", pc: "Ctrl H", tags: ["replace", "search"] }
{ id: "command-palette", category: "Navigate", title: "Command Palette", description: "Search menus and commands without leaving the keyboard.", mac: "⇧ ⌘ P", pc: "Ctrl ⇧ P", tags: ["command", "palette"] }
{ id: "goto-symbol", category: "Navigate", title: "Go to symbol in project", description: "Fuzzy-search indexed functions, classes, and other symbols.", mac: "⇧ ⌘ R", pc: "Ctrl ⇧ R", tags: ["symbol", "index"] }
{ id: "goto-definition", category: "Navigate", title: "Go to definition", description: "Jump from the symbol under the caret to its definition.", mac: "F12", pc: "F12", tags: ["definition", "navigation"] }
{ id: "goto-reference", category: "Navigate", title: "Go to reference", description: "Find references to the symbol under the caret.", mac: "⇧ F12", pc: "Shift F12", tags: ["reference", "navigation"] }
{ id: "goto-line", category: "Navigate", title: "Go to line", description: "Jump directly to a line number in the current file.", mac: "Ctrl G", pc: "Ctrl G", tags: ["line", "navigation"] }
{ id: "quick-add-next", category: "Multi-cursor", title: "Quick add next", description: "Add the next occurrence of the current word to the selection.", mac: "⌘ D", pc: "Ctrl D", tags: ["multi-cursor", "selection"] }
{ id: "find-all", category: "Multi-cursor", title: "Find all occurrences", description: "Select every occurrence of the current word.", mac: "⌃ ⌘ G", pc: "Alt F3", tags: ["multi-cursor", "selection"] }
{ id: "split-lines", category: "Multi-cursor", title: "Split selection into lines", description: "Turn a block selection into one caret per line.", mac: "⇧ ⌘ L", pc: "Ctrl ⇧ L", tags: ["multi-cursor", "lines"] }
{ id: "build", category: "Project & Build", title: "Build", description: "Run the active build system and open its output panel.", mac: "⌘ B", pc: "Ctrl B", tags: ["build", "test", "lint"] }
{ id: "build-with", category: "Project & Build", title: "Build with…", description: "Choose a different build system or variant.", mac: "⇧ ⌘ B", pc: "Ctrl ⇧ B", tags: ["build", "variant"] }
{ id: "next-result", category: "Project & Build", title: "Next build result", description: "Jump to the next file and line reported by the build output.", mac: "F4", pc: "F4", tags: ["build", "errors"] }
{ id: "toggle-console", category: "Command Line", title: "Toggle console", description: "Open the embedded console for quick API and settings inspection.", mac: "Ctrl `", pc: "Ctrl `", tags: ["console", "debug"] }
{ id: "open-from-cli", category: "Command Line", title: "Open from the terminal", description: "Use the `subl` command to open files, folders, or projects.", mac: "subl path/to/file", pc: "subl path\\to\\file", tags: ["cli", "terminal"], copy: "subl path/to/file" }
```

Add further common commands for save, close, duplicate line, delete line, comment toggle, indent, sidebar toggle, distraction-free mode, incremental diff navigation, and settings/key bindings. Keep platform differences explicit and use short descriptions.

- [ ] **Step 2: Implement platform, search, category, and hash state.**

Use `state = { platform: localStorage.getItem("st-platform") || "mac", category: "All", query: "" }`. Render shortcut text from `mac` or `pc`. Search a lowercased concatenation of title, description, category, tags, and both shortcut values. Filter by category after applying the query. Render result count and the empty state. Update `aria-pressed` on platform and category buttons. Store platform changes in `localStorage` and accept `#find-file`, `#find-folder`, `#replace`, `#command-palette`, and `#build` hashes by scrolling the matching card into view after render.

- [ ] **Step 3: Implement copy feedback.**

For cards with `copy`, render a copy button. Use `navigator.clipboard.writeText()` and catch failures by selecting a temporary textarea. Update the live region with “Copied …” or “Copy failed; select the command manually.” Restore the button label after 1.4 seconds. Ensure the handler uses `event.currentTarget` and never relies on color alone for feedback.

- [ ] **Step 4: Commit the data and behavior.**

Run:

```bash
node --check script.js
git add script.js
git commit -m "feat: add researched command library and interactions"
```

Expected: `node --check` exits 0 and the commit contains only `script.js`.

---

### Task 3: Add project documentation, sources, license, and Pages workflow

**Files:**
- Create: `README.md`
- Create: `sources.md`
- Create: `LICENSE`
- Create: `.github/workflows/pages.yml`

- [ ] **Step 1: Document the project.**

`README.md` must include the public Pages URL placeholder-free as `https://cskwork.github.io/sublime-text-cheatsheet/`, the repository purpose, supported platforms, the current stable version note (“Sublime Text 4, build 4200”), local preview command `python3 -m http.server 4173`, content update instructions (edit `commands` in `script.js`), and a short accessibility statement.

`sources.md` must list the official URLs from the design document and explain that build 4200 was checked on 2026-08-02. Note that find/replace bindings were cross-checked against the installed default keymaps because the public official docs describe the key binding system but do not enumerate every built-in shortcut in one page.

- [ ] **Step 2: Add the MIT license.**

Use the standard MIT license with copyright holder `cskwork` and year `2026`.

- [ ] **Step 3: Add the GitHub Pages workflow.**

Create `.github/workflows/pages.yml`:

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 4: Commit the documentation and workflow.**

Run:

```bash
git add README.md sources.md LICENSE .github/workflows/pages.yml
git commit -m "docs: add sources, license, and Pages deployment"
```

Expected: one commit containing the four listed files.

---

### Task 4: Run local validation and browser smoke tests

**Files:**
- Modify only if validation finds an actual defect in `index.html`, `styles.css`, or `script.js`.

- [ ] **Step 1: Run static checks.**

Run:

```bash
node --check script.js
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.text = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
    def handle_data(self, data):
        self.text.append(data)

p = Parser()
p.feed(Path('index.html').read_text())
required = {'hero', 'quick-path', 'library', 'command-grid', 'field-notes', 'sources', 'live-region'}
missing = required - p.ids
assert not missing, missing
assert 'Sublime Text' in ''.join(p.text)
print(f'html ids: {len(p.ids)}; required sections: {len(required)}')
PY
```

Expected: JavaScript syntax check exits 0 and the Python script prints the required section count without an assertion error.

- [ ] **Step 2: Serve the site locally.**

Run from the project root in a background terminal:

```bash
python3 -m http.server 4173
```

Expected: the server listens on `http://127.0.0.1:4173/`.

- [ ] **Step 3: Exercise the browser behavior.**

Open `http://127.0.0.1:4173/` and verify:

1. The page title, build 4200 badge, and hero render at desktop width.
2. Switching to Windows/Linux changes a shortcut such as Find in Files from `⇧ ⌘ F` to `Ctrl ⇧ F`, and reloading preserves the selected platform.
3. Searching `folder` shows Find in Files and hides unrelated cards; clearing the query restores the result count.
4. Selecting the Project & Build category hides other categories and updates the active filter state.
5. The Find in Files, Replace, Command Palette, and Build quick links scroll to the matching card.
6. The CLI copy button writes `subl path/to/file` and announces success.
7. At widths 390px and 1280px, cards remain readable, controls do not overflow, and the focus ring is visible.

- [ ] **Step 4: Commit any verified fixes and record the result.**

If a defect is found, fix only the responsible file, rerun the complete checks above, and commit with a specific message such as `fix: keep platform switcher usable on narrow screens`. If no defect is found, do not create a no-op commit.

---

### Task 5: Create the public repository, publish, and verify live Pages

**Files:**
- No source changes expected; use GitHub CLI and git remote configuration.

- [ ] **Step 1: Confirm the local tree is clean.**

Run:

```bash
git status --short --branch
git log --oneline --decorate -5
```

Expected: branch `main`, no uncommitted changes, and the design, implementation, and docs commits visible.

- [ ] **Step 2: Create the public GitHub repository and push.**

Run from the project root:

```bash
gh repo create cskwork/sublime-text-cheatsheet --public --description "A practical Sublime Text 4 developer cheatsheet" --source . --remote origin --push
```

Expected: GitHub reports a public repository at `https://github.com/cskwork/sublime-text-cheatsheet` and the `main` branch is pushed.

- [ ] **Step 3: Confirm workflow and Pages status.**

Run:

```bash
gh repo view cskwork/sublime-text-cheatsheet --json isPrivate,url,defaultBranchRef
 gh run list --repo cskwork/sublime-text-cheatsheet --workflow "Deploy GitHub Pages" --limit 3
```

Expected: `isPrivate` is `false`, the default branch is `main`, and the Pages workflow reaches `completed`/`success`.

- [ ] **Step 4: Verify the live URL.**

Open `https://cskwork.github.io/sublime-text-cheatsheet/`, wait for Pages propagation if necessary, and repeat the key checks from Task 4 against the deployed page. Confirm the deployed page title includes “Sublime Text Cheatsheet”, the build 4200 badge is present, and the requested Find in Files, Replace, and CLI workflows are visible.

- [ ] **Step 5: Report evidence.**

Report the public repository URL, Pages URL, commit(s), the exact local verification commands and outcomes, the workflow run status, and any propagation caveat. Do not claim live success until the URL has actually been opened and checked.
