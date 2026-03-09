---
title: GitHub Actions Integration
description: Automatically lint documentation on every pull request using TechWrit AI and GitHub Actions.
keywords: [GitHub Actions, CI/CD, pull request, docs lint, automation, style check, review]
last_update:
  date: 03/09/2026
  author: Patricia McPhee
---

Enforce documentation quality on every pull request. The workflow lints changed `.md` and `.mdx` files against your TechWrit AI style rules and posts a review comment directly on the PR.

## Prerequisites

- A **Pro** or **Team** subscription — API access is not available on the Free tier
- A TechWrit AI API key — see [API keys](/api/api-keys/) to generate one
- A GitHub repository with documentation files (`.md` or `.mdx`)

## Setup

### 1. Add your API key as a repository secret

1. In your GitHub repository, go to **Settings > Secrets and variables > Actions**.
2. Select **New repository secret**.
3. Set the name to `TECHWRIT_API_KEY` and paste your API key (starts with `twai_`).
4. Select **Add secret**.

### 2. Add the workflow file

Create `.github/workflows/docs-lint.yml` in your repository with the following content:

```yaml
name: Docs Lint

on:
  pull_request:
    paths:
      - "**.md"
      - "**.mdx"

permissions:
  contents: read
  pull-requests: write

jobs:
  lint-docs:
    runs-on: ubuntu-latest
    env:
      TECHWRIT_API_KEY: ${{ secrets.TECHWRIT_API_KEY }}
      MODE: ${{ vars.TECHWRIT_MODE || 'style-check' }}
      DOC_TYPE: ${{ vars.TECHWRIT_DOC_TYPE || '' }}
      AUDIENCE: ${{ vars.TECHWRIT_AUDIENCE || '' }}
      FAIL_ON_CRITICAL: ${{ vars.TECHWRIT_FAIL_ON_CRITICAL || 'false' }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Get changed doc files
        id: changed
        run: |
          FILES=$(git diff --name-only origin/${{ github.base_ref }}...HEAD \
            -- '*.md' '*.mdx' || true)
          echo "files<<EOF" >> "$GITHUB_OUTPUT"
          echo "$FILES" >> "$GITHUB_OUTPUT"
          echo "EOF" >> "$GITHUB_OUTPUT"
          echo "count=$(echo "$FILES" | grep -c '[^[:space:]]' || true)" >> "$GITHUB_OUTPUT"

      - name: Lint docs
        if: steps.changed.outputs.count != '0'
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          COMMENT_BODY="## TechWrit AI — Doc Review"$'\n\n'
          FOUND_CRITICAL=false
          FILE_COUNT=0

          while IFS= read -r FILE; do
            [ -z "$FILE" ] && continue
            [ ! -f "$FILE" ] && continue
            FILE_COUNT=$((FILE_COUNT + 1))

            INPUT=$(cat "$FILE")

            # Build JSON payload safely with jq
            PAYLOAD=$(jq -n \
              --arg mode "$MODE" \
              --arg input "$INPUT" \
              --arg docType "$DOC_TYPE" \
              --arg audience "$AUDIENCE" \
              '{mode: $mode, input: $input}
               + (if $docType != "" then {docType: $docType} else {} end)
               + (if $audience != "" then {audience: $audience} else {} end)')

            # Call API with retry on 429
            HTTP_CODE=""
            for ATTEMPT in 1 2 3; do
              HTTP_CODE=$(curl -s -o /tmp/twai_response.json -w "%{http_code}" \
                -X POST https://techwrit.ai/api/v1/analyze \
                -H "X-Authorization: Bearer $TECHWRIT_API_KEY" \
                -H "Content-Type: application/json" \
                -d "$PAYLOAD")

              if [ "$HTTP_CODE" = "429" ] && [ "$ATTEMPT" -lt 3 ]; then
                echo "Rate limited on $FILE, waiting 30s (attempt $ATTEMPT/3)..."
                sleep 30
              else
                break
              fi
            done

            if [ "$HTTP_CODE" = "200" ]; then
              RESULT=$(jq -r '.content' /tmp/twai_response.json)

              if echo "$RESULT" | grep -qi "critical"; then
                FOUND_CRITICAL=true
              fi

              COMMENT_BODY+="<details>"$'\n'
              COMMENT_BODY+="<summary><strong>$FILE</strong></summary>"$'\n\n'
              COMMENT_BODY+="$RESULT"$'\n\n'
              COMMENT_BODY+="</details>"$'\n\n'

            elif [ "$HTTP_CODE" = "429" ]; then
              COMMENT_BODY+="<details>"$'\n'
              COMMENT_BODY+="<summary><strong>$FILE</strong> — skipped (rate limit)</summary>"$'\n\n'
              COMMENT_BODY+="Monthly quota reached. Upgrade at [techwrit.ai/pricing](https://techwrit.ai/pricing)."$'\n\n'
              COMMENT_BODY+="</details>"$'\n\n'

            elif [ "$HTTP_CODE" = "403" ]; then
              echo "::error::TechWrit AI API requires a Pro or Team subscription. Upgrade at https://techwrit.ai/pricing"
              exit 1

            elif [ "$HTTP_CODE" = "401" ]; then
              echo "::error::Invalid TECHWRIT_API_KEY. Check your repository secret at Settings > Secrets and variables > Actions."
              exit 1

            else
              ERROR=$(jq -r '.error.message // "Unknown error"' /tmp/twai_response.json 2>/dev/null || echo "HTTP $HTTP_CODE")
              COMMENT_BODY+="<details>"$'\n'
              COMMENT_BODY+="<summary><strong>$FILE</strong> — error ($HTTP_CODE)</summary>"$'\n\n'
              COMMENT_BODY+="$ERROR"$'\n\n'
              COMMENT_BODY+="</details>"$'\n\n'
            fi

            # Brief pause between files
            sleep 2

          done <<< "${{ steps.changed.outputs.files }}"

          COMMENT_BODY+="---"$'\n'
          COMMENT_BODY+="_Powered by [TechWrit AI](https://techwrit.ai) | Mode: ${MODE}_"

          # Find existing bot comment (if any) and update it, otherwise post new
          PR_NUMBER=${{ github.event.pull_request.number }}
          EXISTING=$(gh api "/repos/${{ github.repository }}/issues/${PR_NUMBER}/comments" \
            --jq '.[] | select(.body | startswith("## TechWrit AI")) | .id' \
            2>/dev/null | head -1)

          if [ -n "$EXISTING" ]; then
            gh api --method PATCH \
              "/repos/${{ github.repository }}/issues/comments/${EXISTING}" \
              -f body="$COMMENT_BODY"
          else
            gh pr comment "$PR_NUMBER" --body "$COMMENT_BODY"
          fi

          # Fail if critical issues found and fail mode is on
          if [ "$FAIL_ON_CRITICAL" = "true" ] && [ "$FOUND_CRITICAL" = "true" ]; then
            echo "::error::Critical documentation issues found. See the PR comment for details."
            exit 1
          fi
```

