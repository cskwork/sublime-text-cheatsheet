const commands = [
  {
    id: "find-file",
    category: "Find & Replace",
    title: "Find a file",
    description: "Fuzzy-search files in the current window or project.",
    mac: "⌘ P",
    pc: "Ctrl P",
    tags: ["file", "goto", "project"]
  },
  {
    id: "find-folder",
    category: "Find & Replace",
    title: "Find in files",
    description: "Search file contents across the folders in the current window.",
    mac: "⇧ ⌘ F",
    pc: "Ctrl ⇧ F",
    tags: ["folder", "search", "project"]
  },
  {
    id: "find",
    category: "Find & Replace",
    title: "Find in file",
    description: "Open the find panel for the active file.",
    mac: "⌘ F",
    pc: "Ctrl F",
    tags: ["search", "match"]
  },
  {
    id: "replace",
    category: "Find & Replace",
    title: "Replace in file",
    description: "Open the replace panel for the active file.",
    mac: "⌥ ⌘ F",
    pc: "Ctrl H",
    tags: ["replace", "search"]
  },
  {
    id: "find-next",
    category: "Find & Replace",
    title: "Find next",
    description: "Move to the next match without reopening the panel.",
    mac: "⌘ G",
    pc: "F3",
    tags: ["search", "match", "next"]
  },
  {
    id: "find-previous",
    category: "Find & Replace",
    title: "Find previous",
    description: "Move backward through the current search matches.",
    mac: "⇧ ⌘ G",
    pc: "Shift F3",
    tags: ["search", "match", "previous"]
  },
  {
    id: "command-palette",
    category: "Navigate",
    title: "Command Palette",
    description: "Search menus and commands without leaving the keyboard.",
    mac: "⇧ ⌘ P",
    pc: "Ctrl ⇧ P",
    tags: ["command", "palette", "menu"]
  },
  {
    id: "goto-anything",
    category: "Navigate",
    title: "Goto Anything",
    description: "Jump to a file, symbol, or line by adding a prefix to the query.",
    mac: "⌘ P",
    pc: "Ctrl P",
    tags: ["file", "symbol", "line", "goto"]
  },
  {
    id: "goto-symbol",
    category: "Navigate",
    title: "Go to symbol in project",
    description: "Fuzzy-search indexed functions, classes, and other symbols.",
    mac: "⇧ ⌘ R",
    pc: "Ctrl ⇧ R",
    tags: ["symbol", "index", "project"]
  },
  {
    id: "goto-definition",
    category: "Navigate",
    title: "Go to definition",
    description: "Jump from the symbol under the caret to its definition.",
    mac: "F12",
    pc: "F12",
    tags: ["definition", "navigation", "index"]
  },
  {
    id: "goto-reference",
    category: "Navigate",
    title: "Go to reference",
    description: "Find references to the symbol under the caret.",
    mac: "⇧ F12",
    pc: "Shift F12",
    tags: ["reference", "navigation", "index"]
  },
  {
    id: "goto-line",
    category: "Navigate",
    title: "Go to line",
    description: "Jump directly to a line number in the current file.",
    mac: "Ctrl G",
    pc: "Ctrl G",
    tags: ["line", "navigation"]
  },
  {
    id: "next-modification",
    category: "Navigate",
    title: "Next modification",
    description: "Jump to the next line changed since the file was saved.",
    mac: "Ctrl .",
    pc: "Ctrl .",
    tags: ["diff", "change", "navigation"]
  },
  {
    id: "previous-modification",
    category: "Navigate",
    title: "Previous modification",
    description: "Jump backward through the file’s incremental diff markers.",
    mac: "Ctrl ,",
    pc: "Ctrl ,",
    tags: ["diff", "change", "navigation"]
  },
  {
    id: "new-file",
    category: "Edit Faster",
    title: "New file",
    description: "Open an empty buffer without reaching for the File menu.",
    mac: "⌘ N",
    pc: "Ctrl N",
    tags: ["file", "buffer"]
  },
  {
    id: "save",
    category: "Edit Faster",
    title: "Save",
    description: "Save the active buffer and keep your working tree honest.",
    mac: "⌘ S",
    pc: "Ctrl S",
    tags: ["file", "save"]
  },
  {
    id: "save-all",
    category: "Edit Faster",
    title: "Save all",
    description: "Flush every dirty buffer in the current window.",
    mac: "⌥ ⌘ S",
    pc: "Ctrl Alt S",
    tags: ["file", "save", "window"]
  },
  {
    id: "close-file",
    category: "Edit Faster",
    title: "Close file",
    description: "Close the active view and return to the next useful tab.",
    mac: "⌘ W",
    pc: "Ctrl W",
    tags: ["file", "tab", "window"]
  },
  {
    id: "select-all",
    category: "Edit Faster",
    title: "Select all",
    description: "Select the complete active buffer.",
    mac: "⌘ A",
    pc: "Ctrl A",
    tags: ["selection", "edit"]
  },
  {
    id: "undo",
    category: "Edit Faster",
    title: "Undo",
    description: "Step back through edits in the current buffer.",
    mac: "⌘ Z",
    pc: "Ctrl Z",
    tags: ["edit", "history"]
  },
  {
    id: "redo",
    category: "Edit Faster",
    title: "Redo",
    description: "Restore an edit you just backed out of.",
    mac: "⇧ ⌘ Z",
    pc: "Ctrl ⇧ Z",
    tags: ["edit", "history"]
  },
  {
    id: "duplicate-line",
    category: "Edit Faster",
    title: "Duplicate line",
    description: "Clone the current line or selection in place.",
    mac: "⇧ ⌘ D",
    pc: "Ctrl ⇧ D",
    tags: ["line", "edit", "duplicate"]
  },
  {
    id: "delete-line",
    category: "Edit Faster",
    title: "Delete line",
    description: "Remove the current line without selecting it first.",
    mac: "Ctrl ⇧ K",
    pc: "Ctrl ⇧ K",
    tags: ["line", "edit", "delete"]
  },
  {
    id: "toggle-comment",
    category: "Edit Faster",
    title: "Toggle comment",
    description: "Comment or uncomment the current line or selection.",
    mac: "⌘ /",
    pc: "Ctrl /",
    tags: ["comment", "edit", "selection"]
  },
  {
    id: "indent",
    category: "Edit Faster",
    title: "Indent selection",
    description: "Push the current line or selection one indentation level in.",
    mac: "⌘ ]",
    pc: "Ctrl ]",
    tags: ["indent", "format", "selection"]
  },
  {
    id: "unindent",
    category: "Edit Faster",
    title: "Unindent selection",
    description: "Pull the current line or selection one level back out.",
    mac: "⌘ [",
    pc: "Ctrl [",
    tags: ["indent", "format", "selection"]
  },
  {
    id: "paste-indent",
    category: "Edit Faster",
    title: "Paste and indent",
    description: "Paste text and adapt it to the current indentation level.",
    mac: "⇧ ⌘ V",
    pc: "Ctrl ⇧ V",
    tags: ["paste", "indent", "format"]
  },
  {
    id: "fold",
    category: "Edit Faster",
    title: "Fold code",
    description: "Collapse the block at the caret to keep a large file legible.",
    mac: "⌥ ⌘ [",
    pc: "Ctrl ⇧ [",
    tags: ["fold", "structure", "navigation"]
  },
  {
    id: "unfold",
    category: "Edit Faster",
    title: "Unfold code",
    description: "Reopen the folded block at the caret.",
    mac: "⌥ ⌘ ]",
    pc: "Ctrl ⇧ ]",
    tags: ["fold", "structure", "navigation"]
  },
  {
    id: "quick-add-next",
    category: "Multi-cursor",
    title: "Quick add next",
    description: "Add the next occurrence of the current word to the selection.",
    mac: "⌘ D",
    pc: "Ctrl D",
    tags: ["multi-cursor", "selection", "repeat"]
  },
  {
    id: "quick-skip-next",
    category: "Multi-cursor",
    title: "Skip next occurrence",
    description: "Skip one match while continuing a multi-selection.",
    mac: "⌘ K, ⌘ D",
    pc: "Ctrl K, Ctrl D",
    tags: ["multi-cursor", "selection", "skip"]
  },
  {
    id: "find-all",
    category: "Multi-cursor",
    title: "Find all occurrences",
    description: "Select every occurrence of the current word.",
    mac: "⌃ ⌘ G",
    pc: "Alt F3",
    tags: ["multi-cursor", "selection", "search"]
  },
  {
    id: "split-lines",
    category: "Multi-cursor",
    title: "Split selection into lines",
    description: "Turn a block selection into one caret per line.",
    mac: "⇧ ⌘ L",
    pc: "Ctrl ⇧ L",
    tags: ["multi-cursor", "selection", "lines"]
  },
  {
    id: "add-line",
    category: "Multi-cursor",
    title: "Add line to selection",
    description: "Extend a multi-selection to the line above or below. Linux uses Alt + Shift + arrows.",
    mac: "⌃ ⇧ ↑ / ↓",
    pc: "Ctrl Alt ↑ / ↓",
    tags: ["multi-cursor", "selection", "lines"]
  },
  {
    id: "build",
    category: "Project & Build",
    title: "Build",
    description: "Run the active build system and open its output panel.",
    mac: "⌘ B",
    pc: "Ctrl B",
    tags: ["build", "test", "lint"]
  },
  {
    id: "build-with",
    category: "Project & Build",
    title: "Build with…",
    description: "Choose a different build system or variant.",
    mac: "⇧ ⌘ B",
    pc: "Ctrl ⇧ B",
    tags: ["build", "variant", "tool"]
  },
  {
    id: "next-result",
    category: "Project & Build",
    title: "Next build result",
    description: "Jump to the next file and line reported by build output.",
    mac: "F4",
    pc: "F4",
    tags: ["build", "errors", "navigation"]
  },
  {
    id: "previous-result",
    category: "Project & Build",
    title: "Previous build result",
    description: "Move backward through the locations reported by the build.",
    mac: "⇧ F4",
    pc: "Shift F4",
    tags: ["build", "errors", "navigation"]
  },
  {
    id: "new-build-system",
    category: "Project & Build",
    title: "Create a build system",
    description: "Open the JSON template for a custom compiler, linter, or test runner.",
    mac: "Tools → Build System → New Build System…",
    pc: "Tools → Build System → New Build System…",
    kind: "menu",
    tags: ["build", "json", "tool"]
  },
  {
    id: "toggle-hunk",
    category: "Git & Diff",
    title: "Toggle hunk diff",
    description: "Show the previous content inline for the changed region under the caret.",
    mac: "⌘ K, ⌘ /",
    pc: "Ctrl K, Ctrl /",
    tags: ["git", "diff", "review"]
  },
  {
    id: "revert-hunk",
    category: "Git & Diff",
    title: "Revert modification",
    description: "Restore the current changed region to its previous content.",
    mac: "⌘ K, ⌘ Z",
    pc: "Ctrl K, Ctrl Z",
    tags: ["git", "diff", "revert"]
  },
  {
    id: "git-status",
    category: "Git & Diff",
    title: "Read Git status",
    description: "Use sidebar badges and the status bar to see modified, staged, and untracked files.",
    mac: "Sidebar + status bar",
    pc: "Sidebar + status bar",
    kind: "menu",
    tags: ["git", "status", "review"]
  },
  {
    id: "settings",
    category: "Customize",
    title: "Open settings",
    description: "Edit user settings in the right-hand pane of the Preferences view.",
    mac: "Preferences → Settings",
    pc: "Preferences → Settings",
    kind: "menu",
    tags: ["settings", "preferences", "json"]
  },
  {
    id: "key-bindings",
    category: "Customize",
    title: "Edit key bindings",
    description: "Add or override shortcuts in a JSON `.sublime-keymap` file.",
    mac: "Preferences → Key Bindings",
    pc: "Preferences → Key Bindings",
    kind: "menu",
    tags: ["settings", "keymap", "customize"]
  },
  {
    id: "syntax-settings",
    category: "Customize",
    title: "Syntax-specific settings",
    description: "Tune indentation, wrapping, or other editor settings for one syntax.",
    mac: "Preferences → Settings – Syntax Specific",
    pc: "Preferences → Settings – Syntax Specific",
    kind: "menu",
    tags: ["settings", "syntax", "indent"]
  },
  {
    id: "distraction-free",
    category: "Customize",
    title: "Distraction Free Mode",
    description: "Hide the chrome and center the text when the editor needs your full attention.",
    mac: "⌃ ⌘ ⇧ F",
    pc: "Shift F11",
    tags: ["focus", "layout", "writing"]
  },
  {
    id: "toggle-panel",
    category: "Customize",
    title: "Hide a panel",
    description: "Close a find, output, or console panel without reaching for the mouse.",
    mac: "Esc",
    pc: "Esc",
    tags: ["panel", "focus", "layout"]
  },
  {
    id: "open-from-cli",
    category: "Command Line",
    title: "Open from the terminal",
    description: "Use the `subl` command to open files, folders, or projects.",
    mac: "subl path/to/file",
    pc: "subl path\\to\\file",
    copy: "subl path/to/file",
    kind: "cli",
    tags: ["cli", "terminal", "file"]
  },
  {
    id: "open-project-cli",
    category: "Command Line",
    title: "Open a project from CLI",
    description: "Load a named `.sublime-project` file in the editor.",
    mac: "subl --project app.sublime-project",
    pc: "subl --project app.sublime-project",
    copy: "subl --project app.sublime-project",
    kind: "cli",
    tags: ["cli", "project", "terminal"]
  },
  {
    id: "wait-editor",
    category: "Command Line",
    title: "Use Sublime as EDITOR",
    description: "Make Git and other terminal tools wait for Sublime Text to close the file.",
    mac: "export EDITOR='subl -w'",
    pc: "setx EDITOR \"subl -w\"",
    copy: "export EDITOR='subl -w'",
    kind: "cli",
    tags: ["cli", "git", "editor"]
  },
  {
    id: "safe-mode",
    category: "Command Line",
    title: "Launch safe mode",
    description: "Start with a clean, sandboxed environment when troubleshooting packages.",
    mac: "subl --safe-mode",
    pc: "subl --safe-mode",
    copy: "subl --safe-mode",
    kind: "cli",
    tags: ["cli", "safe mode", "troubleshooting"]
  },
  {
    id: "version-cli",
    category: "Command Line",
    title: "Check the CLI version",
    description: "Confirm which Sublime Text build the `subl` command resolves to.",
    mac: "subl --version",
    pc: "subl --version",
    copy: "subl --version",
    kind: "cli",
    tags: ["cli", "version", "troubleshooting"]
  }
];

