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

## Usage

Once the server is registered, work in plain language. Open or paste the file you want to work on, then ask your assistant to run a mode. For example:

> Review this file against my style rules and list the issues by severity.

The assistant calls `techwrit_review` with your document as `input`, and TechWrit AI checks it against your account's saved style rules, terminology, and glossary. Other examples:

> Rewrite the selected paragraph to match my style guide.

> Turn this Go handler into API reference docs for developers.

> Simplify the Overview section so a non-specialist can follow it.

To get structured, machine-applicable findings you can accept one by one, ask for suggestions:

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
