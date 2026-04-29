---
title: Modes
description: Seventeen purpose-built modes for technical writing and UX writing — from reviewing and rewriting to generating microcopy and diagrams.
keywords: [modes, write, rewrite, review, style check, simplify, keywords, glossary, code to docs, user guide, explain, summarize, expand, translate, outline, ux review, ux rewrite, ux generate, microcopy, cross-document consistency, content merging, incorporate]
last_update:
  date: 03/26/2026
  author: Patricia McPhee
---

TechWrit AI has seventeen purpose-built modes across two categories: **Technical Writing** (14 modes) and **UX Writing** (3 modes). A toggle above the context bar switches between categories. Each mode sends a different system prompt to the AI, producing output tailored to the task.

## Mode categories

Use the toggle above the context bar dropdowns to switch between:

- **Technical Writing** — modes for documentation: writing, reviewing, rewriting, simplifying, translating, generating from code, and more. Default mode: Review.
- **UX Writing** — modes for UI text: reviewing microcopy, rewriting UI strings, and generating production-ready microcopy from scenarios. Default mode: UX Review.

Switching categories changes the available modes in the Mode dropdown and resets to the default mode for that category. Audience, Reading Level, terminology, and glossary settings carry over between categories.

## Write (Generate)

Generate new documentation from a description or outline. The AI produces production-ready content applying all active style rules, terminology, and glossary from the start. Gaps are marked as `[PLACEHOLDER: description]`.

**Best for:** Starting from scratch, expanding outlines, creating first drafts.

## Rewrite

Returns your content rewritten to comply with every active style rule. Preserves meaning and technical accuracy. Includes before/after readability scores.

When you submit multiple files together (with batch mode off), Rewrite harmonizes terminology, voice, and structural patterns across all files so the output reads as a consistent set.

### Content merging

Rewrite mode can merge new information into an existing document. Use section markers to separate the new material from the existing content:

```text
=== INCORPORATE THE FOLLOWING ===

| Rule | Description |
|---|---|
| Active voice | Use active voice in all procedures |
| Sentence length | Keep sentences under 20 words |

### Terminology
- Use "select" instead of "click"
- Use "repository" instead of "repo"

=== EXISTING CONTENT ===

# General Style Guidelines

Write clearly and concisely. Use present tense...
```

The AI weaves the new material into the existing document's structure — adding sections, extending tables, and integrating lists into the appropriate places. The output is the complete merged document, not just the new parts. All active style rules still apply to the merged output.

You can use any similar marker pattern: `=== INCORPORATE ===` / `=== EXISTING CONTENT ===`, `=== NEW ===` / `=== CURRENT ===`, etc.

:::tip
Content merging is different from inline rules. With INCORPORATE markers, the new material becomes **visible content** in the document. Without markers, tables and rules in your input are treated as invisible instructions the AI applies silently during the rewrite.
:::

**Best for:** Bringing existing docs up to standard, enforcing consistency after edits, harmonizing a doc set, merging new guidelines into existing style documents.

## Review

Produces severity-ranked editorial feedback (Critical, Important, Minor). Quotes specific problematic text with explanations and corrections. Checks glossary term misuse, undefined jargon, document structure, and metadata quality.

When you submit multiple files together (with batch mode off), Review automatically performs a **cross-document consistency** analysis. It flags terminology drift, conflicting instructions, duplicate content, tone shifts, and structural inconsistencies across files. Cross-document issues appear in a dedicated section at the end of the review.

**Best for:** Pre-publish QA, peer review augmentation, onboarding new writers, multi-file consistency audits.

## Style Check

A structured audit where every active rule is checked individually. Each violation is quoted with a correction. Only rules with violations appear in the output — passing rules are silently skipped. Produces a style score (percentage passed) and top 3 fixes.

When you submit multiple files together (with batch mode off), Style Check includes a cross-document consistency section that flags terminology drift, conflicting instructions, tone shifts, and structural inconsistencies across files.

**Best for:** Compliance audits, measuring progress, team style adherence reports, cross-file consistency checks.

## Simplify

Reduces reading complexity while preserving technical accuracy. Targets the reading level selected in the **Level** dropdown (defaults to Standard, Grade 8-10). Breaks long sentences, replaces complex words, and maintains glossary term compliance.

**Best for:** Consumer-facing docs, accessibility improvements, onboarding materials.

## Keywords

Extracts structured keyword data: primary topics, task keywords, concept keywords, API/code references, and related terms. Generates suggested page metadata (title tag, meta description, slug) and taxonomy tags.

