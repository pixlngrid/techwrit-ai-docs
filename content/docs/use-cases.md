---
title: Use Cases
description: Practical scenarios showing how teams and individual writers use TechWrit AI in daily workflows.
keywords: [use cases, style enforcement, CI/CD, API reference, OpenAPI, onboarding, migration, simplify, user guide, release notes, translate, keywords, glossary, framework, outline, content merging]
last_update:
  date: 04/21/2026
  author: Patricia McPhee
---

TechWrit AI handles a wide range of technical documentation tasks. Below are practical scenarios showing how teams and individual writers use it in their daily workflows.

## Enforce style standards across a team

**Problem:** Your team has a style guide, but enforcement is inconsistent. Reviews catch different issues depending on who reviews, and new writers repeat the same mistakes for months.

**Solution:**

1. Encode your style guide into TechWrit AI: toggle the default rules, add custom rules for team-specific conventions, define your terminology substitutions, and populate the product glossary.
2. Export the config and have every writer import it — or use a Team plan to lock shared rules automatically.
3. Writers run **Review** or **Style Check** before submitting docs for peer review.

**Result:** Every writer gets the same consistent feedback. Reviews focus on content accuracy instead of style nitpicking. New writers ramp up faster because the tool teaches the rules as they write.

## Automate doc linting in CI/CD

**Problem:** Style violations slip through code review because reviewers focus on code, not docs. Markdown files in the repo drift from your standards over time.

**Solution:**

Use the REST API to lint documentation on every pull request:

```bash
curl -X POST https://techwrit.ai/api/v1/analyze \
  -H "X-Authorization: Bearer $TECHWRIT_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"mode\": \"style-check\",
    \"input\": \"$(cat docs/getting-started.md)\"
  }"
```

Add this to your CI pipeline (GitHub Actions, Azure DevOps, GitLab CI) to flag style violations before merge. The style-check mode returns a score and specific fixes, making it easy to set a quality threshold.

**Result:** Documentation quality is enforced automatically, the same way linters enforce code quality.

## Edit docs without leaving your editor

**Problem:** You write docs in Markdown alongside code, but catching style issues means copying content into the web app, running a review, and pasting fixes back. The context switch breaks flow and slows down docs-as-code workflows.

**Solution:**

1. Install the [VS Code extension](/docs/vscode-extension) and set your API key.
2. Open any Markdown file and run **TechWrit AI: Review Document** (`Ctrl+Shift+F6`). Issues appear as native VS Code diagnostics — squiggly underlines with severity ranks.
3. Hover an issue to see the explanation, then select the lightbulb icon to apply the suggested fix as a quick-fix action.
4. For larger changes, run **Rewrite Document** (`Ctrl+Shift+F8`) or **Simplify Document** (`Ctrl+Shift+F9`) to update the file in place — undo with `Ctrl+Z` if needed.
5. Enable `techwrit.reviewOnSave` to run Review automatically every time you save a Markdown file.

The extension uses the same style rules, terminology, and glossary from your account — no separate configuration.

**Result:** Style review happens inside your editor, next to the code and commits. Writers stay in their docs-as-code workflow instead of round-tripping through a browser.

## Generate API reference from source code

**Problem:** Your API has dozens of endpoints, but the documentation is outdated or incomplete — and depending on the audience, your team needs either human-readable reference docs or a machine-readable OpenAPI spec for tooling. Writing either by hand is tedious and falls behind the code.

**Solution:**

1. Upload your source code files (controllers, route handlers, type definitions) using the file upload button. TechWrit AI detects API patterns automatically and switches to **Code to Docs** mode.
2. When the inline prompt appears, choose your output format:
   - **Markdown** for structured reference documentation that uses your style rules and glossary from the start.
   - **OpenAPI YAML** for a valid OpenAPI 3.0 spec with paths, request/response schemas, parameter types, and descriptions inferred from your code.

   Processing starts as soon as you select a format.
