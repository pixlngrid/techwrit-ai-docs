---
title: Settings
description: Configure style rules, terminology, glossary, templates, and custom instructions.
keywords: [settings, style rules, terminology, glossary, templates, custom instructions, export, import]
---

Open Settings from the user menu (bottom of the sidebar). The dialog has five tabs.

## Style Rules

![Settings](/img/docs/settings.png)

TechWrit AI ships with 25 default style rules covering common technical writing standards:

| Rule | Description |
|------|-------------|
| Avoid "Please" | Use direct, imperative language |
| Avoid "and/or" | Use "or" or "and" explicitly |
| Title case in titles | Distinguish main titles from subsections |
| Sentence case in headings | Capitalize only first word and proper nouns |
| Avoid "may" | Use "can" for ability, "might" for possibility |
| "Ensure" vs "confirm" | Avoid "verify," "check," "make sure," and "validate." Use "ensure" or "confirm" appropriately |
| Prefer active voice | Unless passive is clearer or actor unknown |
| Use present tense | "The system returns" not "will return" |
| Use second person | Address the reader as "you" |
| Minimize future tense | Avoid "will" for system behavior |
| Parallel structure in lists | Start all items with the same part of speech |
| Define jargon on first use | Spell out acronyms and technical terms |
| Be concise | Eliminate filler words |
| Minimize "there is/are" | Restructure these sentences |
| Consistent terminology | Same term for same concept throughout |
| Remove redundant content | Eliminate sentences that repeat the same idea as a neighbor |
| Descriptive link text | Avoid generic text like "click here" or "here" |
| Avoid "This topic describes..." | Use outcome-oriented intros instead |
| User-focused writing | Write from the user's perspective, not the product's |
| Avoid Latin abbreviations | Use "for example" not "e.g." and "that is" not "i.e." |
| Lowercase "v" for version | Use v4.8 not V4.8 |
| Short paragraphs | Keep paragraphs between 50-150 words |
| Short sentences | Keep sentences under 20 words |
| Procedures as numbered lists | Convert sequential steps from prose to numbered lists |
| Screenshots need text instructions | Always pair screenshots with written instructions |

**Toggle rules** on or off with the switch next to each rule. Only active rules are included in the AI prompt.

**Add custom rules** (Pro tier) by selecting "Add custom rule" and providing a name and description.

**Team rules** — Team members see team-enforced rules with a lock icon. These remain active and cannot be toggled off or deleted. Personal custom rules are added below team rules and count against your personal tier limits separately.

## Terminology

![Settings - Terminology](/img/docs/settings-terminology.png)

Terminology substitutions enforce word choice. Each entry has a **preferred** term and a list of terms to **avoid**.

Default substitutions:
- Use **select** instead of "click on", "click", "hit"
- Use **enter** instead of "type in", "input"
- Use **repository** instead of "repo"
- Use **ensure** instead of "make sure"

The AI enforces these during writing and rewriting. The input pane flags violations in real time.

**Add, edit, or delete** substitutions in this tab. The Free tier supports 3 substitutions; the Pro tier supports unlimited substitutions.

**Team terminology** — Team members see team-enforced substitutions with a lock icon. These cannot be edited or deleted. Personal substitutions are added separately.

## Glossary

![Settings - Glossary](/img/docs/settings-glossary.png)

The product glossary gives the AI semantic understanding of your domain terms. Each entry includes:

- **Term** — The canonical name
- **Definition** — What it means (1-2 sentences)
- **Synonyms** (optional) — Alternative names the AI should flag

The AI uses glossary definitions when writing, flags synonym misuse in reviews, and generates glossary sections from your content.

**Add, edit, or delete** entries in this tab. The Free tier supports 3 terms; the Pro tier supports unlimited terms.

**Team glossary** — Team members see team-enforced glossary entries with a lock icon. These cannot be edited or deleted. Personal entries are added separately.

## Templates

![Settings - Templates](/img/docs/settings-templates.png)

Prompt templates are reusable structured prompts that pre-fill the input area with placeholders you fill in before submitting. They save time on recurring document types.

### Built-in templates

TechWrit AI ships with four built-in templates:

| Template | Auto-sets | Description |
| -------- | --------- | ----------- |
| Feature Requirements Doc | Mode: Write | Structured inputs for feature name, purpose, target users, problem statement, and business goal |
| Release Notes | Mode: Write, Type: Release notes | Inputs for product name, version, and changes — outputs categorized release notes |
| API Endpoint Doc | Mode: Write, Type: API reference | Inputs for endpoint, purpose, parameters, and response — outputs full API reference |
| Troubleshooting Guide | Mode: Write, Type: Troubleshooting guide | Inputs for product, issue description, error messages, and steps — outputs structured troubleshooting content |

Built-in templates cannot be edited or deleted. They display in both the Templates dropdown on the context bar and in the Templates tab in Settings.

### Using a template

1. Select the **Templates** dropdown in the context bar (next to Audience, Type, and Mode).
2. Select a template from the list.
3. The input area fills with the template content. Mode and doc type are auto-set if the template specifies them.
4. Replace the `[placeholder]` text with your actual content.
5. Select **Go** to submit.

Templates are a one-shot action — selecting a template replaces the current input text.

### Custom templates

Create your own templates in the **Templates** tab in Settings:

1. Select **Add template**.
2. Enter a name and the template content (use `[placeholder]` syntax for fields the user fills in).
3. Optionally set an auto-set mode and doc type.
4. Select **Add**.

Custom templates appear alongside built-in templates in the Templates dropdown. You can edit or delete custom templates at any time.

## General

![Settings - General](/img/docs/settings-general.png)

### Custom Instructions

Custom instructions are freeform guidance appended to your input before each API call. You can set a **global** instruction that applies to all modes, or set **per-mode** instructions that override the global default for specific modes.

Use the **mode selector dropdown** to switch between editing the global instruction and any of the 14 mode-specific instructions. Modes that have custom instructions are marked with a dot indicator in the dropdown.

**Examples:**

- **Global:** "Our audience is enterprise IT admins. Keep paragraphs under 4 sentences."
- **Review mode:** "Focus on security concerns and OWASP compliance."
- **Rewrite mode:** "Always use Oxford commas. Prefer bullet lists for non-sequential content."
- **Simplify mode:** "Target a 6th-grade reading level for this project."

### Export / Import

- **Export** — Downloads a `techwrit-config.json` file containing your rules, terminology, glossary, custom instructions (global and per-mode), and custom templates.
- **Import** — Loads a previously exported JSON file, replacing your current configuration.

Use export/import to share configurations across teams or back up your standards. Imported files from older versions without newer fields (like per-mode instructions or templates) work — the missing fields are left unchanged.

See [Configuration Reference](/configuration-reference/) for the full JSON schema, valid field values, and examples you can use to hand-edit or generate config files.
