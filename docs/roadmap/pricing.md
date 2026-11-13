# Pricing

Status: in progress

## Goal

Show the plans and let a visitor start a conversation.

## Scope

- Plan cards with what each includes
- Every plan ends in a Contact button that opens the contact page with the plan preselected

## Out of scope

- Online payment and billing. A sale starts with a message for now.

## Progress

- Done: `/pricing` with three plan cards and Contact buttons (`/contact?plan=<id>`). Plans live in `src/data/plans.ts`.
- Left: real plans and prices (current ones are placeholders)
- Plans are per app (`appSlug` in `src/data/plans.ts`), shown in one section per app.