**Best for:** SEO optimization, content tagging, search infrastructure.

## Glossary (Generation)

Identifies all technical terms, acronyms, and product concepts in your content. Uses official definitions from your product glossary where applicable. Generates new definitions for unknown terms. Flags inconsistent usage.

**Best for:** Building glossary sections, discovering undefined terms, standardizing terminology.

## Code to Docs

Generates API and developer documentation directly from source code. The AI analyzes the public API surface — functions, classes, components, endpoints, CLI commands — and produces structured documentation with overviews, usage examples, parameter tables, return values, and error handling guidance.

You can paste code into the input area or use the **file upload** button (paperclip icon) to upload one or more files — source code, Markdown, plain text, or Word documents (`.docx`). When multiple files are uploaded, each is labeled with a filename header. The AI focuses on what a developer needs to integrate with or consume the code. Anything unclear or undocumented is flagged as `[VERIFY]`.

### Output format

When Code to Docs mode is active, a **Format** selector appears in the context bar with two options:

- **Markdown** (default) — Structured Markdown documentation with headings, parameter tables, and code examples.
- **OpenAPI YAML** — A valid OpenAPI 3.0 specification in YAML format, including paths, schemas, request/response bodies, and parameter types inferred from the code.

The format selector is only visible in Code to Docs mode. Switching to another mode resets the format to Markdown.

### Smart file detection

When you attach code files, TechWrit AI automatically inspects them for API patterns (route handlers, controller decorators, HTTP method calls, etc.). If API code is detected, the mode switches to Code to Docs and an inline prompt appears inside the input area asking which output format you'd like. Selecting a format starts processing immediately — no extra click needed.

**Best for:** Generating API references from code, producing OpenAPI specs from existing endpoints, documenting components or modules, bootstrapping developer docs for existing codebases.

## User Guide

Generates end-user documentation — concepts, how-tos, and task-based procedures — from product code. Unlike Code to Docs (which produces developer-facing API references), User Guide mode reads your code and writes documentation for the person who **uses the product**, not the person who builds it.

The AI identifies user-facing features (UI components, pages, forms, settings, workflows), then generates:

- **Concept sections** explaining what a feature is and when to use it
- **How-to procedures** with numbered, testable steps
- **Expected results** describing what the user sees after each task
- **Troubleshooting** based on error handling found in the code

Code internals are translated to user language: variable names become feature descriptions, route paths become navigation instructions, and UI labels appear in **bold** as they would in the product. No code is exposed to the reader.

You can paste code or use the **file upload** button to attach code files. Anything the AI cannot determine from the code alone is flagged as `[VERIFY]`.

**Best for:** Writing user guides from product code, creating help articles for non-technical users, generating onboarding documentation, producing how-to content without starting from scratch.

## Explain

Produces a plain-language explanation of code or documentation. The AI summarizes what the content does and why, walks through key sections step by step, explains design decisions and trade-offs, and highlights important edge cases. You can paste code, upload files (including `.docx`), or provide documentation.

**Best for:** Onboarding to unfamiliar code, understanding complex configurations, getting a narrative walkthrough of a module or document.

## Summarize

Creates concise summaries of technical documentation. Starts with a one-sentence TL;DR, followed by an executive summary, key points grouped by theme, and any action items or next steps. Summary length adapts to input length. Preserves glossary terms and technical accuracy.

**Best for:** Creating TL;DRs, executive summaries, abstracts, or quick-reference digests of long documents.

## Expand

Takes bullet points, outlines, notes, or terse descriptions and expands them into complete technical documentation. Adds context, transitions, and explanations. Fleshes out procedures into numbered, testable steps. Generates realistic code examples for mentioned APIs. Flags anything ambiguous as `[VERIFY]`.

**Best for:** Turning meeting notes into docs, expanding outlines into full content, fleshing out skeletal drafts.

## Translate

Translates technical documentation to another language while preserving technical accuracy. Keeps code snippets, variable names, API names, CLI commands, product names, file paths, and URLs in their original language. Adapts examples to local conventions where relevant (date formats, units). Specify the target language in your input.

**Best for:** Localizing documentation, creating multilingual docs, translating release notes or guides.

## Outline

Generates a structured documentation outline from a topic description or notes. Produces a heading hierarchy with descriptive section names, content type suggestions per section (prose, table, code example, diagram placeholder, callout), and standard sections for the selected document type. The outline serves as a planning artifact you can fill in manually or expand with Write mode.