### 3. Configure options (optional)

The workflow works with zero configuration beyond the API key. If you skip this step, every PR lint runs in `style-check` mode with no doc type or audience filter, and the workflow always passes regardless of what the review finds. Your account's saved style rules, terminology substitutions, and glossary are applied automatically.

To customize behavior, set **repository Variables** (not secrets) at **Settings > Secrets and variables > Actions > Variables**:

#### `TECHWRIT_MODE`

Controls the type of review. Default: `style-check`.

- **`style-check`** — Runs each active style rule as a pass/fail checklist. The output ends with a style score (percentage of rules passed) and the top three fixes. Best for a quick compliance gate.
- **`review`** — Provides a narrative review grouped by severity (Critical, Important, Minor). Each issue quotes the problematic text, explains what is wrong, and offers a concrete correction. Best for detailed editorial feedback.

#### `TECHWRIT_DOC_TYPE`

Tells the AI what kind of document it is reviewing so it can apply the right structural expectations. Default: none (inferred from content).

Examples: `API reference`, `User guide`, `Tutorial`, `Release notes`, `How-to guide`, `Conceptual overview`.

When set, the review checks structure conventions for that doc type — for example, a how-to guide should have numbered procedures, and an API reference should have parameter tables.

#### `TECHWRIT_AUDIENCE`

Adjusts the vocabulary, detail level, and assumed knowledge of the review. Default: none (general).

- **`consumer`** — Flags jargon, assumes no technical background. Reviews check that every technical term is defined.
- **`developers`** — Expects code examples and API signatures. Tolerates technical shorthand.
- **`engineers`** — Expects architecture details and system behavior. Tolerates deep domain language.
- **`devops`** — Expects CLI commands, config files, and environment variables. Focuses on operational clarity.

#### `TECHWRIT_FAIL_ON_CRITICAL`

Controls whether the workflow fails the PR check when critical issues are found. Default: `false`.

- **`false`** — The workflow always passes. Results are posted as a PR comment for informational review only.
- **`true`** — The workflow fails if any file's review contains a Critical-severity issue. This blocks the PR from merging (when used with branch protection rules) until the issues are resolved or the check is overridden.

## How it works

1. The workflow triggers when a PR creates or modifies `.md` or `.mdx` files.
2. It compares the PR branch against the base branch to identify changed doc files.
3. Each changed file is sent to the TechWrit AI API for analysis (one request per file).
4. The API applies your account's saved style rules, terminology substitutions, and glossary.
5. Results are posted as a single PR comment with collapsible sections per file.
6. On subsequent pushes to the same PR, the existing comment is updated in place.

## Rate limits and quota

Each file counts as one API request against your monthly quota. Pro and Team plans have unlimited requests. A style check on a typical documentation page uses roughly the same quota as one request in the web UI.

To limit which files trigger the workflow, narrow the `paths` filter:

```yaml
on:
  pull_request:
    paths:
      - "docs/**.md"
      - "content/**.mdx"
```

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `401` — Invalid API key | `TECHWRIT_API_KEY` secret is missing or wrong | Regenerate the key at techwrit.ai and update the repository secret |
| `403` — API access requires Pro | Account is on the Free tier | Upgrade to Pro or Team at techwrit.ai/pricing |
| `429` — files skipped | Monthly quota exhausted | Wait for the monthly reset or upgrade your plan |
| No comment posted | No `.md`/`.mdx` files changed in the PR | Expected — the workflow skips non-doc PRs |
| Empty diff / no files found | Shallow clone | Confirm `fetch-depth: 0` is set in the checkout step |
| Comment duplicated | Bot cannot find its previous comment | The workflow searches for comments starting with "## TechWrit AI" — avoid editing that heading in the comment |
