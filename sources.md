# Sources and research notes

Checked on **2026-08-02**. The stable version label in the site follows Sublime HQ’s current download page: **Sublime Text 4, build 4200**.

## Current version

- [Sublime Text download page](https://www.sublimetext.com/download) — current stable version and Build 4200 changelog.
- [Sublime Text 4 Build 4200 announcement](https://www.sublimetext.com/blog/articles/sublime-text-4200) — release date, plugin-runtime changes, sidebar-on-right setting, TOML/Zsh syntax support, interactive build input, and multi-selection performance improvements.

## Shortcut and workflow references

- [Official documentation index](https://www.sublimetext.com/docs/) — scope of the first-party usage and customization documentation.
- [Multiple Selection with the Keyboard](https://www.sublimetext.com/docs/multiple_selection_with_the_keyboard.html) — Quick Add Next, Quick Skip Next, Find All, line selection, and split selection shortcuts.
- [Column Selection](https://www.sublimetext.com/docs/column_selection.html) — platform-specific column selection behavior.
- [Indexing](https://www.sublimetext.com/docs/indexing.html) — Goto Definition, Goto Reference, Goto Symbol in Project, indexing status, and completion behavior.
- [Command Line Interface](https://www.sublimetext.com/docs/command_line.html) — `subl` setup, file/project opening, `--project`, `--wait`, `--safe-mode`, `--version`, and `EDITOR` configuration.
- [Projects](https://www.sublimetext.com/docs/projects.html) — `.sublime-project` and `.sublime-workspace` roles and project JSON structure.
- [Key Bindings](https://www.sublimetext.com/docs/key_bindings.html) — `.sublime-keymap` format, modifiers, sequences, commands, arguments, and contexts.
- [Settings](https://www.sublimetext.com/docs/settings.html) — Preferences files, syntax-specific settings, project settings, and settings commands.
- [Build Systems](https://www.sublimetext.com/docs/build_systems.html) — build/run, Build With, result navigation, cancellation, `.sublime-build` format, and interactive input in current builds.
- [Incremental Diff](https://www.sublimetext.com/docs/incremental_diff.html) — next/previous modification, inline hunk diff, and reverting a modification.
- [Git Integration](https://www.sublimetext.com/docs/git_integration.html) — sidebar badges, status bar repository state, diff targets, and Sublime Merge entry points.
- [Distraction Free Mode](https://www.sublimetext.com/docs/distraction_free.html) — focus mode behavior and default settings.

## Verification notes

The official docs explain the key binding system and named workflows, but they do not publish every built-in shortcut in one page. For the most common find/replace, edit, layout, and build bindings, the default macOS, Windows, and Linux keymaps packaged with the locally installed Sublime Text 4 build were inspected on 2026-08-02. The site intentionally labels menu paths and command-line examples when a single keyboard shortcut is not the best cross-platform representation.

This cheatsheet is a curated developer reference. It does not claim to cover every command, package, or user-customized keymap.
