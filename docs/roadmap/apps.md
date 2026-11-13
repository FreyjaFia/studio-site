# Apps

Status: in progress

## Goal

A catalog of the apps for sale. App #1 is WTF POS.

## Scope

- Card per app with name, one-line pitch and link to its product page
- Data kept in a content collection so adding an app needs no layout change

## Progress

- Done: `/apps` list built from `src/data/apps.ts`.
- Scales to many apps: category filter chips appear once there is more than one category, the header menu and footer list apps from data, each app has its own accent colour, and every app page is built from `src/pages/apps/[slug].astro`.
