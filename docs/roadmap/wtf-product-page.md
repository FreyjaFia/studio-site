# WTF POS product page

Status: in progress

## Goal

Sell WTF POS (Wake. Taste. Focus) with screenshots, features and an embedded live demo.

## Scope

- Feature overview and screenshots
- Demo embed (iframe) pointing at the separate demo deployment
- Link to Pricing and Contact

## Depends on

- Demo mode in WTF POS (throwaway tenant, about 2 hour expiry, Turnstile and rate limit). Until it exists, show a placeholder or screenshots only.

## Progress

- Done: page at `/apps/wtf` with features, screenshot placeholders and a demo embed placeholder (`src/components/demo-embed.astro`)
- Left: real screenshots, and pass the demo URL to `DemoEmbed` once the demo deployment exists
