# Site foundation

Status: in progress

## Goal

An Astro static site with Tailwind, a shared layout (header, footer, navigation) and a free static host.

## Scope

- Scaffold Astro with TypeScript strict mode
- Tailwind CSS and shared layout component
- Path aliases, `astro check` and build in CI
- Deploy to a free static host

## Notes

- The site is the only part on the Astro stack. WTF POS stays Angular and .NET.
- No brand name or domain yet, so keep the name in one config value.

## Progress

- Done: Astro, Tailwind v4, path aliases, base layout, header with mobile menu, footer, `.gitignore`
- Left: CI for `astro check` and build, free static host, brand name and domain (placeholder `Studio Name` lives in `src/config/site.ts`)