3. To change the format later, use the **Format** selector in the context bar.
4. For OpenAPI output, download the `.yaml` file and import it into your API tooling (Swagger UI, Redoc, Postman, or similar).
5. Search for `[VERIFY]` markers to find values the AI couldn't determine from the code alone.

To set things up manually, select **Code to Docs** mode, set audience to **Developers**, choose your format, and paste or upload code.

**Result:** A complete first draft of API documentation — or a ready-to-use OpenAPI 3.0 spec — generated in seconds and aligned with your actual code. Writers review and refine instead of writing from scratch; platform teams get a working spec for API-first workflows, SDK generation, or gateway configuration.

## Merge new guidelines into an existing style document

**Problem:** Your team adopted new writing rules (sentence length limits, terminology changes, tone guidelines), and you need to fold them into an existing style guide without rewriting the whole document by hand.

**Solution:**

1. Set mode to **Rewrite**.
2. Paste the new rules after an `=== INCORPORATE THE FOLLOWING ===` marker and the existing style guide after an `=== EXISTING CONTENT ===` marker.
3. Submit. The AI weaves the new rules, terminology, and guidelines into the existing document's structure — adding sections, extending tables, and integrating lists.

**Result:** A complete, updated style guide with the new material merged in and all active style rules applied. No manual cut-and-paste across sections.

## Onboard new technical writers

**Problem:** New writers take weeks to learn your team's conventions. Their first drafts need heavy revision, and senior writers spend review cycles teaching style instead of reviewing content.

**Solution:**

1. Set up a Team plan with shared style rules, terminology, and glossary. New writers get these automatically when they join.
2. New writers use **Review** mode on their drafts before submitting. The AI gives severity-ranked feedback that teaches the rules in context — "this sentence uses passive voice; here's how to rewrite it."
3. Use **Style Check** for a structured audit showing exactly which rules pass and which need attention.

**Result:** New writers self-correct before peer review. Senior writers review content, not formatting. Ramp-up time drops from weeks to days.

## Migrate documentation to a new style guide

