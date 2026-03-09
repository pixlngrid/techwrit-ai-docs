---
title: Best Practices
description: Tips for getting the most out of TechWrit AI across all 14 modes.
keywords: [best practices, tips, workflow, chaining modes, templates, readability, diff]
---

Get the most out of TechWrit AI by following these tips. They apply across all 14 modes and cover everything from input formatting to multi-pass workflows.

## Set context before you submit

Always set **Audience** and **Doc Type** before submitting. These selectors change the AI's vocabulary, detail level, and structure. An API reference for Developers reads very differently from an API reference for DevOps — same doc type, different audience, different output.

If you're unsure, leave them unset. The AI infers from your content and applies general technical writing best practices.

## Write specific input prompts

The more specific your input, the better the output.

**Weak input (Write mode):**
> Write documentation for the login feature.

**Strong input (Write mode):**
> Write a how-to guide for configuring SSO login with SAML 2.0. The reader is an IT administrator who has access to the identity provider admin console. Cover prerequisites, step-by-step configuration, and testing.

For Review and Rewrite modes, paste the actual content — don't describe it.

## Use the right mode for the job

Each mode produces fundamentally different output. Choosing the right one saves time:

| Use this mode | If you want to... |
|---|---|
| Write | Write a first draft from scratch |
| Rewrite | Standardize existing docs |
| Review or Style Check | Run a pre-publish quality check |
| Simplify | Reduce complexity in docs that are too dense for the target audience |
| Code to Docs | Document code for developers |
| User Guide | Document code for end users |
| Expand | Flesh out bullet points or notes |
| Summarize | Condense a long document |
| Outline, then Write | Plan a new document and fill it in |
| Write with Doc Type set to FAQ | Generate an FAQ from existing docs |

## Chain modes for better results

The action buttons below the output let you chain modes in sequence:

1. **Write** a first draft, then select **Feed to Review** to get editorial feedback on your own generated content. Feed to Review pastes the output into the input, switches to Review mode, and submits automatically — no extra selection needed.
2. **Rewrite** existing docs to match your rules, then select **Feed to Review** to verify the rewrite is fully compliant.
3. **Outline** a new document, then copy the outline into Write mode to generate content section by section.
4. Use **Code to Docs** to generate an API reference, then select **Feed to Review** to check it against your style rules.

The **Keywords** and **Gen Glossary** actions are useful after any mode — Keywords extracts search metadata, and Gen Glossary identifies every technical term in the output and flags any that aren't in your product glossary.

## Configure your standards first

Before running your first real document through TechWrit AI, spend 5 minutes in **Settings**:

1. **Review the 25 default style rules.** Turn off any that don't match your team's conventions. For example, if your team uses title case for all headings (not just H1), disable "Sentence case in headings."
2. **Add terminology substitutions.** These are the word-choice rules your team enforces: "select" not "click," "repository" not "repo." The AI enforces these in every mode.
3. **Add product glossary terms.** Include definitions and synonyms. When you define "webhook" with a definition and synonyms like "callback URL," the AI uses the correct definition when writing and flags synonym misuse in reviews.
4. **Set custom instructions** for rules that don't fit the other categories: "Always use Oxford commas," "Target a 9th-grade reading level," or "Use Markdown callout syntax for warnings."

## Use templates for recurring documents

If you write the same type of document regularly — feature requirements, release notes, API references — create a template instead of starting from scratch each time.

1. Open **Settings > Templates** and select **Add template**.
2. Write a structured prompt with `[placeholder]` fields for the parts that change each time.
3. Optionally set the mode and doc type so they auto-apply when the template is selected.

When you're ready to write, select the **Templates** dropdown in the context bar, choose your template, fill in the placeholders, and submit.

TechWrit AI includes four built-in templates (Feature Requirements Doc, Release Notes, API Endpoint Doc, Troubleshooting Guide) to get you started.

## Use custom instructions strategically

Custom instructions apply to every request. Use them for persistent rules that aren't covered by the built-in style rules:

- Formatting conventions: "Use `> [!NOTE]` syntax for callouts."
- Company-specific voice: "Write in a professional but approachable tone. Avoid corporate jargon."
- Output constraints: "Keep all procedures under 10 steps. If a procedure needs more, break it into sub-tasks."
- Reading level targets: "Target a grade 9 reading level for all consumer-facing content."

Keep custom instructions concise. The AI processes them on every request, so avoid instructions that contradict the built-in rules.

## Use readability scores to measure improvement

Readability scores appear in real time as you type. In **Rewrite** and **Simplify** modes, you get before/after comparison:

