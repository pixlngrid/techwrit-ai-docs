---
title: API Reference
description: REST API endpoint, authentication, rate limits, request/response format, and code examples.
keywords: [API, REST, endpoint, authentication, rate limits, cURL, Node.js, Python]
---

The TechWrit AI REST API lets you integrate documentation analysis into CI/CD pipelines, scripts, and custom tooling.

**Base URL:** `https://techwrit.ai/api`

## Authentication

All API requests require an API key sent as a Bearer token in the `X-Authorization` header.

```
X-Authorization: Bearer twai_your_api_key_here
```

:::note
Use `X-Authorization` (not `Authorization`). The hosting platform reserves the standard `Authorization` header for its own authentication layer.
:::

### Creating an API key

1. Sign in to TechWrit AI (Pro or Team subscription required).
2. Open the user menu (bottom of the sidebar) and select **API Keys**.
3. Enter an optional label and click **Create**.
4. Copy the key immediately — it is shown only once.

You can create up to 5 API keys. Revoke unused keys from the same dialog.

## Rate limits

API requests share the same monthly quota as web UI requests. Every response includes rate limit headers:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Monthly request limit (omitted for unlimited tiers) |
| `X-RateLimit-Remaining` | Requests remaining this month |
| `X-RateLimit-Reset` | ISO 8601 timestamp when the limit resets (1st of next month) |

## POST /api/v1/analyze

Analyze or generate technical documentation.

### Request body

```json
{
  "mode": "review",
  "input": "Click the button to login to the system.",
  "docType": "API reference",
  "audience": "developers",
  "rules": [
    { "label": "Active voice", "description": "Prefer active voice over passive." }
  ],
  "termSubs": [
    { "preferred": "select", "avoid": ["click"] }
  ],
  "glossary": [
    { "term": "API", "definition": "Application Programming Interface.", "synonyms": ["interface"] }
  ],
  "customInstructions": "Focus on security terminology."
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `mode` | string | Yes | One of: `generate`, `rewrite`, `review`, `style-check`, `simplify`, `keywords`, `glossary-gen`, `code-to-docs`, `user-guide`, `explain`, `summarize`, `expand`, `translate`, `outline` |
| `input` | string | Yes | The text to analyze or the prompt for generation |
| `docType` | string | No | Document type context (e.g., "API reference", "User guide") |
| `audience` | string | No | One of: `consumer`, `engineers`, `developers`, `devops` |
| `rules` | array | No | Style rules to apply. Each: `{ label, description }`. If omitted, uses your saved rules. |
| `termSubs` | array | No | Terminology substitutions. Each: `{ preferred, avoid[] }`. If omitted, uses your saved config. |
| `glossary` | array | No | Glossary entries. Each: `{ term, definition, synonyms[] }`. If omitted, uses your saved config. |
| `customInstructions` | string | No | Additional freeform instructions appended to the prompt |

When `rules`, `termSubs`, or `glossary` are omitted, the API falls back to your saved configuration from the web UI.

### Success response (200)

```json
{
  "content": "The analysis output text...",
  "mode": "review",
  "usage": {
    "inputTokens": 1234,
    "outputTokens": 567
  },
  "quota": {
    "limit": null,
    "used": 5,
    "remaining": null
  }
}
```

| Field | Description |
|-------|-------------|
| `content` | The generated or analyzed text |
| `mode` | The mode that was used |
| `usage.inputTokens` | Input tokens consumed |
| `usage.outputTokens` | Output tokens consumed |
| `quota.limit` | Monthly limit (`null` for unlimited tiers) |
| `quota.used` | Requests used this month |
| `quota.remaining` | Requests remaining (`null` for unlimited) |

### Error responses

| Status | Code | Description |
|--------|------|-------------|
| 400 | `INVALID_MODE` | Missing or invalid `mode` parameter |
| 400 | `INVALID_INPUT` | Missing or empty `input` parameter |
| 401 | `UNAUTHORIZED` | Missing or invalid API key |
| 403 | `API_KEY_REQUIRED` | Free tier — API requires Pro or Team |
| 429 | `RATE_LIMIT_EXCEEDED` | Monthly request limit exceeded |
| 502 | `UPSTREAM_ERROR` | Upstream AI service error |

Error response body:

```json
{
  "error": {
    "message": "Human-readable error description.",
    "code": "ERROR_CODE"
  }
}
```

## Examples

### cURL

```bash
curl -X POST https://techwrit.ai/api/v1/analyze \
  -H "X-Authorization: Bearer twai_your_key_here" \
  -H "Content-Type: application/json" \
  -d '{
    "mode": "review",
    "input": "Click the button to login to the system."
  }'
```

### Node.js

```javascript
const response = await fetch("https://techwrit.ai/api/v1/analyze", {
  method: "POST",
  headers: {
    "X-Authorization": "Bearer twai_your_key_here",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    mode: "review",
    input: "Click the button to login to the system.",
    audience: "developers",
  }),
});

const data = await response.json();
console.log(data.content);
```

### Python

```python
import requests

response = requests.post(
    "https://techwrit.ai/api/v1/analyze",
    headers={
        "X-Authorization": "Bearer twai_your_key_here",
        "Content-Type": "application/json",
    },
    json={
        "mode": "review",
        "input": "Click the button to login to the system.",
    },
)

data = response.json()
print(data["content"])
```

## Limitations

- **Stateless** — Each request is independent. There is no session history or multi-turn context.
- **Text only** — File attachments are not supported via the API. Include code as text in the `input` field.
- **Max input** — Input text is limited by the upstream model's context window (approximately 200,000 characters).
- **Shared quota** — API requests and web UI requests share the same monthly counter.
