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

## Common questions

**Why didn't my invite email arrive?**

Check these in order:

- **Spam/junk folder.** First emails from new senders often get filtered. Invitations come from `invites@techwrit.ai`.
- **Typo in the address.** Open the **Pending invitations** list and verify the address — one wrong character sends the email into the void.
- **Corporate mail server rejection.** Some workplaces silently drop email from unfamiliar senders. Ask the recipient to check with their IT team, or invite a personal address instead.

If the email is genuinely lost, cancel the pending invite and send a new one — that regenerates the link and sends a fresh email.

**Can I resend an invitation?**

There's no dedicated resend button today. Open **Team settings** → **Invite**, click the **X** next to the pending invitation to cancel it, then enter the same email and send again. The recipient gets a fresh email with a new link.

**What if I invited the wrong email address?**

Cancel the pending invitation by clicking the **X** next to it in the Invite tab. That invalidates the link immediately. Then send a new invite to the correct email.

**Why can't the person I invited accept the link?**

The most common reason: they're signed in to TechWrit AI with a different email than the one you invited. Invitations are locked to the address you typed, so the recipient needs to sign in (or sign up) using that exact email.

Other possibilities:

- The invite has expired (7-day limit). Send a new one.
- You cancelled the invite, or it was replaced by a newer one. Send a new one.
- The recipient is already in a different team. They need to leave their current team before accepting. The error message on the link explains this when they click it.

**Do invitations expire?**

Yes — after **7 days**. Expired links return an error when clicked. Just send a new invite; cleaning up the old one isn't required (expired invites are filtered out of the Pending list automatically).

**Can I invite someone who already uses TechWrit AI?**

Yes. If they have a TechWrit AI account under the invited email, clicking the link signs them into the team immediately. If their account is under a different email, either invite that other email, or ask them to add the invited email to their Clerk account first, or sign up a fresh account with the invited email.

**Can I invite someone who's already on another team?**

Not directly — each user can only belong to one team at a time. If the recipient is already in a team, they have to leave that team before accepting your invite. They get a clear error explaining this when they click the link.

## Next steps

For role management, removing members, transferring ownership, and other admin tasks, see [Team administration](/team/administration/).