const categories = [
  "All",
  "Find & Replace",
  "Navigate",
  "Edit Faster",
  "Multi-cursor",
  "Project & Build",
  "Git & Diff",
  "Customize",
  "Command Line"
];

const state = {
  platform: window.localStorage.getItem("st-platform") || "mac",
  category: "All",
  query: ""
};

const refs = {
  grid: document.getElementById("command-grid"),
  empty: document.getElementById("empty-state"),
  resultCount: document.getElementById("result-count"),
  search: document.getElementById("command-search"),
  platformLabel: document.getElementById("platform-label"),
  heroCount: document.getElementById("hero-command-count"),
  liveRegion: document.getElementById("live-region"),
  searchHint: document.querySelector(".search-hint")
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character]);
}

function formatShortcut(value, kind) {
  if (kind === "menu") {
    return `<span class="menu-value">${escapeHtml(value)}</span>`;
  }

  if (kind === "cli") {
    return `<code class="cli-value">${escapeHtml(value)}</code>`;
  }

  const groups = String(value).split(" / ");
  return groups.map((group, groupIndex) => {
    const sequence = group.split(",").map((chord) => {
      const parts = chord.trim().split(/\s+/).filter(Boolean);
      return parts.map((part) => `<kbd>${escapeHtml(part)}</kbd>`).join("");
    }).join('<span class="shortcut-sequence">then</span>');
    const separator = groupIndex < groups.length - 1 ? '<span class="shortcut-sequence">/</span>' : "";
    return `${sequence}${separator}`;
  }).join("");
}

