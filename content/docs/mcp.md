---
title: MCP Server
description: "Expose TechWrit AI's 17 documentation modes as native tools in Claude Desktop, Cursor, and Claude Code via the Model Context Protocol."
keywords: [MCP, Model Context Protocol, Claude Desktop, Cursor, Claude Code, tools, review, rewrite, npx, stdio]
last_update:
  date: 07/31/2026
  author: Patricia McPhee
---

The TechWrit AI MCP server exposes all 17 modes — review, rewrite, simplify, code-to-docs, and more — as native tools in any [Model Context Protocol](https://modelcontextprotocol.io) client, including Claude Desktop, Cursor, and Claude Code. Ask your assistant to review or rewrite the file you're working on and it calls TechWrit AI directly, using your saved style rules, terminology, and glossary — without leaving your editor or chat.

Analysis runs in the TechWrit AI cloud, the same as the web app. Only a thin wrapper runs on your machine: the server is published to npm as `@techwrit-ai/mcp`, communicates over stdio, and starts on demand through `npx` — there is no install or build step.

## Requirements

- A TechWrit AI account with a **Pro** or **Team** subscription
- An API key — create one in the app at **Settings → API Keys** (see [API Keys](/api/api-keys/)). It starts with `twai_`.
- **Node.js 18 or later** (the wrapper runs locally through `npx`)

Without a Pro or Team API key, every tool returns an error (`API_KEY_REQUIRED` or `UNAUTHORIZED`). See [Troubleshooting](#troubleshooting).

## Installation

Add the server to your MCP client's configuration and provide your API key as the `TWAI_API_KEY` environment variable. Replace `twai_XXXX` with your own key in each example below.

### Claude Desktop

Open the config file (**Settings → Developer → Edit Config**, which opens `claude_desktop_config.json`) and add:

```json
{
  "mcpServers": {
    "techwrit": {
      "command": "npx",
      "args": ["-y", "@techwrit-ai/mcp"],
      "env": { "TWAI_API_KEY": "twai_XXXX" }
    }
  }
}
```

Restart Claude Desktop. The TechWrit AI tools appear in the tools menu.

[PLACEHOLDER: add a screenshot of the TechWrit AI tools listed in the Claude Desktop tools menu]

### Claude Code

Register the server from the command line:

```bash
claude mcp add techwrit --env TWAI_API_KEY=twai_XXXX -- npx -y @techwrit-ai/mcp
```

### Cursor

Add the same `mcpServers` block to `.cursor/mcp.json` in your project, or to your global Cursor MCP settings:

```json
{
  "mcpServers": {
    "techwrit": {
      "command": "npx",
      "args": ["-y", "@techwrit-ai/mcp"],
      "env": { "TWAI_API_KEY": "twai_XXXX" }
    }
  }
}
```

### VS Code

VS Code supports MCP servers natively through GitHub Copilot's agent mode (a Copilot subscription is required). Run **MCP: Add Server** from the Command Palette and follow the prompts, or create a `.vscode/mcp.json` file in your workspace. Note that VS Code uses `servers` as the top-level key — not `mcpServers` — and can prompt for your key instead of storing it:

```json
{
  "servers": {
    "techwrit": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@techwrit-ai/mcp"],
      "env": { "TWAI_API_KEY": "${input:twai-key}" }
    }
  },
  "inputs": [
    {
      "id": "twai-key",
      "type": "promptString",
      "description": "TechWrit AI API key",
      "password": true
    }
  ]
}
```

The `inputs` block prompts for your key the first time the server starts, so nothing sensitive is saved in the file. For a setup shared across all your workspaces, run **MCP: Open User Configuration** and add the same `servers` block there. Then open Copilot Chat in Agent mode to use the modes.

If you use the Claude Code extension in VS Code rather than Copilot, follow the Claude Code steps above instead.

### GitHub Copilot CLI

In the [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers), run `/mcp add` and follow the wizard, or edit `~/.copilot/mcp-config.json` directly. The Copilot CLI uses the `mcpServers` key, but with `type: "local"` and a `tools` array, and it reads your key from an environment variable:

```json
{
  "mcpServers": {
    "techwrit": {
      "type": "local",
      "command": "npx",
      "args": ["-y", "@techwrit-ai/mcp"],
      "tools": ["*"],
      "env": { "TWAI_API_KEY": "${TWAI_API_KEY}" }
    }
  }
}
```

Set `TWAI_API_KEY` in your shell first — for example, `export TWAI_API_KEY=twai_XXXX` — so the `${TWAI_API_KEY}` reference resolves. `"tools": ["*"]` enables all 17 modes.

## Tools

Each mode is a separate tool named `techwrit_<mode>`:

| Tool | What it does |
| ---- | ------------ |
| `techwrit_review` | Review against your style rules; returns severity-ranked findings |
| `techwrit_rewrite` | Rewrite to comply with your rules |
| `techwrit_style_check` | Per-rule audit with a style score |
| `techwrit_generate` | Generate documentation from a prompt |
| `techwrit_simplify` | Simplify for readability |
| `techwrit_keywords` | Generate search keywords and metadata |
| `techwrit_code_to_docs` | Generate API and developer docs from source code |
| `techwrit_user_guide` | Generate end-user concepts and how-tos from code |
| `techwrit_explain` | Explain code or documentation in plain language |
| `techwrit_summarize` | Summarize a document |
| `techwrit_expand` | Expand notes or an outline into full documentation |
| `techwrit_translate` | Translate documentation into another language |
| `techwrit_outline` | Generate a documentation outline |
| `techwrit_ux_review` | Review UI copy for clarity, tone, and consistency |
| `techwrit_ux_rewrite` | Rewrite UI copy to be concise and actionable |
| `techwrit_ux_generate` | Generate UI copy from a description |
| `techwrit_glossary_gen` | Generate a glossary section from a document |

You don't call these tools by name — describe what you want ("review this file against my style rules") and the assistant picks the right tool.

### Tool parameters

Every tool takes one required and three optional parameters:

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| `input` | Yes | The text to process — the document, source code, or prompt for the mode. |
| `docType` | No | Document-type context, e.g. `"API reference"`, `"User guide"`, `"Release notes"`. |
| `audience` | No | Target audience: `consumer`, `engineers`, `developers`, or `devops`. Tailors vocabulary and detail level. |
| `framework` | No | Output framework or structure hint for the mode. |

The three review-family tools — `techwrit_review`, `techwrit_style_check`, and `techwrit_ux_review` — also accept `format: "suggestions"`. Set it to receive a structured array of findings (each with a severity, the original text, a suggested replacement, and a reason) instead of prose. This is the format to use when you want your assistant to apply edits one at a time.

Your assistant fills these in for you based on your request, so you rarely set them by hand. Naming the audience or document type in your prompt ("review this as an API reference for developers") is usually enough for the assistant to pass the right values.

## Slash commands

The server exposes each mode as a **prompt** as well as a tool, and MCP clients surface prompts as **slash commands** — so you can trigger a mode on purpose instead of describing it.

In Claude Desktop, Cursor, or Claude Code, type `/` and choose the mode — for example `techwrit_review`. The client asks for the `input` (the document, source code, or prompt to process), then runs that mode against your saved style rules.

Slash commands and tools are the same 17 modes exposed two ways:

- **Slash commands** — a quick, discoverable trigger you invoke on purpose.
- **Tools** — called automatically by your assistant when your request needs one.

Restart your MCP client after installing or updating the server so new slash commands appear.

## How to use it

Once the server is registered, you work in plain language — describe what you want and your assistant runs the right mode. The key thing to understand: **the server never reads your files itself. Your AI client does.** Your assistant reads the code or document you're working on, passes it to a TechWrit AI mode, which applies your account's saved style rules, terminology, and glossary, and hands back the result for you to save. You stay in your editor the whole time.

### Two ways to run a mode

- **Ask in plain language.** Your assistant picks the matching tool automatically. *"Review this file against my style rules"* runs `review`; *"turn this handler into API docs"* runs `code-to-docs`.
- **Slash commands.** Type `/` and choose a mode — for example `/techwrit_review` — and your client prompts you for the input. Use these to trigger a specific mode on purpose.

Both cover the same 17 modes; pick whichever fits your flow.

### Working in a codebase

Because your assistant already has access to your repository, you can point it straight at source files — it reads the code, runs the mode, and writes the output wherever you ask:

> Generate API reference docs from `src/api/users.ts` and save them to `docs/api/users.md`.

A common loop is generate → review → fix, without leaving your editor:

> Draft docs for this new endpoint, review them against our style guide, then apply the fixes it flags.

### For developers

| Ask your assistant | Mode | What you get |
| --- | --- | --- |
| "Generate API reference docs from this file" | `code-to-docs` | A structured reference — parameter tables, types, request/response examples, error codes |
| "Review this README against my style rules" | `review` | Findings ranked Critical / Important / Minor, each with a concrete fix |
| "Explain what this middleware does, for the docs" | `explain` | A plain-language explanation ready for a concept page |
| "This runbook is too dense — simplify it" | `simplify` | A tighter, more scannable version at the same technical accuracy |
| "Rewrite CONTRIBUTING.md to match our terminology" | `rewrite` | The document corrected to your rules and glossary |

### For product managers and non-writers

| Ask your assistant | Mode | What you get |
| --- | --- | --- |
| "Turn these rough feature notes into a how-to guide" | `generate` / `expand` | A structured guide with prerequisites and numbered steps |
| "Draft an end-user guide from this feature's code" | `user-guide` | End-user concepts and how-tos, written from the actual product code |
| "Review the button labels and error messages in this component" | `ux-review` | Microcopy feedback — clarity, tone, consistency, accessibility |
| "Rewrite these release notes in our voice" | `rewrite` / `ux-rewrite` | Polished, on-brand copy |
| "Summarize this spec into three bullets for a stakeholder update" | `summarize` | A tight summary you can paste into an email |
| "Translate the getting-started guide to Spanish" | `translate` | A faithful translation that leaves code and commands intact |

### Machine-applicable suggestions

The review-family modes (`review`, `style-check`, `ux-review`) can return structured findings you accept one at a time instead of prose — ideal for editors that apply edits inline:

> Review this README against my rules and return the findings as suggestions.

## Configuration

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `TWAI_API_KEY` | (required) | Your `twai_` API key. |
| `TWAI_API_BASE` | TechWrit AI production API | Override only for self-hosted or local testing. |

The server calls the same v1 analyze API (`POST /api/v1/analyze`) as the web app and the [VS Code extension](/vscode-extension/), and uses your account's saved style rules, terminology, and glossary. Changes you make in the web app apply automatically; nothing needs to sync.

## Quota

Requests from the MCP server share the same monthly quota as the web app and other integrations. See [Pricing](/pricing/) for tier limits.

## Troubleshooting

**`UNAUTHORIZED`** — The API key is missing or invalid. Set `TWAI_API_KEY` to a valid `twai_` key in your client config, then restart the client.

**`API_KEY_REQUIRED`** — The v1 API requires a paid plan. Confirm your account is on Pro or Team, or upgrade at [techwrit.ai](https://techwrit.ai) (see [Pricing](/pricing/)). The tool surfaces the reason in its error message.

**Tools don't appear** — Confirm Node.js 18 or later is installed (`node --version`) and that you restarted the MCP client after editing its config. Check the client's MCP logs for the server's startup line.

**Server crashes on startup** — Check that `TWAI_API_KEY` is set and that your Node.js version meets the requirement. Review the MCP client logs for a stack trace.
