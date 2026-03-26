---
title: What's Coming
description: Planned features and roadmap for upcoming TechWrit AI releases.
keywords: [roadmap, planned features, batch processing, diagrams, cross-document consistency, browser extension, enterprise]
last_update:
  date: 03/09/2026
  author: Patricia McPhee
---

Planned features for upcoming releases. Priorities may shift based on user feedback.

## Phase 1 — Foundation (shipped in v1.10.0)

### Batch processing

- ~~Analyze multiple documents in one operation~~ — Shipped
- ~~CSV/JSON export of results for reporting~~ — Shipped
- ~~Download individual results~~ — Shipped

### Style guide templates

- ~~Pre-built rule sets for Microsoft, Google, and Apple style guides~~ — Shipped
- ~~One-click Replace or Merge apply modes~~ — Shipped
- ~~Auto-detection of active style guide~~ — Shipped

See the v1.10.0 release notes for details.

### Prompt library rename — Shipped in v1.12.0

- ~~"Templates" renamed to "Prompt Library" across the app~~ — Shipped
- ~~Individual items called "prompts" instead of "templates"~~ — Shipped

### Word document upload — Shipped in v1.12.0

- ~~Upload `.docx` files directly for review, rewrite, or any mode~~ — Shipped
- ~~Converts to Markdown on upload, preserving headings, lists, tables, and formatting~~ — Shipped
- ~~Import content from Confluence, Google Docs, or Microsoft Word~~ — Shipped

### UX Writing modes — Shipped in v1.14.0

- ~~UX Review, UX Rewrite, and UX Generate modes for UI microcopy~~ — Shipped
- ~~Category toggle to switch between Technical Writing and UX Writing~~ — Shipped

### Configurable reading level — Shipped in v1.14.0

- ~~Reading Level dropdown: General (Grade 6-8), Standard (Grade 8-10), Advanced (Grade 10-12)~~ — Shipped
- ~~Applies to all modes including Simplify, Rewrite, and generation modes~~ — Shipped

## Phase 2 — Developer workflow

### Changelog from git commits

- Paste or upload a git log and generate structured release notes
- Groups changes into user-facing categories (new features, improvements, fixes)
- Applies your style rules and terminology to raw commit messages
- Pairs with the Release Notes prompt for consistent formatting

### Mermaid diagram suggestions — Shipped in v1.11.0

- ~~When the AI identifies workflows, architecture, or data flows in code or documentation, it generates Mermaid diagram blocks alongside the output~~ — Shipped
- ~~Supports flowcharts, sequence diagrams, and entity-relationship diagrams~~ — Shipped (also supports state diagrams and class diagrams)
- ~~Diagrams render inline in the output panel and are included in downloads~~ — Shipped

## Phase 3 — Team and quality

### Doc coverage reports

- Upload a codebase and identify undocumented public APIs, exported functions, or components
- The "gap finder" counterpart to Code to Docs

### Cross-document consistency — Shipped in v1.12.0

- ~~Analyze a set of documents together and flag inconsistent terminology, conflicting instructions, or duplicate content across pages~~ — Shipped
- ~~Harmonize terminology, tone, and structural patterns in Rewrite mode~~ — Shipped
- ~~Cross-file style audit in Style Check mode~~ — Shipped
- Automatically activates when multiple files are submitted together without batch mode

### Style score tracking

- Dashboard showing style scores over time per document or per writer
- Teams can measure improvement and set quality targets

### Review workflows

- Review assignment and approval workflows
- Comment threads on analysis results

## Phase 4 — New surfaces

### Additional output formats

- AsciiDoc, reStructuredText, and HTML output options for documentation modes
- Same format selector pattern used for OpenAPI YAML in Code to Docs

### Browser extension

- Run Review or Style Check on content in Confluence, Notion, or Google Docs without copy-pasting

### Chat bot

- Quick doc checks from chat — paste a snippet, get style feedback inline

### Content snippets library

- Reusable blocks (standard disclaimers, security notes, boilerplate sections) that can be inserted into any mode's output

### Export to CMS

- Push output directly to docs-as-code repos, Confluence, or Notion instead of downloading files

## On the horizon

### Doc site scaffolding

- Connect a GitHub repo and generate an information architecture based on your codebase
- Output a ready-to-deploy documentation site with stub pages, navigation, and suggested content
- Powered by the Trellis docs framework — a Next.js documentation framework with smart search, design tokens, and tech-writing defaults built in
- Extends the Trellis framework-aware output already available in the context bar — generated pages will use the same MDX conventions, frontmatter, and component patterns

### Enterprise tier

- SSO integration (SAML/OIDC) for organization-wide access
- Dedicated support and SLA guarantees
- Usage analytics and admin dashboard

## Suggest a feature

Have an idea? We'd love to hear it. Reach out at hello@techwrit.ai or in our dedicated [Slack channel](https://techwritai.slack.com/archives/C0AGBV21E2C).
