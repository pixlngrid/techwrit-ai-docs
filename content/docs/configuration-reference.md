---
title: Configuration Reference
description: Full JSON schema for the techwrit-config.json export/import file.
keywords: [configuration, JSON, schema, rules, terminology, glossary, templates, custom instructions, mode instructions, export, import]
---

TechWrit AI exports and imports configuration as a single JSON file (`techwrit-config.json`). This page documents every field so you can hand-edit a config, build one from scratch, or generate one programmatically.

## Top-level structure

```json
{
  "rules": [],
  "termSubs": [],
  "glossary": [],
  "customInst": "",
  "modeInstructions": {},
  "templates": []
}
```

All fields are optional on import — missing fields are left unchanged.

---

## rules

An array of style rule objects. Each rule tells the AI to check for (and fix) a specific writing pattern.

```json
{
  "id": "no-please",
  "label": "Avoid \"Please\"",
  "description": "Don't start instructions with \"Please\" — use direct, imperative language.",
  "active": true,
  "custom": false,
  "category": "Tone"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier. Built-in IDs are fixed; custom rules should use a slug (e.g., `"no-exclamation-points"`). |
| `label` | string | Yes | Short display name shown in the Settings toggle list. |
| `description` | string | Yes | The instruction sent to the AI. Be specific — this is the actual rule text the model reads. |
| `active` | boolean | Yes | Whether the rule is included in the prompt. Set to `false` to keep a rule defined but disabled. |
| `custom` | boolean | Yes | `true` for user-created rules, `false` for built-in defaults. |
| `category` | string | No | Grouping label. Built-in rules use `"Tone"`, `"Clarity"`, `"Formatting"`, or `"Structure"`. Custom rules default to `"Custom"`. |

### Built-in rule IDs

`no-please`, `no-and-or`, `title-case-titles`, `sentence-case-headings`, `no-may`, `ensure-vs-confirm`, `active-voice`, `present-tense`, `second-person`, `no-future-tense`, `parallel-structure`, `no-jargon-undefined`, `concise`, `no-there-is`, `consistent-terminology`, `no-redundancy`

### Example: adding a custom rule

```json
{
  "id": "oxford-comma",
  "label": "Use Oxford commas",
  "description": "Always use a comma before the conjunction in a list of three or more items.",
  "active": true,
  "custom": true,
  "category": "Formatting"
}
```

---

## termSubs

An array of terminology substitution objects. Each entry defines a preferred term and a list of terms to avoid.

```json
{
  "preferred": "select",
  "avoid": ["click on", "click"]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `preferred` | string | Yes | The term to use instead. |
| `avoid` | string[] | Yes | One or more terms to flag and replace. Case-insensitive matching. |

### Default substitutions

```json
[
  { "preferred": "select", "avoid": ["click on", "click"] },
  { "preferred": "enter", "avoid": ["type in", "input"] },
  { "preferred": "repository", "avoid": ["repo"] }
]
```

### Example: adding substitutions

```json
[
  { "preferred": "endpoint", "avoid": ["API route", "route"] },
  { "preferred": "run", "avoid": ["execute", "invoke"] },
  { "preferred": "set up", "avoid": ["setup", "configure"] }
]
```

---

## glossary

An array of glossary entry objects. These give the AI semantic understanding of your product terms — not just spelling, but meaning.

```json
{
  "term": "webhook",
  "definition": "An HTTP callback that sends real-time notifications to your application when an event occurs.",
  "synonyms": ["callback URL", "HTTP callback"]
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `term` | string | Yes | The canonical term. |
| `definition` | string | Yes | A 1-2 sentence explanation. The AI uses this definition when writing about or reviewing the term. |
| `synonyms` | string[] | No | Alternative names. The AI flags these and suggests the canonical term instead. |

### Example: a product glossary

```json
[
  {
    "term": "workspace",
    "definition": "The main editing environment where users compose input, select modes, and view AI output.",
    "synonyms": ["editor", "dashboard"]
  },
  {
    "term": "style rule",
    "definition": "A writing guideline that TechWrit AI enforces during review, rewrite, and generation.",
    "synonyms": ["writing rule", "lint rule"]
  },
  {
    "term": "context bar",
    "definition": "The horizontal bar above the input area containing Audience, Doc Type, Mode, and Templates selectors."
  }
]
```

---

## customInst

A string containing freeform instructions appended to every AI request. Use this for guidance that doesn't fit a single style rule.

```json
{
  "customInst": "Our audience is enterprise IT admins. Keep paragraphs under 4 sentences. Always use Oxford commas."
}
```

Set to an empty string (`""`) to clear.

---

## modeInstructions

An object mapping mode IDs to mode-specific instruction strings. When a mode has an entry here, it replaces the global `customInst` for that mode. Modes without an entry fall back to `customInst`.

```json
{
  "modeInstructions": {
    "review": "Focus on security concerns and OWASP compliance.",
    "rewrite": "Always use Oxford commas. Prefer bullet lists for non-sequential content.",
    "simplify": "Target a 6th-grade reading level for this project."
  }
}
```

| Key                         | Type   | Description                                                                                                                                       |
|-----------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Mode ID (e.g., `"review"`) | string | The instruction to use instead of `customInst` when this mode is active. See the [Valid mode IDs](#valid-mode-ids) table for all accepted keys. |

Set a mode's value to an empty string or omit the key entirely to use the global `customInst` fallback.

This field is optional. If omitted or set to `{}`, the global `customInst` applies to all modes.

---

## templates

An array of prompt template objects. Templates pre-fill the input area with structured content containing placeholders.

```json
{
  "id": "changelog-entry",
  "name": "Changelog Entry",
  "content": "Component: [name]\nDate: [date]\n\nChanges:\n- [change 1]\n- [change 2]\n\n=== OUTPUT FORMAT ===\nFormat as a changelog entry with a summary sentence followed by a bulleted list of changes.",
  "mode": "generate",
  "docType": "Release notes",
  "builtin": false
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier. Use a slug format (e.g., `"changelog-entry"`). |
| `name` | string | Yes | Display name shown in the Templates dropdown. |
| `content` | string | Yes | The template body. Use `[placeholder]` syntax for fields the user fills in. Include an `=== OUTPUT FORMAT ===` section to guide the AI's response structure. |
| `mode` | string | No | Auto-set mode when the template is applied. See valid mode IDs below. |
| `docType` | string | No | Auto-set doc type when the template is applied. See valid doc types below. |
| `builtin` | boolean | Yes | Set to `false` for custom templates. Built-in templates (`true`) are managed by the app and cannot be overridden via import. |

### Template content tips

- Use `[bracketed placeholders]` for fields the user fills in — e.g., `[product name]`, `[version number]`.
- Add an `=== OUTPUT FORMAT ===` section at the end to instruct the AI on structure, headings, and format.
- Use `\n` for line breaks in JSON (or actual newlines if editing in the Settings UI).

---

## Valid mode IDs

Use these values for the `mode` field in templates:

| ID | Label |
|----|-------|
| `generate` | Write |
| `rewrite` | Rewrite |
| `review` | Review |
| `style-check` | Style Check |
| `simplify` | Simplify |
| `keywords` | Keywords |
| `glossary-gen` | Glossary |
| `code-to-docs` | Code to Docs |
| `user-guide` | User Guide |
| `explain` | Explain |
| `summarize` | Summarize |
| `expand` | Expand |
| `translate` | Translate |
| `outline` | Outline |

## Valid doc types

Use these values for the `docType` field in templates:

`API reference`, `How-to guide`, `Conceptual overview`, `Tutorial`, `Release notes`, `Troubleshooting guide`, `README`, `Runbook`, `Migration guide`, `Architecture decision record`, `FAQ`

## Valid rule categories

Use these values for the `category` field in style rules:

`Tone`, `Clarity`, `Formatting`, `Structure`

Custom rules can use any category string — unrecognized values appear as their own group in Settings.

---

## Complete example

A minimal but functional configuration:

```json
{
  "rules": [
    { "id": "no-please", "label": "Avoid \"Please\"", "description": "Don't start instructions with \"Please\" — use direct, imperative language.", "active": true, "custom": false, "category": "Tone" },
    { "id": "active-voice", "label": "Prefer active voice", "description": "Use active voice unless passive is clearer or the actor is unknown.", "active": true, "custom": false, "category": "Tone" },
    { "id": "no-weasel-words", "label": "No weasel words", "description": "Avoid vague qualifiers like \"simply\", \"just\", \"easily\", and \"obviously\" — they undermine the reader's experience when the task isn't easy.", "active": true, "custom": true, "category": "Clarity" }
  ],
  "termSubs": [
    { "preferred": "select", "avoid": ["click on", "click"] },
    { "preferred": "enter", "avoid": ["type in", "input"] }
  ],
  "glossary": [
    {
      "term": "webhook",
      "definition": "An HTTP callback that sends real-time notifications to your application when an event occurs.",
      "synonyms": ["callback URL"]
    }
  ],
  "customInst": "Target a 9th-grade reading level. Use Oxford commas.",
  "modeInstructions": {
    "review": "Focus on security concerns and OWASP compliance.",
    "simplify": "Target a 6th-grade reading level for this project."
  },
  "templates": [
    {
      "id": "sdk-quickstart",
      "name": "SDK Quickstart",
      "content": "SDK name: [name]\nLanguage: [language]\nInstall command: [install command]\nMain use case: [what developers build with it]\n\n=== OUTPUT FORMAT ===\nFormat as a quickstart guide with: Overview, Prerequisites, Installation, First API call (with code example), Next steps.",
      "mode": "generate",
      "docType": "Tutorial",
      "builtin": false
    }
  ]
}
```
