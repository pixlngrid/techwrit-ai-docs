---
title: API Keys
description: Create and manage API keys for the TechWrit AI REST API.
keywords: [API keys, authentication, REST API, revoke]
---

Pro and Team users can create API keys to access the TechWrit AI REST API. Open **API Keys** from the user menu to manage your keys.

![Profile API Keys](/img/docs/profile-api-keys.png "width=40%")

![API Keys dialog](/img/docs/api-keys.png "width=40%")

- **Create a key** — Enter an optional label (e.g., "CI pipeline") and select **Create**. The raw key is shown once — copy it immediately.
- **Key list** — Shows all your keys with their prefix (`twai_...`), label, creation date, and last used date.
- **Revoke a key** — Select the trash icon to permanently delete a key. Any integrations using that key stop working.
- **Limit** — Up to 5 API keys per user.

API requests share the same monthly quota as web UI requests. See the [API Reference](/api/api-reference/) for endpoint details and examples.
