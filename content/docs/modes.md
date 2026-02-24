---
title: Modes
description: Fourteen purpose-built modes for every documentation task — from writing and reviewing to code-to-docs and translation.
keywords: [modes, write, rewrite, review, style check, simplify, keywords, glossary, code to docs, user guide, explain, summarize, expand, translate, outline]
---

TechWrit AI has fourteen purpose-built modes. Each mode sends a different system prompt to the AI, producing output tailored to the task.

## Write (Generate)

Generate new documentation from a description or outline. The AI produces production-ready content applying all active style rules, terminology, and glossary from the start. Gaps are marked as `[PLACEHOLDER: description]`.

**Best for:** Starting from scratch, expanding outlines, creating first drafts.

## Rewrite

Returns your content rewritten to comply with every active style rule. Preserves meaning and technical accuracy. Includes before/after readability scores.

**Best for:** Bringing existing docs up to standard, enforcing consistency after edits.

## Review

Produces severity-ranked editorial feedback (Critical, Important, Minor). Quotes specific problematic text with explanations and corrections. Checks glossary term misuse and undefined jargon.

**Best for:** Pre-publish QA, peer review augmentation, onboarding new writers.

## Style Check

A structured audit where every active rule is checked individually. Each violation is quoted with a correction. Passing rules are marked with a checkmark. Produces a style score (percentage passed) and top 3 fixes.

**Best for:** Compliance audits, measuring progress, team style adherence reports.

## Simplify

Reduces reading complexity while preserving technical accuracy. Targets a Grade 8-10 reading level. Breaks long sentences, replaces complex words, and maintains glossary term compliance.

**Best for:** Consumer-facing docs, accessibility improvements, onboarding materials.

## Keywords

Extracts structured keyword data: primary topics, task keywords, concept keywords, API/code references, and related terms. Generates suggested page metadata (title tag, meta description, slug) and taxonomy tags.

**Best for:** SEO optimization, content tagging, search infrastructure.

## Glossary (Generation)

Identifies all technical terms, acronyms, and product concepts in your content. Uses official definitions from your product glossary where applicable. Generates new definitions for unknown terms. Flags inconsistent usage.

**Best for:** Building glossary sections, discovering undefined terms, standardizing terminology.

## Code to Docs

Generates API and developer documentation directly from source code. The AI analyzes the public API surface — functions, classes, components, endpoints, CLI commands — and produces structured documentation with overviews, usage examples, parameter tables, return values, and error handling guidance.

You can paste code into the input area or use the **file upload** button (paperclip icon) to upload one or more code files. When multiple files are uploaded, each is labeled with a filename header. The AI focuses on what a developer needs to integrate with or consume the code. Anything unclear or undocumented is flagged as `[VERIFY]`.

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

Produces a plain-language explanation of code or documentation. The AI summarizes what the content does and why, walks through key sections step by step, explains design decisions and trade-offs, and highlights important edge cases. You can paste code, upload files, or provide documentation.

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

**Best for:** Planning new documents, structuring content before writing, creating templates for recurring doc types.

---

## Audience, Doc Type, and Templates

All modes can be combined with:

- **Audience** — Consumer-facing, Engineers, Developers, or DevOps. The AI adapts vocabulary, detail level, and examples.
- **Doc Type** — API reference, How-to guide, Tutorial, Release notes, FAQ, and 6 more. The AI adapts structure and formatting.
- **Templates** — Pre-built structured prompts that fill the input area with placeholders. Some templates auto-set the mode and doc type. See [Settings](/settings/) for details.

Audience and Doc Type are optional. If unset, the AI uses general technical writing best practices.
