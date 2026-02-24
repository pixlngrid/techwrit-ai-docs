---
title: What's Coming
description: Planned features and roadmap for upcoming TechWrit AI releases.
keywords: [roadmap, planned features, batch processing, GitHub integration, browser extension, enterprise]
---

Planned features for upcoming releases. Priorities may shift based on user feedback.

## Phase 1 — Foundation

### Batch processing

- Analyze multiple documents in one operation
- CSV/JSON export of results for reporting
- Unlocks multi-file features like doc coverage, cross-document consistency, and site scaffolding

### Style rule templates

- Pre-built rule sets for common style guides (Microsoft, Google, Apple)
- Community-contributed rule packs

## Phase 2 — Developer workflow

### Changelog from git commits

- Paste or upload a git log and generate structured release notes
- Groups changes into user-facing categories (new features, improvements, fixes)
- Applies your style rules and terminology to raw commit messages
- Pairs with the Release Notes template for consistent formatting

### GitHub PR integration

- Automatically review documentation changed in a pull request
- Post style feedback as GitHub review comments with specific fixes
- Configurable quality threshold — block merge if style score is below target
- Builds on the existing REST API and VS Code extension

### Mermaid diagram suggestions

- When the AI identifies workflows, architecture, or data flows in code or documentation, it generates Mermaid diagram blocks alongside the output
- Supports flowcharts, sequence diagrams, and entity-relationship diagrams
- Diagrams render inline in the output panel and are included in downloads

## Phase 3 — Team and quality

### Doc coverage reports

- Upload a codebase and identify undocumented public APIs, exported functions, or components
- The "gap finder" counterpart to Code to Docs

### Cross-document consistency

- Analyze a set of documents together and flag inconsistent terminology, conflicting instructions, or duplicate content across pages

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