**Problem:** Your company adopted a new style guide (or you're standardizing after an acquisition), and thousands of pages need updating.

**Solution:**

1. Configure TechWrit AI with the new style rules, terminology, and glossary.
2. Run existing documents through **Review** mode to get a prioritized list of issues by severity.
3. Use **Rewrite** mode to automatically apply the new standards. Toggle the word-level diff to verify accuracy.
4. Run **Style Check** on the rewritten output as a final compliance audit.

**Result:** Systematic migration with measurable progress. The style score tells you exactly how compliant each document is.

## Import and rewrite Confluence or Word content

**Problem:** Your documentation lives in Confluence or Word, and you need to migrate it to a docs-as-code workflow — but the exported content is full of inconsistent formatting, outdated terminology, and style violations.

**Solution:**

1. Export your Confluence pages to Word (`.docx`), or use existing Word documents directly.
2. Upload the `.docx` files using the paperclip icon. TechWrit AI converts them to Markdown automatically, preserving headings, lists, tables, and formatting.
3. Use **Review** mode to get a prioritized list of issues, or **Rewrite** mode to apply your style rules in one pass.
4. If you're targeting a docs framework, select it from the **Framework** dropdown — the rewritten output includes the correct frontmatter and components.

**Result:** A clean, style-compliant Markdown version of your Confluence or Word content, ready for your docs-as-code pipeline. No manual copy-paste formatting cleanup.

## Simplify internal docs for external audiences

**Problem:** Your internal engineering docs are technically accurate but too complex for external users. Rewriting them manually is slow and risks losing technical precision.

**Solution:**

1. Paste the internal documentation into **Simplify** mode.
2. Set the audience to **Consumer-facing** to target non-technical readers.
3. Review the before/after readability scores (Flesch Reading Ease, Grade Level) to measure the improvement.
4. Use the word-level diff to verify that technical terms (especially glossary entries) weren't incorrectly simplified.

**Result:** Documentation that reads at a Grade 8-10 level while preserving technical accuracy. Readability scores make the improvement measurable.

## Create user guides from product code

**Problem:** Your product ships new features faster than the docs team can write about them. Help articles are missing or outdated.

**Solution:**

1. Set mode to **User Guide** and upload the UI-related code files (components, pages, forms).
2. Paste product requirements, feature descriptions, or acceptance criteria alongside the code for context.
3. The AI generates user-facing documentation: concept sections, numbered procedures, expected results, and troubleshooting — all in user language, with no code exposed.

**Result:** A solid first draft of user documentation generated directly from the code that implements the feature. Writers verify and polish instead of writing from scratch.

## Standardize release notes

**Problem:** Release notes are inconsistent — different writers use different formats, levels of detail, and terminology. Some versions get polished notes; others get raw changelogs.

**Solution:**

1. Select the **Release Notes** prompt from the Prompt Library dropdown.
2. Fill in the product name, version, and raw changes (commit messages, JIRA descriptions, or bullet points).
3. Submit in **Write** mode with Doc Type set to **Release notes**.
4. The AI structures the output into user-facing categories (new features, improvements, fixes) using your style rules and terminology.

**Result:** Consistent, professional release notes every time, regardless of who writes them.

## Translate documentation for localization

**Problem:** Your documentation needs to be available in multiple languages, but manual translation is expensive and slow.

**Solution:**

1. Paste the source document into **Translate** mode.
2. Specify the target language in your input (e.g., "Translate to Brazilian Portuguese").
3. The AI translates prose naturally while keeping code snippets, API names, CLI commands, product names, and URLs in their original language.

**Result:** A high-quality first-pass translation that preserves technical accuracy. Professional translators can review and refine instead of translating from scratch.

## Extract search metadata from documentation

**Problem:** Your docs site has poor search results because pages lack structured metadata — title tags, meta descriptions, and keyword taxonomy.

**Solution:**

1. Run each document through **Keywords** mode.
2. The AI extracts primary topics, task keywords, concept keywords, API/code references, and related terms.
3. It also generates suggested page metadata (title tag under 60 characters, meta description under 155 characters, slug) and taxonomy tags.

**Result:** Structured keyword data you can feed directly into your CMS or docs-as-code front matter.

## Build a product glossary from existing docs

**Problem:** Your documentation uses inconsistent terminology. The same concept has three names depending on which team wrote the docs.

**Solution:**

1. Paste documents through **Glossary** mode one at a time.
2. The AI identifies every technical term, generates definitions, flags inconsistent usage (different names for the same concept), and lists acronyms that aren't defined on first use.
3. Import the generated terms into your TechWrit AI glossary. Future requests will enforce these terms automatically.

**Result:** A comprehensive product glossary built from your actual documentation, with consistency issues already identified.

## Generate framework-ready documentation

**Problem:** Your docs site runs on Trellis Docs, and every page needs specific MDX conventions — frontmatter with `keywords` arrays, callouts for notes and warnings, `<Tabs>` components for multi-option content. Writers either forget these conventions or add them manually after drafting, which slows down the publish workflow.

**Solution:**

1. Select **Trellis Docs** from the **Framework** dropdown in the context bar before writing or generating content.
2. The AI outputs MDX with the correct frontmatter (`title`, `description`, `keywords`), callouts (`:::tip`, `:::note`, `:::warning`), and `<Tabs>`/`<TabItem>` components where appropriate.
3. Copy or download the output and drop it directly into your docs site — no manual formatting pass needed.

This works with any mode: **Write** for new pages, **Rewrite** to convert existing Markdown into Trellis Docs–compatible MDX, or **Code to Docs** to generate framework-ready API documentation from source code.

**Result:** Documentation that's ready to commit to your docs repo without a formatting pass. Writers focus on content; the framework conventions are handled automatically.

## Generate architecture diagrams from code

**Problem:** Your documentation needs diagrams showing how services interact, how data flows, or how state machines work. Drawing them manually in a tool like Draw.io or Lucidchart is slow and they go stale as the code changes.

**Solution:**

1. Upload your code or paste your documentation into **Code to Docs**, **Explain**, or **Write** mode.
2. When the inline prompt appears (detecting architecture/workflow content), select **Include diagrams**.
3. The AI analyzes the content and generates Mermaid diagram blocks inline — flowcharts for workflows, sequence diagrams for API interactions, ER diagrams for data models.
4. Diagrams render as interactive SVGs in the output panel. Use **PNG ↓** to download a high-resolution image for embedding in docs, Confluence, or Slack. Use **Excalidraw ↓** to download an editable `.excalidraw` file you can customize in Excalidraw (web, desktop, or VS Code extension).
5. Download the output and the Mermaid code blocks work directly in GitHub, Docusaurus, Trellis Docs, and any Mermaid-compatible renderer.

**Result:** Diagrams that match your actual code, generated alongside the documentation. Export as PNG for instant use or Excalidraw for further editing. When the code changes, regenerate the docs and the diagrams update with it.

## Review UI text before shipping a feature

**Problem:** Engineers and developers write UI strings directly in code without input from a technical or UX writer. The result: vague error messages, ambiguous button labels, and tooltips that leave users at a dead end with no clear next step.

**Solution:**

1. Switch to the **UX Writing** category using the toggle above the context bar.
2. Paste your UI strings into **UX Review** mode — error messages, button labels, tooltips, confirmation dialogs, empty states, and notifications.
3. The AI evaluates each string for clarity, conciseness, actionability, tone, consistency, and accessibility, reporting only violations with concrete rewrites.
4. Use **UX Rewrite** to automatically fix the flagged strings while maintaining consistent patterns.

**Result:** Consistent, user-friendly microcopy that follows UX writing best practices, reviewed before it reaches users.

## Generate microcopy for a new feature

**Problem:** A designer hands you mockups with placeholder text like "Error" and "OK." You need production-ready strings for every state — errors, success, empty, loading — and they should be consistent with the rest of the product.

**Solution:**

1. Switch to **UX Writing** and select **UX Generate** mode.
2. Describe the scenario: "User tries to delete a project that has active collaborators."
3. The AI generates complete string sets — error title, body, primary CTA, secondary CTA, confirmation dialog, and success message — with 2-3 variants per key string.
4. Configure your product terminology and glossary so the generated strings use your product vocabulary.

**Result:** A complete set of production-ready UI strings, structured for easy copy into design tools or code, with variants to choose from.

## Plan document structure before writing

**Problem:** Writers jump straight into drafting and end up with documents that need structural rework — missing sections, wrong heading hierarchy, or poor information flow.

**Solution:**

1. Describe the topic in **Outline** mode with the appropriate Doc Type selected.
2. The AI generates a heading hierarchy with section descriptions, content type suggestions (prose, table, code example, diagram placeholder), and standard sections for the document type.
3. Use the outline as a writing plan. Fill it in manually or feed each section to **Write** mode.

**Result:** Documents start with the right structure. Writing is faster because the plan is already in place.

## Upgrade from Pro to Team without re-subscribing

**Problem:** You're a Pro subscriber and your team wants in too. Canceling Pro, waiting for the billing period to end, and then subscribing to Team creates billing friction and risks a gap in access.

**Solution:**

1. Open the user menu and select **Upgrade**.
2. The dialog detects your Pro subscription and shows an **Upgrade to Team** confirmation directly — no Stripe Checkout redirect, no second card entry.
3. Pick your seat count (minimum 2), choose your billing cadence (monthly or annual), and confirm. Your existing subscription swaps from the Pro price to the Team price in place.
4. Keep your current cadence or switch to annual to save 17% — the upgrade dialog lets you pick.

**Result:** You keep your single Stripe subscription and invoice history. Stripe prorates the price difference automatically on your next invoice. A team is created with you as owner, and you can invite members immediately using the [invite-code flow](/team/invite-members/).
