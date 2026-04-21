---
title: Team administration
description: Manage roles, shared standards, billing, and ownership for your TechWrit AI team.
keywords: [team, administration, admin, owner, members, roles, shared standards, billing, transfer ownership, seats]
last_update:
  date: 04/21/2026
  author: Patricia McPhee
---

Team plans include shared style rules, terminology, and glossary that apply to every member automatically. This page is for team owners and admins managing that shared standard. Members should read [Getting Started](/getting-started/) instead.

## Upgrading to Team

See [Pricing](/pricing/) to subscribe. The Team plan has a 2-seat minimum, and seat count is managed through the Stripe billing portal.

If you're already on Pro, you can upgrade in place — same Stripe subscription, prorated difference on your next invoice. Open the user menu, select **Upgrade**, pick your seat count and billing cadence (monthly or annual), and confirm. A team is created with you as the owner. See [Upgrade from Pro to Team without re-subscribing](/use-cases/#upgrade-from-pro-to-team-without-re-subscribing) for the full scenario.

## Roles and permissions

Every team has exactly one **owner**, plus any number of **admins** and **members**.

| Action | Owner | Admin | Member |
|---|---|---|---|
| Edit team name | ✓ | ✓ | — |
| Edit shared config (rules / terminology / glossary) | ✓ | ✓ | — |
| View and regenerate invite code | ✓ | ✓ | — |
| Remove members (non-owner) | ✓ | ✓ | — |
| Manage billing | ✓ | ✓ | — |
| Change member roles | ✓ | — | — |
| Transfer ownership | ✓ | — | — |
| Delete team | ✓ | — | — |
| Leave team | — (must delete team or transfer first) | ✓ | ✓ |

## Inviting members

See [Invite members to your team](/team/invite-members/) for the full walkthrough.

Two paths:

- **Email invitation.** Team settings → Invite tab → enter email, pick role, **Send**. Recipient gets a one-use link that expires in 7 days.
- **Shared code.** Team settings → Invite tab → share the 8-character code → recipients redeem it via **Join a team** in their user menu.

## Managing members

Open **Team settings** → **Members** tab to see everyone on the team.

- **Change a member's role.** Owners can promote a member to admin or demote an admin to member from the member's row. Admins can't change roles.
- **Remove a member.** Owners and admins can remove any member or admin (not the owner). The removed member's account reverts to Free tier; their personal rules, prompts, glossary, and API keys stay on their account.
- **Leave the team.** Admins and members can leave at any time from **Team settings** → **Overview** → **Leave team**. The owner can't leave directly — they must either transfer ownership first or delete the team.

## Shared standards: what is shared

Three things travel with the team:

- **Style rules** — every active rule in the shared set
- **Terminology substitutions** — preferred and avoided term pairs
- **Glossary** — terms with definitions and synonyms

Three things do **not** travel with the team — each member owns their own:

- **Prompts** — each member has their own library
- **API keys** — each member creates up to 5 of their own
- **Session history** — private to each account

## How locking works

Admins edit shared standards once in **Team settings** → **Shared Config** tab. Every member's requests automatically use the shared set from then on. Members cannot disable or override a shared rule — they can only **add personal rules on top of** the shared set.

For example:

- Admin adds **Use active voice** to the shared rules → applies to everyone.
- A member adds **Capitalize product names** to their personal rules → applies only to that member, layered on top of the shared set.
- Both rules run on the member's next request.

## How a member experiences shared standards

Members see shared rules, terminology, and glossary entries marked as locked in their Settings. They can view but not edit. Personal entries still appear alongside them and are fully editable.

## Shared config size limit

The shared rules, terminology, and glossary together cannot exceed **60 KB** when serialized. Large glossaries with hundreds of entries and long definitions can hit this limit.

If a save fails with a size error, trim the shared set or ask members to move rarely-used entries to their personal config.

## Billing and seats

The Team subscription is billed **per seat** with a **2-seat minimum**.

- **Add or remove seats.** Open the user menu → **Manage billing** → update the quantity on your Team subscription. Prorated charges show up on your next invoice.
- **Who can manage billing.** Team owners and admins see the **Manage billing** option. Members don't.
- **Billing stays on the team.** The payment method, billing email, and invoices all live on the team's Stripe customer, not on any individual account. When ownership transfers, billing access transfers with the role, but the underlying Stripe customer record doesn't change.

## Transferring ownership

Owners can transfer ownership to an existing admin at any time. Both people keep their accounts and team membership; only the role changes.

**Before you start.** The person receiving ownership must already be an admin. If they're a regular member, promote them first from the Members tab.

**How to transfer:**

1. Open **Team settings** → **Overview** tab.
2. Select **Transfer ownership**.
3. Pick an admin from the dropdown.
4. Select **Confirm transfer**. The swap is immediate.

**What changes:**

- The new owner can change member roles, delete the team, transfer ownership again, and manage billing.
- The previous owner becomes an admin. They can still edit shared standards, manage members, and regenerate the invite code — but can no longer delete the team or change roles.

**What does not change:**

- Team name, member list, shared standards, and invite code are all untouched.
- The Stripe customer record and payment method stay on the team. The new owner can update both from the billing portal.
- The team's Stripe subscription is unaffected — no new invoice is generated, and the seat count stays the same.

**Reversing a transfer.** The new owner can transfer ownership back if it was a mistake. There's no automatic undo; it's a fresh transfer in the opposite direction.

**If the owner is unreachable.** Ownership cannot be claimed unilaterally by an admin. Contact support with proof of account control.

## Cancellation and downgrades

When the team's Stripe subscription is canceled or payment fails:

- Every member — owner, admins, and members — reverts to the **Free** tier.
- The team is dissolved. Shared rules, terminology, and glossary no longer apply to anyone.
- Each member keeps their personal rules, prompts, glossary terms, API keys, and session history on their individual account.

To voluntarily downgrade, the owner deletes the team from **Team settings** → **Overview** → **Delete team**, or cancels the Team subscription in the billing portal.
