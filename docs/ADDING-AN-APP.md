# Adding a new app

The site is built for many apps. Adding one is mostly data.

1. **Add the app** to `src/data/apps.ts`: `slug`, `name`, `category`, `status` (`live` or `soon`), `accent` (a hex
   colour for the app's own look), `tagline`, `pitch`, `features`, `screenshots` (labels until real images exist) and
   `demoUrl` once a demo exists.
2. **Add plans** to `src/data/plans.ts` with `appSlug` set to the app's slug and unique ids such as `myapp-basic`.
3. **Done for the basics.** The app now shows up on Home (featured), the Apps page (and its category filter), the
   header menu, the footer, Pricing (its own section) and the Contact plan list. Its page is built at `/apps/<slug>`
   from `src/pages/apps/[slug].astro`, themed with its `accent`.
4. **Optional, for its own look:** add a hero visual and an extras block under `src/components/<slug>/` and register
   them by slug in the `heroVisuals` and `extraBlocks` maps in `src/pages/apps/[slug].astro`. WTF POS does this with
   `pos-mock.astro` and `wtf-bento.astro`. Use `text-(--accent)`, `bg-(--accent)` and similar so the app's accent
   colour applies.
5. Run `npx astro check` and `npm run build`, then check the new page at phone, tablet and desktop widths.
6. Update `docs/roadmap/` and the status in `docs/ROADMAP.md`.
