# Studio site

Marketing site for the apps we sell. App #1 is WTF POS (Wake. Taste. Focus), shown with an embedded live demo. Built with Astro, TypeScript and Tailwind CSS. No online payment: pricing plans end in a Contact button.

The feature roadmap is an index: read `docs/ROADMAP.md`, then open only the feature file under `docs/roadmap/` you need.
Update that feature file (and the status in `docs/ROADMAP.md`) when a feature's status or design changes.

Adding an app: see `docs/ADDING-AN-APP.md`. The site is studio-level, so keep Home, nav and shared
components free of app-specific copy. App-specific looks live in `src/components/<slug>/`.

## Commits

Read `docs/COMMIT-GUIDELINES.md` before writing a message. In short: plain capitalized imperative subject of 50
characters or less, no period, no `feat:` prefixes, a blank line, then a body wrapped at 72 characters explaining what
and why. One concern per commit. Version bumps get their own commit. Write multi-line messages with `git commit -F`,
never literal `\n`. Work on a feature branch and open a PR to `main`.

## Code rules

- No summary or JSDoc comments. Only short inline comments that explain why.
- Always use braces for `if`, `else`, `for`, `while`.
- Explicit types and return types. Explicit access modifiers on class members.
- Use path aliases (`@components/*`, `@layouts/*`, and so on) instead of deep relative imports.
- Style with Tailwind utility classes. Component-scoped CSS only when utilities cannot do it. Prefer standard scale
  values over arbitrary ones (`z-100`, not `z-[100]`), and Tailwind v4 syntax (`md:translate-y-0!`).
- Keep page copy in content files, not hard-coded in components.
- Hyphenated file names.

## Checking your work

- After every change run `npx astro check` and `npm run build`. Fix everything before reporting done.
- To check layout and behavior, run the site in a real browser with the Playwright skill instead of describing what
  the page should look like. Check phone width too.
- Save reusable Playwright scripts outside the repo unless asked to keep them.
- Use throwaway data only. Never put credentials, API keys or tokens in chat or in the repo. Use environment variables.

## Related

The product behind the demo lives in the WTF repo. Keep the demo embed pointed at the separate demo deployment, never
at a real shop's data.
