# Sublime Text Cheatsheet

A practical, searchable field guide to the Sublime Text commands developers use while exploring code, reshaping text, and keeping the build loop close.

**Live site:** [cskwork.github.io/sublime-text-cheatsheet](https://cskwork.github.io/sublime-text-cheatsheet/)  
**Repository:** [github.com/cskwork/sublime-text-cheatsheet](https://github.com/cskwork/sublime-text-cheatsheet)

## What is inside

- **Find & Replace** for files, folders, matches, and replacement workflows
- **Navigate** for Goto Anything, symbols, definitions, references, lines, and diffs
- **Edit Faster** for multi-line editing, comments, indentation, folding, and history
- **Multi-cursor** for repeated edits without leaving the keyboard
- **Project & Build** for build systems and result navigation
- **Git & Diff** for incremental diffs and review-oriented shortcuts
- **Customize** for settings, key bindings, syntax-specific settings, and focus mode
- **Command Line** for `subl`, `EDITOR`, safe mode, and build checks

The site defaults to **Mac** shortcuts and includes a Windows/Linux toggle. Search matches titles, descriptions, categories, tags, and shortcuts. CLI examples have copy buttons with a selection fallback when browser clipboard permissions are unavailable.

## Freshness

The current stable release listed by Sublime HQ on **2026-08-02** is **Sublime Text 4, build 4200**. The site is a curated “most-used” reference rather than a complete command catalog. See [`sources.md`](sources.md) for the research ledger and scope notes.

## Run locally

No package install or build step is required:

```bash
python3 -m http.server 4173
```

Open <http://127.0.0.1:4173/>.

## Update the content

1. Edit the `commands` array in [`script.js`](script.js).
2. Keep each command’s `id`, `category`, `title`, `description`, `mac`, `pc`, and `tags` fields accurate.
3. Add an optional `kind: "menu"` for menu paths or `kind: "cli"` plus `copy` for terminal commands.
4. Cross-check changes against the official sources in [`sources.md`](sources.md).
5. Run the local checks:

```bash
node --check script.js
python3 - <<'PY'
from html.parser import HTMLParser
from pathlib import Path

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])

parser = Parser()
parser.feed(Path('index.html').read_text())
required = {'hero', 'quick-path', 'library', 'command-grid', 'field-notes', 'sources', 'live-region'}
assert required <= parser.ids
print('static checks passed')
PY
```

## Accessibility and performance

The page uses semantic headings, labelled search and toggle controls, visible focus rings, `aria-pressed` states, an `aria-live` announcement region, reduced-motion support, and a responsive layout. It has no runtime dependencies, external font requests, or build-time asset pipeline.

## Deployment

Pushes to `main` run [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which uploads the repository root as a GitHub Pages artifact and deploys it through the official Pages Actions.

## License

MIT. See [`LICENSE`](LICENSE).
