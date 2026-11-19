# User guide page — design

Branch: `feat/user-guide` · Date: 2026-11-19

## Intent

Give visitors a general, friendly "user manual" of what Construx does today, so a construction company owner can picture their day in the app before requesting access. The 59 s promo (`construx-promo/renders/construx-comercial-es.mp4`) is the centerpiece. Source of truth for what exists: `architecture-vault/02-funcionalidades/` and `00-vision/Producto.md`.

## Goals

- New page: `/guia` (ES, default locale) and `/en/guide` (EN), linked from header, mobile menu and footer.
- Promo video at the top, light enough for the web, in both languages.
- Chapters that walk the main flow: sign up → company and team → sites → phases and tasks → plans and zones → attendance → finance → documents and reports → coming soon.
- Every string bilingual (EN/ES) through `src/i18n/{en,es}.ts`.

## Non-goals

- Rewriting the home sections (Features/Modules copy is outdated, e.g. the price catalog is described as finished; that is a separate follow-up).
- Screenshots of the real dashboard, a searchable help center, or per-screen documentation.

## Anti-goals

- Claiming unfinished features as done (price catalog is being rebuilt; Excel is local-only). They go under "Próximamente".
- Invented numbers or screens presented as real; reused mockups keep their "ejemplo / Datos demo" labels.
- A heavy page: the video must not load before the visitor asks for it.

## Approaches considered

- **A) Separate page (picked by the user).** Room for a real manual without burying the contact form on the home page.
- B) Section inside the home page: shorter, but it would duplicate Features/Modules and push Contact further down.

## Design

**Routing.** `src/pages/guia.astro` and `src/pages/en/guide.astro` render a shared `GuidePage.astro` (same pattern as `LandingPage.astro`). Locale paths come from a helper next to `localeHome` in `src/i18n/index.ts`; `LanguageSwitcher` must switch between `/guia` and `/en/guide` on this page.

**Navigation.** Add a "Guía / Guide" item. `navItems` hrefs are home anchors (`#features`); on the guide page they must resolve to the home page (`/#features`, `/en/#features`), so the header builds hrefs from the locale home. The primary CTA points to the home contact anchor.

**Page layout (top to bottom).**
1. Intro: eyebrow, title, one paragraph, the video (poster image, `controls`, `preload="none"`, `playsinline`), duration note.
2. Table of contents: chapter list; sticky side column on `lg`, plain list on mobile.
3. Chapters, each with: number, title, one-line "what it is", 3–4 numbered steps, a "who can do it" role note, optional tip; existing mockups where they fit (`TaskBoardMockup`, `GanttMockup`, `PlanMockup`, `WorkforceMockup`, `FinanceMockup`).
   1. Get started: register, verify email or use Google, profile, onboarding; create a company (you become Owner) or join through an invitation.
   2. Your company and team: roles, invite members (optionally straight to a site), crews, equipment.
   3. Sites: create a site with address, dates and budget; give staff access.
   4. Phases and tasks: phases, tasks with team and dates, To do → In progress → Done, My tasks, Gantt.
   5. Plans and zones (the differentiator): plan library and folders, floor plan, draw zones, assign people and crews to zones, pins for issues with photos.
   6. Attendance: check-in by zone, roll call; it feeds daily labor cost.
   7. Finance: site and task budgets, expenses, company summary and monthly spend.
   8. Documents and reports: folders per site, site PDF report.
   9. Coming soon: price catalog import, shared Excel workbooks.
4. Closing CTA: request access (home contact form).

**Style.** Reuse the existing tokens and components (`SectionHeading`, `Button`, `bg-blueprint-grid`, `data-reveal`, `safety-*` accents). No new dependencies.

**Video.**
- Compress the ES render to a web MP4 (H.264, `+faststart`, target under ~8 MB) plus a JPG poster from the end card, into `public/video/`.
- English version: translate the on-screen copy of the HyperFrames project (`construx-promo/`, no voiceover) into a parallel EN composition, render, compress the same way. The ES project stays untouched.

**SEO.** Own `<title>`/description per locale, `hreflang` alternates for both guide URLs.

## Builder's calls (left open)

- Exact chapter copy, role notes and tips, as long as they match the vault.
- Which chapters get a mockup and the chapter icon/visual treatment.
- Poster frame choice and exact encoder settings.

## Verification

`bun run build` passes; both URLs render; language switch maps guide ↔ guide; header links from the guide page land on home sections; video loads only on play; no horizontal scroll at 375 px.
