---
title: Getting Started With TechWrit AI
description: Create an account, learn the workspace layout, and submit your first request.
keywords: [getting started, workspace, onboarding, first request, framework]
last_update:
  date: 03/09/2026
  author: Patricia McPhee
---

TechWrit AI is an AI-powered documentation agent that reviews, rewrites, and generates technical content against your style rules, terminology standards, and product glossary.

## Create an account

1. Go to [techwrit.ai](https://techwrit.ai) and select **Get started**.
2. Sign up with your email or a social provider.
3. You land in the workspace with the Free tier (10 requests/month, all 14 modes).

## The workspace

The workspace has three areas:

- **Sidebar** (left) — New Chat, History, Features, Docs, and your user menu.
- **Context bar** — Dropdown selectors for Audience, Doc Type, Mode, Framework, and Templates.
- **Content input** — A text area where you paste or enter your content.

![The workspace](/img/docs/workspace.png "width=75%")

## Your first request

1. **Pick a mode.** The default is **Review** (detailed feedback with severity-ranked suggestions). Switch to **Write**, **Rewrite**, or any other mode using the Mode dropdown.
2. **Set context (optional).** Choose an Audience (e.g., Developers) and a Doc Type (e.g., API reference) to tailor the output.
3. **Enter your content.** Paste existing documentation or describe what you need. In **Code to Docs** mode, you can also select the **paperclip icon** to upload source code files directly. Or select a **Template** from the Templates dropdown to pre-fill the input with a structured prompt — just replace the placeholders with your details.
4. **Submit.** Select the arrow button or press `Ctrl+Enter` (`Cmd+Enter` on Mac).

The AI response appears below the input with token usage displayed.

## Target a docs framework

If your documentation site uses a docs-as-code framework, select it from the **Framework** dropdown in the context bar. The AI formats output using that framework's conventions — frontmatter, callouts, tabs, and components — so the output is ready to commit without a formatting pass.

Three frameworks are supported:

- **Trellis** — Next.js MDX with callouts, tabs, code highlighting, custom components, and search-indexed frontmatter.
- **Docusaurus** — React-based MDX with admonitions, tabs, versioned docs, sidebar ordering, and tag/keyword frontmatter.
- **Notion** — Markdown optimized for Notion's block system with callout blocks, toggles, to-do lists, and database property references.

When no framework is selected, output uses standard Markdown.

## What happens next

Action buttons appear below the output:

- **Feed to Review** — Pastes the output into the input, switches to Review mode, and submits automatically. Use this after a Rewrite to verify compliance, or after Write to get editorial feedback on generated content.
- **Keywords** — Extract search keywords from the output.
- **Gen Glossary** — Generate a glossary section from the output.

Use the **Reset** button in the context bar to clear selections and start fresh.

## Configure your standards

Open **Settings** from the user menu in the sidebar. You can:

- Toggle style rules on/off.
- Add custom style rules.
- Manage terminology substitutions (preferred vs. avoided terms).
- Manage your product glossary (terms, definitions, synonyms).
- Create custom prompt templates for recurring document types.
- Set custom instructions that apply to every request.
- Export/import your configuration as JSON.

See [Settings](/settings/) for details.
