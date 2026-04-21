---
title: Invite members to your team
description: Send email invitations or share an invite code — new members join with your shared style rules, terminology, and glossary applied automatically.
keywords: [team, invite, email invitation, invite code, members, onboarding, roles, seats]
last_update:
  date: 04/21/2026
  author: Patricia McPhee
---

Teams on the Team plan have two ways to invite members: **email invitations** (individual, trackable, one-click accept) and a **shared invite code** (one code, works for anyone). Once a member joins, your team's shared style rules, terminology, and glossary apply to them automatically.

## Before you start

- You're on the **Team** plan. See [Pricing](/pricing/) to upgrade.
- You're the team **owner** or an **admin**. Regular members can't invite.

## Option A — Invite by email

1. Sign in at [techwrit.ai](https://techwrit.ai).
2. Open the user menu and select **Team settings**.
3. Select the **Invite** tab.
4. Enter the recipient's email, pick a role (member or admin — only owners can invite admins), and select **Send**.

The recipient gets an email from `invites@techwrit.ai` with a one-use link. When they click the link:

- If they're already signed in to TechWrit AI with the invited email, they're added to the team immediately.
- If they're not signed in (or don't have an account yet), they're prompted to sign in or sign up using the invited email. After that, they land on the team automatically.

Invitations expire after **7 days**. You can see all pending invitations in the Invite tab and cancel any that haven't been accepted yet.

## Option B — Shared invite code

Use this when you want one code that anyone can redeem — good for quick onboarding or when you don't have everyone's email in hand.

### Get your team's invite code

1. Sign in at [techwrit.ai](https://techwrit.ai).
2. Open the user menu and select **Team settings**.
3. Select the **Invite** tab.
4. Copy the 8-character code (under "Shared invite code").

The code is alphanumeric and excludes ambiguous characters (no `0`/`O`, `1`/`l`/`I`), so it's safe to read aloud or paste into chat without transcription errors.

### Share the code

Send the code to each person you want on the team — Slack, email, or any channel you trust. The code doesn't expire on its own.

Tell them exactly what to do:

1. Sign up or sign in at [techwrit.ai](https://techwrit.ai).
2. Open the user menu and select **Join a team**.
3. Paste the invite code and select **Join**.

They appear in your **Members** tab with the **Member** role.

### Rotating or revoking the code

If the code leaks, open **Team settings** → **Invite** tab → select **Regenerate**. The old code stops working immediately. Members who already joined are unaffected — they stay on the team with their current role.

## Seats and limits

Your team has a seat cap set by your Stripe subscription. You can't add more members than you have seats, and pending email invitations also reserve a seat until they expire or get accepted. To add seats:

1. Open the user menu and select **Manage billing**.
2. Update the quantity on your Team subscription.
3. Return to TechWrit AI — the new seat count shows in Team settings within a minute.

## What members get automatically

Once a member joins, every request they make uses your team's shared:

- Style rules
- Terminology substitutions
- Glossary

Members keep their own prompts, API keys, and session history. They can add personal rules on top of the shared set, but they can't turn off or override a shared rule.

## Next steps

For role management, removing members, transferring ownership, and other admin tasks, see [Team administration](/team/administration/).
