---
title: Introduction
description: TechWrit AI enforces your style guide, terminology, and glossary across every document — so quality depends on your standards, not who's available to review.
keywords: [TechWrit AI, technical writing, style guide enforcement, documentation quality, AI documentation tool]
last_update:
  date: 03/19/2026
  author: Patricia McPhee
---

Style guides shouldn't just be documents — they should be enforceable systems.

Every documentation team has style rules. They live in a PDF that nobody opens, in a senior writer's head, or in PR comments that say "this doesn't sound right" without explaining why. New writers don't know the rules. Reviewers catch different issues depending on who reviews. Quality depends on who's available, not on the standards themselves.

TechWrit AI changes that. It codifies your style rules, terminology standards, and product glossary into configuration that the AI enforces automatically — across 17 purpose-built modes for technical writing and UX writing. The output follows your rules from the first draft, not the third revision.

## What makes this different from ChatGPT or Claude?

Generic AI writing tools optimize for engagement. They suggest vague improvements, have no concept of your product terminology, and will happily replace your carefully chosen technical terms with "simpler" alternatives that change the meaning.

TechWrit AI is the opposite. It enforces *your* rules:

| | General AI tools | TechWrit AI |
|---|---|---|
| **Style rules** | Generic writing advice | Your 25+ configurable rules, checked individually, scored as a percentage |
| **Terminology** | Suggests whatever sounds natural | Enforces your substitutions ("select" not "click," "repository" not "repo") |
| **Product glossary** | No awareness of your product | Knows your terms, definitions, and synonyms — flags misuse in reviews |
| **Output structure** | Generic markdown | Framework-aware output for Trellis, Docusaurus, or Notion — ready to commit |
| **Measurability** | "This reads better" | Style score: 85% of rules passed. Grade level dropped from 14 to 9 |
| **Team consistency** | Depends on who prompts it | Shared config across every writer. Same rules, same enforcement, every time |
| **CI/CD integration** | None | REST API and GitHub Actions for automated doc linting on every PR |

## See it in action

Here's a paragraph before and after a TechWrit AI Style Check:

**Before:**
> Click on the Settings button to configure the application settings. The user should be aware that changes made here will effect the entire system. There's a lot of different options available, and we recommend familiarizing yourself with each one.

**Style Check result (4 of 7 rules passed — 57%):**

- **Use "select" instead of "click"** — Terminology violation. Your substitution rules specify "select" for UI interactions.
- **Active voice** — "The user should be aware" is passive. Rewrite: "Note that changes here affect the entire system."
- **Correct word usage** — "effect" should be "affect" in this context (verb vs. noun).

**After Rewrite:**
> Select **Settings** to configure the application. Changes here affect the entire system. Review each option before saving.

Style score: 7/7 (100%). Grade level: 6 (was 11).

## Who uses TechWrit AI

### Solo writers standardizing their own work

Configure your style rules once. Run Review or Style Check before every publish. Get measurable quality scores instead of guessing. The free tier gives you 20 requests/month with all 17 modes.

### Teams enforcing shared conventions

Lock style rules, terminology, and glossary across your entire team. New writers get the same feedback as veterans. Senior reviewers stop spending cycles on "use select, not click" and focus on content accuracy.

### Documentation pipelines with CI/CD

Add the REST API or GitHub Action to your CI pipeline. Every pull request that touches a `.md` file gets automatically linted against your style rules. Fail the build on critical violations — the same way you lint code.

## The origin

At Cigna, I built a GenAI writing toolkit that reduced feature-writing cycle time by 75%. The approach: encode writing standards into structured AI prompts so the output follows your rules from the first draft.

TechWrit AI is that idea, productized. The 25 default style rules aren't theoretical — they're the rules I've enforced (and seen violated) across 30 years of documentation work at Microsoft, Amazon, Facebook/Oculus, GE Healthcare, LivePerson, Beyond Identity, and Expedia Group.

Every mode, every prompt, every default is built on what actually matters in technical writing: accuracy first, write for the reader's task.

## Get started

1. [Create a free account](https://techwrit.ai) — no credit card required.
2. [Configure your standards](/settings/) — toggle rules, add terminology, populate your glossary.
3. [Submit your first document](/getting-started/) — paste content, pick a mode, and see the difference.

## Connect

- [patriciamcphee.com](https://www.patriciamcphee.com)
- [LinkedIn](https://www.linkedin.com/in/patriciamcphee/)
- [hello@techwrit.ai](mailto:hello@techwrit.ai)
