---
title: "Docs from Code"
description: "Generate API references, developer guides, and end-user documentation directly from your source code — in the web app, your editor, or CI."
keywords: [docs from code, code to docs, generate documentation, source code, API reference, developer guide, user guide, MCP, VS Code, CI, developers, product managers]
last_update:
  date: 07/31/2026
  author: Patricia McPhee
---

Point TechWrit AI at your source code and get structured, style-compliant documentation back — API references, developer guides, and end-user guides. Every output applies your account's saved style rules, terminology, and glossary, so what you get reads like the rest of your docs, not like raw generated text.

This page is the method-agnostic home for that workflow. Whether you work in the web app, your editor, or a CI pipeline, the core loop is the same. Start here to pick your method, then follow the links for setup details.

## How it works

You give TechWrit AI code — a single file, a folder of files, or a pasted snippet — and it reads the public surface: functions, classes, components, endpoints, and CLI commands. When it detects API patterns, it switches to **Code to Docs** mode automatically and produces structured documentation: overviews, usage examples, parameter tables, return values, and error handling.

Three things are true no matter how you run it:

- **Your standards apply from the first draft.** Output follows your active style rules, terminology substitutions, and product glossary — not generic defaults. Configure these once in [Settings](/settings/) and every run inherits them.
- **You review before you commit.** The output is a first draft aligned with your actual code. You verify it, fix anything flagged, and commit. Anything the AI can't determine from the code alone is marked `[VERIFY]` so it's easy to find.
- **Developer docs and user docs are different modes.** [Code to Docs](/modes/#code-to-docs) writes for the person integrating with your code. [User Guide](/modes/#user-guide) writes for the person using your product — no code exposed. Pick the mode that matches your reader.

## Choose how you work

The same engine is available through four methods. Pick the one that fits where you already work.

### Web app

Best when you want to review output side by side, try different formats, or work without any setup.

Open the workspace, select the **paperclip icon**, and upload your source files (controllers, route handlers, type definitions, components). TechWrit AI inspects them for API patterns; when it finds them, it switches to **Code to Docs** and shows an inline prompt asking for your output format — **Markdown** or **OpenAPI YAML**. Choose one and processing starts immediately.

See [Getting Started](/getting-started/) for the workspace walkthrough and [Generate API reference from source code](/use-cases/#generate-api-reference-from-source-code) for the full web-app flow, including OpenAPI output.

### In your editor, via the MCP server

Best when your code is already open and you don't want to leave the editor.

Install the [MCP Server](/mcp/) in your AI client — Claude Desktop, Claude Code, Cursor, VS Code (through GitHub Copilot), or the GitHub Copilot CLI. Your assistant reads the file for you, runs a mode, and writes the output wherever you ask. You work in plain language:

> Generate API reference docs from `src/api/users.ts` and save them to `docs/api/users.md`.

The MCP server never reads your files itself — your AI client does, then passes the code to a TechWrit AI mode. See the [MCP Server](/mcp/) page for setup per client and more examples.

### VS Code extension

Best when you write docs-as-code and want review and rewrite as native editor actions.

The [VS Code extension](/vscode-extension/) adds Review, Style Check, Rewrite, and Simplify as commands with diagnostics and quick-fixes. Documentation commands run on Markdown and MDX; UX commands run on any file, so you can review hardcoded UI strings in a `.tsx` or `.json` file directly. Use it to polish docs you generate, or to review code-adjacent copy in place.

### API and CI

Best when you want documentation generated automatically as code changes.

Call the analyze API from any pipeline to keep docs in sync with your code. Lint docs on every pull request, or regenerate a reference when an endpoint changes:

```bash
curl -X POST https://techwrit.ai/api/v1/analyze \
  -H "X-Authorization: Bearer $TECHWRIT_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"mode\": \"code-to-docs\",
    \"input\": \"$(cat src/api/users.ts)\"
  }"
```

See the [API Reference](/api/api-reference/) for endpoints and parameters, and the [GitHub Actions guide](/guides/github-action/) for a ready-to-use workflow.

## For developers

Map what you need to the mode that produces it. In the web app, select the mode from the dropdown; through the MCP server or API, name the task and the assistant picks the mode.

| What you want | Mode | What you get |
| --- | --- | --- |
| Generate an API reference from a source file | [`code-to-docs`](/modes/#code-to-docs) | A structured reference — parameter tables, types, request/response examples, error codes |
| Document a module in plain language | [`explain`](/modes/#explain) | A narrative walkthrough of what the code does and why, ready for a concept page |
| Simplify a dense runbook | [`simplify`](/modes/#simplify) | A tighter, more scannable version at the same technical accuracy |
| Review a README against your style rules | [`review`](/modes/#review) | Findings ranked Critical, Important, and Minor, each with a concrete fix |
| Rewrite a doc to match your terminology | [`rewrite`](/modes/#rewrite) | The document corrected to your rules, terminology, and glossary |

:::tip
Need a machine-readable spec instead of prose? In Code to Docs mode, choose **OpenAPI YAML** from the format selector to get a valid OpenAPI 3.0 file — paths, schemas, and parameter types inferred from your code — ready for Swagger UI, Redoc, or Postman.
:::

## For product managers and non-writers

You don't need to read the code to document the product. These modes translate implementation into user-facing content.

| What you want | Mode | What you get |
| --- | --- | --- |
| An end-user guide from a feature's code | [`user-guide`](/modes/#user-guide) | End-user concepts and how-tos written from the product code, with no code exposed |
| Turn rough feature notes into a how-to | [`generate`](/modes/#write-generate) / [`expand`](/modes/#expand) | A structured guide with prerequisites and numbered, testable steps |
| Review UI microcopy | [`ux-review`](/modes/#ux-review) | Feedback on button labels, error messages, and tooltips — clarity, tone, consistency, accessibility |
| Summarize a spec for stakeholders | [`summarize`](/modes/#summarize) | A tight summary you can paste into an email or update |
| Translate a guide for another market | [`translate`](/modes/#translate) | A faithful translation that leaves code, commands, and product names intact |

## A typical loop

Documenting from code is a generate → review → fix cycle. Each step feeds the next:

1. **Generate.** Point TechWrit AI at your code and pick the mode for your reader — `code-to-docs` for developers, `user-guide` for end users. You get a first draft that already follows your style rules.
2. **Review.** Run the draft through [`review`](/modes/#review) or [`style-check`](/modes/#style-check) to catch anything that drifts from your standards. In the web app, the **Feed to Review** button does this in one click.
3. **Fix.** Apply the flagged fixes, and search the draft for `[VERIFY]` markers to fill in anything the AI couldn't infer from the code. Then commit.

Through the MCP server you can run the whole loop in one request:

> Draft docs for this new endpoint, review them against our style guide, then apply the fixes it flags.

## Related

- [Modes](/modes/) — The 17 purpose-built modes, including Code to Docs and User Guide, and when to use each.
- [MCP Server](/mcp/) — Run any mode from your AI client, per-client setup, and more code examples.
- [Use Cases](/use-cases/) — End-to-end scenarios, including generating an API reference and creating user guides from product code.
