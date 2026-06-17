---
title: MCP Server
description: "Use TechWrit AI's 17 modes as native tools in any MCP client — Claude Desktop, Cursor, and Claude Code."
keywords: [MCP, Model Context Protocol, Claude Desktop, Cursor, Claude Code, tools, review, rewrite, npx]
last_update:
  date: 06/17/2026
  author: Patricia McPhee
---

The TechWrit AI MCP server exposes all 17 modes — review, rewrite, simplify, code-to-docs, and more — as native tools in any [Model Context Protocol](https://modelcontextprotocol.io) client, including Claude Desktop, Cursor, and Claude Code. Ask your assistant to review or rewrite a file and it calls TechWrit AI directly, using your saved style rules, terminology, and glossary.

## Requirements

- A TechWrit AI account with a **Pro** or **Team** subscription
- An API key — create one in the app at **Settings → API Keys** (see [API Keys](/api/api-keys/))
- **Node.js 18 or later** (the server runs locally through `npx`)

## Installation

The server is published to npm as `@techwrit-ai/mcp` and runs on demand with `npx` — there is nothing to install or build. Add it to your MCP client's configuration and provide your API key as an environment variable.

### Claude Desktop

Open the config file (**Settings → Developer → Edit Config**, which opens `claude_desktop_config.json`) and add:

```json
{
  "mcpServers": {
    "techwrit": {
      "command": "npx",
      "args": ["-y", "@techwrit-ai/mcp"],
      "env": { "TWAI_API_KEY": "twai_your_key_here" }
    }
  }
}
```

Restart Claude Desktop. The TechWrit AI tools appear in the tools menu.

### Cursor

Add the same `mcpServers` block to `.cursor/mcp.json` in your project, or to your global Cursor MCP settings.

### Claude Code

Register it from the command line:

```bash
claude mcp add techwrit --env TWAI_API_KEY=twai_your_key_here -- npx -y @techwrit-ai/mcp
```

## Tools

Each mode is a separate tool named `techwrit_<mode>`:

| Tool | What it does |
| ---- | ------------ |
| `techwrit_review` | Review against your style rules; returns severity-ranked findings |
| `techwrit_rewrite` | Rewrite to comply with your rules |
| `techwrit_style_check` | Per-rule audit with a style score |
| `techwrit_simplify` | Simplify for readability |
| `techwrit_generate` | Generate documentation from a prompt |
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

You don't call these by name — describe what you want ("review this file against my style rules") and the assistant picks the right tool. Each tool also accepts optional context: document type, audience, and framework.

## Configuration

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `TWAI_API_KEY` | (required) | Your `twai_` API key. |
| `TWAI_API_BASE` | TechWrit AI production API | Override only for self-hosted or local testing. |

The server uses your account's saved style rules, terminology, and glossary — the same configuration as the web app and the [VS Code extension](/vscode-extension/). Changes you make in the web app apply automatically; nothing needs to sync.

## Quota

Requests from the MCP server share the same monthly quota as the web app and other integrations. See [Pricing](/pricing/) for tier limits.

## Troubleshooting

**"Invalid or missing API key"** — Set `TWAI_API_KEY` to a valid `twai_` key in your client config, then restart the client.

**"API access requires a Pro or Team subscription"** — The API requires a paid plan. Upgrade at [techwrit.ai](https://techwrit.ai).

**Tools don't appear** — Confirm Node.js 18 or later is installed (`node --version`) and that you restarted the MCP client after editing its config. Check the client's MCP logs for the server's startup line.
