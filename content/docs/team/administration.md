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

Shared and personal rules, terminology, and glossary entries all live in the same **Settings** dialog. Shared items are visually marked with a **Team** badge; members see them as read-only, admins see a button to unshare.

Admins promote any personal item to the team's shared set with a single click (the **Share with team** icon, a small people-icon that appears next to each row on hover). Once shared, the item takes effect for every team member on their next request. Members cannot disable or override a shared rule — they can only **add personal rules on top of** the shared set.

For example:

- Admin clicks **Share with team** on **Use active voice** → applies to everyone.
- A member adds **Capitalize product names** to their personal rules → applies only to that member, layered on top of the shared set.
- Both rules run on the member's next request.

Admins can demote a shared item back to personal at any time with the **Remove from team** icon — the item disappears from other members' configs and returns to the admin's personal set.

## How a member experiences shared standards

Members see shared rules, terminology, and glossary entries directly in their **Settings** dialog, marked with a **Team** badge and a lock icon. The toggles are disabled; edit and delete controls are hidden. Personal entries appear alongside them and are fully editable.

## How shared config is stored and propagates

Your shared rules, terminology, and glossary are stored once — on the team itself, not copied into each member's account. Every member reads from the same shared set, so when you change it, the change applies to everyone.

- **When someone new joins the team,** they see the current shared set on their next login. No import step, no catch-up period.
- **When an admin changes the shared set** — shares a new rule, edits a shared glossary entry, or unshares something — existing members pick up the change the next time they load the app. Active sessions keep using the previous version until the user refreshes; changes don't push mid-session.
- **When a member leaves the team** or is removed, the shared set stops applying to them immediately. Their personal rules, prompts, API keys, and session history stay on their account.

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

## Common questions

**Can two admins edit the shared config at the same time?**

Technically yes, but simultaneous edits don't merge — the last write wins. If two admins are making sweeping changes at once, one of them can overwrite the other. In practice this is rare; coordinate if you're doing a big restructuring.

**What if a member's personal rule has the same name as a shared rule?**

The shared version takes precedence. The member sees the shared rule in Settings with a locked toggle; their personal version is hidden until the shared rule is removed or renamed.

**Can members see what's currently in the shared config?**

Yes. Every member sees the full shared set in their **Settings** dialog, marked with the **Team** badge. They can't edit it, but they can read it like any other rule or glossary entry.

**Can I bulk-share a set of rules at once?**

Not today — you share items one at a time via the **Share with team** icon in Settings. If you've imported a style-guide preset and want the whole preset shared, you currently share each rule individually. A bulk-share action is a possible future improvement.

**Is there an audit log of shared-config changes?**

No. There's a version counter that increments on every edit, but there's no history of who changed what. If a change log matters for your team, file a request.

**Can members propose items for sharing?**

Not directly. Members' additions stay personal to them. If they want something in the shared set, they ask an admin, who adds the item to their own Settings and clicks **Share with team**.

## Cancellation and downgrades

When the team's Stripe subscription is canceled or payment fails:

- Every member — owner, admins, and members — reverts to the **Free** tier.
- The team is dissolved. Shared rules, terminology, and glossary no longer apply to anyone.
- Each member keeps their personal rules, prompts, glossary terms, API keys, and session history on their individual account.

To voluntarily downgrade, the owner deletes the team from **Team settings** → **Overview** → **Delete team**, or cancels the Team subscription in the billing portal.
