---
title: VS Code Extension
description: Review, rewrite, and simplify documentation against your style rules directly in VS Code.
keywords: [VS Code, extension, review, rewrite, simplify, style check, diagnostics, quick fix]
last_update:
  date: 02/22/2026
  author: Patricia McPhee
---

Review, rewrite, and simplify technical documentation against your style rules, terminology, and glossary — directly in VS Code.

## Requirements

- A TechWrit AI account with a **Pro** or **Team** subscription
- An API key (create one at [techwrit.ai](https://techwrit.ai) under **API Keys** in the user menu)

## Installation

1. Install the **TechWrit AI** extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=techwrit.techwrit-ai).
2. Open a Markdown file.
3. The status bar shows **TechWrit AI: No API key** — select it or run `TechWrit AI: Set API Key` from the command palette.
4. Paste your API key (starts with `twai_`).
5. Right-click in the editor and select **TechWrit AI: Review Document**.

Your API key is stored securely in VS Code's secret storage, not in settings.json.

## Commands

| Command | Shortcut | Description |
| ------- | -------- | ----------- |
| TechWrit AI: Review Document | `Ctrl+Shift+F6` | Review the full document for style issues |
| TechWrit AI: Style Check | `Ctrl+Shift+F7` | Audit every active rule with a style score |
| TechWrit AI: Rewrite Document | `Ctrl+Shift+F8` | Rewrite to comply with your style rules |
| TechWrit AI: Simplify Document | `Ctrl+Shift+F9` | Simplify for readability |
| TechWrit AI: Review Selection | | Review selected text only |
| TechWrit AI: Rewrite Selection | | Rewrite selected text in-place |
| TechWrit AI: Set API Key | | Configure your API key |

## How each mode works

### Review

Sends your document to the TechWrit AI API and returns severity-ranked issues (Critical, Important, Minor) as native VS Code diagnostics. Issues appear as squiggly underlines in the editor. Hover an issue to see the explanation, then select the lightbulb icon to apply the suggested correction as a quick-fix.

### Style Check

Runs a structured audit of every active style rule. Violations become diagnostics in the editor. The style score percentage displays in the status bar.

### Rewrite

Rewrites your document to comply with your style rules. The updated content replaces the document directly. Use **Ctrl+Z** to undo if needed.

### Simplify

Reduces reading complexity to Grade 8-10 level. Same in-place update behavior as Rewrite.

### Selection support

Select text, then right-click and choose **Review Selection** or **Rewrite Selection** to analyze or rewrite just the highlighted section.

## Settings

| Setting | Default | Description |
| ------- | ------- | ----------- |
| `techwrit.baseUrl` | `https://techwrit.ai/api` | API base URL |
| `techwrit.audience` | (empty) | Default target audience: consumer, engineers, developers, or devops |
| `techwrit.docType` | (empty) | Default document type (e.g., "API reference") |
| `techwrit.reviewOnSave` | `false` | Automatically run Review when saving Markdown files |

## Shared configuration

The extension uses your saved style rules, terminology substitutions, and product glossary from your TechWrit AI account. Any changes you make in the web app are reflected in the extension automatically — there is nothing to sync.

## Quota

API requests from the extension share the same monthly quota as the web app. Rate limit information is shown in the status bar tooltip after each request.

## Status bar

The status bar shows the current state of the extension:

- **No API key** — Select to enter your key
- **TechWrit AI** (checkmark) — Ready to use
- **Running Review/Rewrite/...** (spinner) — Analysis in progress
- **3 issues found** or **85% style score** — Results after a run

## Troubleshooting

**"API access requires a Pro or Team subscription"** — The extension requires a paid subscription. Upgrade at [techwrit.ai](https://techwrit.ai).

**"Invalid or missing API key"** — Your API key may have been revoked or is incorrect. Run `TechWrit AI: Set API Key` to re-enter it.

**No diagnostics appear after Review** — Check the Output panel (View > Output, select "TechWrit AI") for the full response. The document may already comply with your rules.

**Extension not visible in status bar** — The extension only activates when a Markdown file is open.