function getSearchText(item) {
  return [item.title, item.description, item.category, item.mac, item.pc, ...item.tags].join(" ").toLowerCase();
}

function getFilteredCommands() {
  const query = state.query.trim().toLowerCase();
  return commands.filter((item) => {
    const categoryMatch = state.category === "All" || item.category === state.category;
    const queryMatch = !query || getSearchText(item).includes(query);
    return categoryMatch && queryMatch;
  });
}

function renderCategoryCounts() {
  categories.forEach((category) => {
    const count = category === "All" ? commands.length : commands.filter((item) => item.category === category).length;
    const target = document.querySelector(`[data-category-count="${CSS.escape(category)}"]`);
    if (target) target.textContent = count;
  });
}

function renderPlatformState() {
  const platformName = state.platform === "mac" ? "Mac" : "Windows/Linux";
  refs.platformLabel.textContent = platformName;
  refs.searchHint.textContent = state.platform === "mac" ? "⌘ K" : "Ctrl K";

  document.querySelectorAll("[data-platform]").forEach((button) => {
    const active = button.dataset.platform === state.platform;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderFilterState() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    const active = button.dataset.category === state.category;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderCard(item, index) {
  const shortcut = item[state.platform] || item.mac;
  const copyButton = item.copy
    ? `<button class="copy-button" type="button" data-copy="${escapeHtml(item.copy)}" data-copy-title="${escapeHtml(item.title)}">copy ↗</button>`
    : "";
  const tags = item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

  return `
    <article class="command-card" id="${escapeHtml(item.id)}" style="--card-index: ${index}" data-category="${escapeHtml(item.category)}">
      <div class="card-top">
        <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="card-category">${escapeHtml(item.category)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p class="card-description">${escapeHtml(item.description)}</p>
      <div class="shortcut-row">
        <span class="shortcut-label">${item.kind === "cli" ? "terminal" : item.kind === "menu" ? "menu path" : "shortcut"}</span>
        <span class="shortcut-value">${formatShortcut(shortcut, item.kind)}</span>
      </div>
      <div class="card-bottom">
        <div class="tag-list">${tags}</div>
        ${copyButton}
      </div>
    </article>
  `;
}

function render() {
  const filtered = getFilteredCommands();
  refs.grid.innerHTML = filtered.map(renderCard).join("");
  refs.grid.hidden = filtered.length === 0;
  refs.empty.hidden = filtered.length !== 0;
  refs.resultCount.textContent = `${filtered.length} of ${commands.length} commands`;
  refs.heroCount.textContent = `${commands.length}`;
  renderPlatformState();
  renderFilterState();
}

function announce(message) {
  refs.liveRegion.textContent = "";
  window.setTimeout(() => {
    refs.liveRegion.textContent = message;
  }, 20);
}

function setPlatform(platform) {
  state.platform = platform;
  window.localStorage.setItem("st-platform", platform);
  render();
  announce(`Shortcuts switched to ${platform === "mac" ? "Mac" : "Windows and Linux"}.`);
}

function setCategory(category) {
  state.category = category;
  render();
  announce(`${category} filter selected.`);
}

function setQuery(query) {
  state.query = query;
  render();
}

function scrollToHash() {
  const id = window.location.hash.slice(1);
  if (!id || !commands.some((item) => item.id === id)) return;

  if (state.category !== "All" || state.query) {
    state.category = "All";
    state.query = "";
    refs.search.value = "";
    render();
  }

  window.requestAnimationFrame(() => {
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo(0, Math.max(0, top));
  });
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = text;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  const copied = document.execCommand("copy");
  temporaryInput.remove();
  if (!copied) throw new Error("Copy command failed");
}

function selectCommandText(copyButton) {
  const command = copyButton.closest(".command-card")?.querySelector(".cli-value, .menu-value");
  if (!command) return false;
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(command);
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

document.querySelectorAll("[data-platform]").forEach((button) => {
  button.addEventListener("click", () => setPlatform(button.dataset.platform));
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => setCategory(button.dataset.category));
});

refs.search.addEventListener("input", (event) => setQuery(event.target.value));
document.getElementById("search-form").addEventListener("submit", (event) => event.preventDefault());

document.querySelector("[data-reset-search]").addEventListener("click", () => {
  state.category = "All";
  state.query = "";
  refs.search.value = "";
  render();
  refs.search.focus();
});

document.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-copy]");
  if (!copyButton) return;

  const originalLabel = copyButton.textContent;
  try {
    await copyText(copyButton.dataset.copy);
    copyButton.textContent = "copied ✓";
    announce(`Copied ${copyButton.dataset.copyTitle}.`);
  } catch (error) {
    const selected = selectCommandText(copyButton);
    copyButton.textContent = selected ? "selected ↗" : "copy unavailable";
    announce(selected ? "Command selected. Press your platform copy shortcut." : "Copy is unavailable in this browser.");
  }

  window.setTimeout(() => {
    copyButton.textContent = originalLabel;
  }, 1400);
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    refs.search.focus();
    refs.search.select();
  }

  if (event.key === "Escape" && document.activeElement === refs.search && refs.search.value) {
    refs.search.value = "";
    setQuery("");
  }
});

window.addEventListener("hashchange", scrollToHash);

renderCategoryCounts();
render();
scrollToHash();
window.addEventListener("load", () => window.setTimeout(scrollToHash, 30));