- **Flesch Reading Ease** — Higher is easier. Aim for 60-80 for most technical docs.
- **Grade Level** — Lower is clearer. Grade 8-12 is typical for technical documentation.
- **Gunning Fog** — Similar to grade level but weights complex words more heavily.

Use these numbers to make quality improvements objective. Instead of "this reads better," you can say "this rewrite dropped the grade level from 14 to 9."

## Use diffs to verify accuracy

In Rewrite and Simplify modes, toggle the **word-level diff** to see exactly what changed. This is critical for technical content — you want to confirm the AI didn't alter the meaning of a procedure or change a command's syntax while simplifying the prose.

Red strikethrough shows removed words. Green highlight shows additions. Scan the diff for any changes to code snippets, parameter names, or technical terms.

## Supply context for code-based modes

**Code to Docs** and **User Guide** modes produce better output when you provide context alongside the code:

- **Text + code together:** Paste a brief description of what the code does in the text area, then attach the code files. The description fills gaps the AI might otherwise flag as `[VERIFY]`.
- **Multiple files:** Upload related files together. A React component plus its types file gives the AI more to work with than the component alone.
- **Requirements alongside code:** For User Guide mode, paste Jira feature descriptions, product requirements, or acceptance criteria alongside your code. The AI uses the requirements to write accurate concept sections and procedures instead of guessing intent from code alone.

## Check consistency across multiple files

When you upload multiple files and submit with batch mode **off**, the AI analyzes all files together in a single request. In Review, Rewrite, and Style Check modes, this automatically activates cross-document consistency analysis:

- **Review** flags terminology drift, conflicting instructions, duplicate content, tone shifts, and structural inconsistencies across files. Issues appear in a dedicated **Cross-document consistency** section.
- **Rewrite** harmonizes terminology, voice, and structural patterns so all files read as a consistent set.
- **Style Check** includes cross-file consistency findings after the per-rule checklist.

To use this, attach your files and leave the "Process each file separately" toggle **off**. The label below the toggle confirms: "Analyze all N files together (1 request, includes cross-document consistency)."

If you toggle batch mode **on**, each file is processed independently — useful when you want per-file results but don't need consistency checking.

## Handle [VERIFY] and [PLACEHOLDER] flags

The AI uses these flags honestly:

- **[VERIFY]** — The AI isn't certain about this detail. It found something in the code or inferred something from context, but needs a human to confirm. Don't ignore these — they're the most important parts to review.
- **[PLACEHOLDER: description]** — In Write mode, this marks a gap where the AI needs information you didn't provide. Fill these in with the correct details.

Treat flagged sections as review checkpoints, not errors. They mean the AI is being honest about its limits rather than hallucinating.

## Export and share team configurations

If you work on a team, set up your standards once and export the configuration:

1. Configure rules, terminology, glossary, templates, and custom instructions.
2. Open **Settings > General** and select **Export**. This downloads a `techwrit-config.json` file.
3. Share the JSON file with your team. Each person imports it from their own Settings page.

This ensures everyone writes against the same standards from day one — no onboarding guesswork.

## Iterate, don't one-shot

For important documents, run multiple passes:

1. **Write** or **Expand** to generate the first draft.
2. **Rewrite** to apply all style rules, terminology, and glossary terms. Rewrite checks every sentence against every active rule before returning output, so most violations are resolved in a single pass.
3. Select **Feed to Review** to verify compliance. The output is automatically submitted for review.
4. If the review finds remaining issues, run another **Rewrite** pass — it reads the prior review from conversation history and treats each flagged violation as a mandatory fix.
5. **Style Check** for a final compliance audit.

Each pass catches different things. A single Write pass produces good content; a Write → Rewrite → Review cycle produces content that matches your team's standards.

## Tips by document type

**API references:** Set Audience to Developers and Doc Type to API reference. Use Code to Docs for the initial generation, then Review to catch style violations. Pay attention to parameter table accuracy.

**How-to guides:** Use Write with Doc Type set to How-to guide. The AI structures output with prerequisites, numbered steps, and expected results. Feed the output to Style Check to verify procedural writing rules.

**Runbooks:** Set Audience to DevOps and Doc Type to Runbook. Include environment details and prerequisite access requirements in your input. The AI includes CLI commands, config examples, and troubleshooting sections.

**User guides from code:** Use User Guide mode. Upload the UI-related code files (components, pages, forms) and paste a brief product description. The AI translates code internals to user-facing language — no code is exposed in the output.

**Release notes:** Set Doc Type to Release notes. Paste changelogs, commit summaries, or Jira descriptions. The AI structures them into user-facing categories (new features, improvements, fixes).