**Best for:** Planning new documents, structuring content before writing, creating outlines for recurring doc types.

---

## UX Review

Reviews UI text for quality, clarity, and consistency. Paste error messages, button labels, tooltips, onboarding text, empty states, notifications, confirmation dialogs, or any other microcopy.

The AI evaluates each string against UX writing principles:

- **Clarity** — Is the message immediately understandable? Does it tell the user what happened, why, and what to do next?
- **Conciseness** — Button labels: 1-3 words. Tooltips: under 150 characters. Error messages: under 2 sentences. Flags filler words ("please", "successfully", "in order to").
- **Actionability** — Does the user know what to do next? Are CTAs specific ("Save project" not "OK")?
- **Tone** — Respectful and helpful, never blaming. Confident and direct, not hedging.
- **Consistency** — Same action = same label. Same patterns for same message types. Consistent capitalization and punctuation.
- **Accessibility** — Screen reader friendly? Text makes sense without visual context?

Output reports only violations, grouped by severity (Critical, Important, Minor), with concrete rewrites for each.

**Best for:** Pre-ship UI text review, microcopy audits, ensuring consistency across an interface.

## UX Rewrite

Rewrites UI text to be clear, concise, actionable, and consistent. Applies the same UX writing principles as UX Review but returns rewritten strings instead of feedback.

Key rewrites:

- Cuts filler words and unnecessary qualifiers
- Makes CTAs verb-first and specific
- Structures errors as: what happened + what to do
- Removes blame, hedging, and unnecessary apologies
- Enforces consistent patterns across similar string types

If your input is structured (a table, labeled list, or grouped strings), the output preserves that structure.

**Best for:** Polishing UI strings before handoff, cleaning up legacy microcopy, enforcing UX writing standards across a feature.

## UX Generate

Generates production-ready microcopy from a description or scenario. Describe a UI state, interaction, or scenario, and get all applicable string types:

- **Error states** — title, body, primary CTA, secondary CTA
- **Success/confirmation** — title, body, optional CTA
- **Empty states** — title, body, CTA to populate the area
- **Tooltips** — under 150 characters, explains what the element does
- **Button labels** — 1-3 words, verb-first, specific to the action
- **Confirmation dialogs** — title, body (consequences), confirm CTA, cancel CTA
- **Onboarding/instructional** — headline, body, CTA

Key strings include 2-3 variants so the team can pick the best fit. Output is structured and labeled for easy copy into design tools or code.

**Best for:** Generating microcopy for new features, creating consistent string sets for design specs, producing UI text variants for A/B testing.

---

## Diagram generation

When the AI detects architecture, workflows, data flows, or entity relationships in your content, an inline prompt asks if you want to include diagrams. Selecting **Include diagrams** enables Mermaid diagram generation for that session.

Supported diagram types: flowcharts, sequence diagrams, entity-relationship diagrams, state diagrams, and class diagrams. The AI chooses the type that best represents the content.

Diagrams render as interactive SVGs in the output panel. Each diagram includes:

- **PNG ↓** — download a high-resolution PNG image for embedding in docs, Confluence, or Slack
- **Excalidraw ↓** — download an editable `.excalidraw` file to customize in Excalidraw (web, desktop, or VS Code extension)
- **Hide/Show** — collapse or expand the diagram

Diagram generation works with: Write, Code to Docs, User Guide, Explain, Expand, Outline, and Rewrite.

---

## Audience, Doc Type, Reading Level, and Prompt Library

All modes can be combined with:

- **Audience** — Consumer-facing, Engineers, Developers, or DevOps. The AI adapts vocabulary, detail level, and examples.
- **Doc Type** — API reference, How-to guide, Conceptual overview, Tutorial, Release notes, Troubleshooting guide, README, Runbook, Migration guide, Architecture decision record, or FAQ. The AI adapts structure and formatting. (Technical Writing only.)
- **Reading Level** — General (Grade 6-8), Standard (Grade 8-10), or Advanced (Grade 10-12). Controls the target Flesch-Kincaid grade level for all output. Defaults to Standard.
- **Framework** — Trellis Docs, Docusaurus, or Notion. The AI outputs framework-specific frontmatter, callouts, and components. (Technical Writing only.)
- **Prompt Library** — Pre-built structured prompts that fill the input area with placeholders. Some prompts auto-set the mode and doc type. See [Settings](/settings/) for details.

Audience, Doc Type, Reading Level, and Framework are all optional. If unset, the AI uses Standard reading level and general technical writing best practices.
