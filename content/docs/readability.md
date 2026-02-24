---
title: Readability Metrics
description: Real-time readability scores, before/after comparisons, and word-level diffs.
keywords: [readability, flesch, grade level, gunning fog, diff, before after]
---

TechWrit AI calculates readability scores in real time as you type. In Rewrite and Simplify modes, before/after comparisons show the concrete impact of edits.

![Content Readability](/img/docs/content-readability.png)

## Scores

### Flesch Reading Ease (0-100)

Measures how easy text is to read. Higher is easier.

| Score | Level |
|-------|-------|
| 80-100 | Easy — conversational, accessible to wide audiences |
| 60-79 | Standard — comfortable for most readers |
| 40-59 | Difficult — may require domain expertise |
| 0-39 | Very difficult — academic or highly specialized |

### Flesch-Kincaid Grade Level

Estimates the US school grade required to understand the text. A score of 8 means an 8th grader should be able to understand it.

**Target for technical docs:** Grade 8-12 depending on audience.

### Gunning Fog Index

Estimates years of formal education needed. Similar to grade level but weights complex words (3+ syllables) more heavily.

## Additional metrics

- **Word count** — Total words in the input
- **Words per sentence** — Average sentence length (lower is generally clearer)
- **Complexity %** — Percentage of words with 3+ syllables

## Before/After comparison

In **Rewrite** and **Simplify** modes, the output panel shows a side-by-side comparison:

- Flesch Ease (higher is better)
- Grade level (lower is better)
- Words per sentence (lower is better)
- Complexity % (lower is better)
- Total word count

Improvements are highlighted in green; regressions in orange.

![Rewrite Analysis](/img/docs/rewrite-analysis.png)

## Word-level diff

Toggle the diff view to see exactly what changed:

- **Red strikethrough** — removed words
- **Green highlight** — added words
- **Normal text** — unchanged

A summary shows the count of removed and added words.

![Show Diff](/img/docs/show-diff.png)
