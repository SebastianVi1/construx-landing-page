# User Guide Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/guia` and `/en/guide`: a bilingual general user manual of Construx with the promo video (ES and a new EN render) at the top.

**Architecture:** One shared `GuidePage.astro` rendered by two route files, like `LandingPage.astro`. Page-aware path helpers in `src/i18n/paths.ts` drive canonical/hreflang, the language switcher and nav links (home anchors become `/#x` off the home page). Copy lives under a new `guide` key in `src/i18n/{en,es}.ts`. Videos are static files in `public/video/`.

**Tech Stack:** Astro 7, Tailwind 4, GSAP (existing), Bun (`bun test`), ffmpeg, HyperFrames 0.9.67 (`construx-promo/`).

**Spec:** `odd/tasks/user-guide.md`

## Global Constraints

- Every user-facing string in both `en.ts` and `es.ts` (`Dict = typeof en`, so ES must type-check against EN).
- Routes: ES `/guia`, EN `/en/guide`. Default locale `es`, `prefixDefaultLocale: false`.
- No new npm dependencies. Reuse `SectionHeading`, `Button`, `MockupFrame` mockups, `data-reveal`, `spotlight`, `bg-blueprint-grid`, `safety-*`/`ink-*`/`paper-*` tokens.
- Unfinished features (price catalog, shared Excel) only under "Coming soon / Próximamente".
- Video: `preload="none"`, `poster`, `controls`, `playsinline`; each MP4 under ~8 MB.
- Conventional Commits (`feat(guide): …`), no AI attribution. Commit inside `construx-landing-page/` only.
- Verification for every task: `bun run build` exits 0.

## Review Focus

- Header/footer links on the guide page must reach home sections (`/#features`, `/en/#features`), not dead in-page anchors → asserted in Task 1 test + Task 4 grep.
- `animations.ts` calls `document.querySelector(href)` on every `nav .nav-link`; an href like `/#features` is an invalid selector and throws, killing all animations on the guide page → Task 2 guard + Task 4 console check.
- Language switch on `/guia` must land on `/en/guide`, not `/en/` → Task 1 test + Task 4 grep.
- 375 px width: TOC, steps and mockups must not cause horizontal scroll → Task 4 browser check.
- Video must not download before play (`preload="none"`), and the page must not break if the video is missing → Task 4 network check.

---

### Task 1: Page-aware path helpers

**Files:**
- Create: `src/i18n/paths.ts`, `src/i18n/paths.test.ts`

**Interfaces:**
- Produces:
  - `type Page = 'home' | 'guide'`
  - `pagePath(locale: Locale, page: Page): string` → home: `localeHome(locale)`; guide: es `/guia`, en `/en/guide`
  - `pageFromPath(pathname: string): Page` → `'guide'` when the path (trailing slash ignored) is `/guia` or `/en/guide`, else `'home'`
  - `sectionHref(locale: Locale, page: Page, hash: string): string` → `hash` when `page === 'home'`, else `localeHome(locale) + hash` (e.g. `/#features`, `/en/#features`)

- [ ] **Step 1: Write the failing test** (`bun:test`)

```ts
expect(pagePath('es', 'guide')).toBe('/guia');
expect(pagePath('en', 'guide')).toBe('/en/guide');
expect(pagePath('en', 'home')).toBe('/en/');
expect(pageFromPath('/guia')).toBe('guide');
expect(pageFromPath('/en/guide/')).toBe('guide');
expect(pageFromPath('/en/')).toBe('home');
expect(sectionHref('es', 'home', '#features')).toBe('#features');
expect(sectionHref('es', 'guide', '#features')).toBe('/#features');
expect(sectionHref('en', 'guide', '#contact')).toBe('/en/#contact');
```

- [ ] **Step 2:** `bun test src/i18n/paths.test.ts` → FAIL (module not found)
- [ ] **Step 3:** Implement `src/i18n/paths.ts` (imports `Locale`, `localeHome` from `./index`)
- [ ] **Step 4:** `bun test src/i18n/paths.test.ts` → PASS
- [ ] **Step 5:** Commit `feat(guide): add page-aware locale path helpers`

### Task 2: Layout, header, footer and switcher become page-aware

**Files:**
- Modify: `src/layouts/Layout.astro`, `src/components/sections/Header.astro`, `src/components/sections/Footer.astro`, `src/components/ui/LanguageSwitcher.astro`, `src/data/site.ts`, `src/scripts/animations.ts`, `src/i18n/en.ts`, `src/i18n/es.ts`

**Interfaces:**
- Consumes: Task 1 helpers.
- Produces: `Layout` props `{ ogImage?: string; title?: string; description?: string }`; page = `pageFromPath(Astro.url.pathname)`. `navItems` keeps `{ key, href }` for home anchors; add `guideNav = { key: 'guide' }` rendered via `pagePath(locale, 'guide')`. Dict adds `nav.guide` (EN `Guide`, ES `Guía`).

- [ ] **Step 1:** Layout: canonical and every `hreflang` alternate (incl. `x-default`) use `pagePath(l, page)`; `<title>`/description/OG fall back to `t.meta` when props are absent; the `FAQPage` node is only included when `page === 'home'`; SoftwareApplication `url` stays the home URL.
- [ ] **Step 2:** LanguageSwitcher links to `pagePath(l, page)`.
- [ ] **Step 3:** Header (desktop + mobile), Footer and the header CTA build hrefs with `sectionHref(locale, page, item.href)`; the logo goes to `pagePath(locale, 'home')` off home (`#top` on home); add the guide link after "How it works" in header, mobile menu and footer, with `aria-current="page"` on the guide page.
- [ ] **Step 4:** `animations.ts` scroll-spy: only map links whose `href` starts with `#`.
- [ ] **Step 5:** `bun run build` → exit 0; `grep -o 'href="[^"]*guia[^"]*"' dist/index.html` shows the nav link.
- [ ] **Step 6:** Commit `feat(guide): make layout and navigation page-aware`

### Task 3: Web video assets (ES)

**Files:**
- Create: `public/video/construx-es.mp4`, `public/video/construx-es.jpg`

- [ ] **Step 1:** Encode from `../construx-promo/renders/construx-comercial-es.mp4`: `ffmpeg -i <src> -vf scale=1280:-2 -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart public/video/construx-es.mp4`. If over 8 MB, raise CRF by 2 and retry.
- [ ] **Step 2:** Poster: `ffmpeg -ss 57 -i <src> -frames:v 1 -vf scale=1280:-2 -q:v 4 public/video/construx-es.jpg` (end card). Look at the JPG; if the frame is mid-transition pick `15.5` (lockup).
- [ ] **Step 3:** `ls -lh public/video` → MP4 < 8 MB, JPG < 200 KB.
- [ ] **Step 4:** Commit `feat(guide): add web-encoded promo video`

### Task 4: Guide page and copy

**Files:**
- Create: `src/components/GuidePage.astro`, `src/components/guide/GuideVideo.astro`, `src/components/guide/GuideChapter.astro`, `src/data/guide.ts`, `src/pages/guia.astro`, `src/pages/en/guide.astro`
- Modify: `src/i18n/en.ts`, `src/i18n/es.ts`

**Interfaces:**
- Consumes: Task 2 `Layout` props, Task 3 video paths (`/video/construx-<locale>.mp4|jpg`; EN falls back to ES files until Task 5 lands: choose via a `videoLocale` const in `src/data/guide.ts`).
- Produces: `src/data/guide.ts` exports `chapters: { id: ChapterId; visual: 'tasks' | 'gantt' | 'plan' | 'workforce' | 'finance' | 'none' }[]` in the order `start, company, sites, tasks, plans, attendance, finance, docs, soon` (structure only, like `data/content.ts`). Dict `guide`: `meta { title, description }`, `eyebrow`, `title`, `intro`, `video { label, note }`, `tocLabel`, `whoLabel`, `tipLabel`, `chapters: Record<ChapterId, { title; summary; steps: string[]; who: string; tip?: string }>`, `cta { title, text }`.

- [ ] **Step 1:** Write the `guide` copy in EN and ES from the spec's chapter list and the vault notes (`architecture-vault/02-funcionalidades/*`, `00-vision/Producto.md`): 3–4 steps per chapter, `who` names roles (Owner, Admin, Finance, Leader, Foreman/Maestro de obra, Crew/Cuadrilla, Worker). `soon` says the price catalog is being rebuilt and Excel workbooks will be shared per company.
- [ ] **Step 2:** `GuideVideo`: `<video controls playsinline preload="none" poster=…>` with `<source type="video/mp4">`, 16:9 box with rounded border, label for `aria-label`, note under it (59 s, no sound needed).
- [ ] **Step 3:** `GuideChapter`: `<section id={id} aria-labelledby>` with mono number (`01`…), title, summary, ordered steps (numbered circles like `HowItWorks`), "who" line, optional tip, optional mockup (reuse the `visuals` map pattern from `Features.astro`); two columns on `lg` when there is a mockup.
- [ ] **Step 4:** `GuidePage`: `Layout` with `t.guide.meta`, `Header`, `<main id="main">` → intro + video (`bg-blueprint-grid`, top padding for the fixed header), then `lg:grid-cols-[14rem_1fr]` with a sticky TOC `<nav>` (hidden list collapses to a plain list above chapters on mobile) and the chapters, then the CTA block with `Button href={sectionHref(locale,'guide','#contact')}`, then `Footer`. Route files only render `<GuidePage />`.
- [ ] **Step 5:** `bun run build` → exit 0; `dist/guia/index.html` and `dist/en/guide/index.html` exist; grep each for `preload="none"`, `hreflang="en"` pointing at `/en/guide`, and `href="/#features"`.
- [ ] **Step 6:** Browser check with `astro dev --background`: open both URLs at 1280 and 375 px; no console errors; `document.documentElement.scrollWidth <= innerWidth` at 375; no request for the MP4 before pressing play; language switch maps guide ↔ guide; screenshot both widths and look at them.
- [ ] **Step 7:** Commit `feat(guide): add bilingual user guide page`

### Task 5: English promo render (HyperFrames)

**Files:**
- Create: `../construx-promo/en/` (copy of `index.html`, `compositions/`, `assets/`, `package.json`, `hyperframes.json`, `meta.json`; not `renders/`). `construx-promo/` is ignored by the root repo; nothing here is committed.
- Create: `public/video/construx-en.mp4`, `public/video/construx-en.jpg`
- Modify: `src/data/guide.ts` (EN uses its own files)

- [ ] **Step 1:** Load the `hyperframes` skill; read `construx-promo/SPEC.md` (copy, timings, QA times).
- [ ] **Step 2:** In `en/`, translate every on-screen Spanish string in `index.html` and `compositions/*.html` (`lang="en"`), keeping timing, ids and split-word/letter structure. App UI labels use the dashboard's EN wording (`construx-dashboard/src/i18n` EN dictionary). Tagline: "Build smarter. Manage everything." / "Every site. Every team. One platform." / "Construction, connected."
- [ ] **Step 3:** `npm run check` in `en/` → no errors. `npx hyperframes snapshot --at 1.5,10.5,15.5,19.5,23,28,31,38,43.8,49.5,57` and look at every frame: no overflowing or clipped titles (EN lines differ in length); fix sizes per scene if needed.
- [ ] **Step 4:** `npx --yes hyperframes@0.9.67 render . -o renders/construx-comercial-en.mp4 --skill hyperframes`; then encode MP4 + poster exactly as Task 3 into `public/video/construx-en.*`.
- [ ] **Step 5:** Switch EN to its own files in `src/data/guide.ts`; `bun run build` → exit 0.
- [ ] **Step 6:** Commit `feat(guide): add English promo video`

### Task 6: Finish

- [ ] **Step 1:** `bun test` and `bun run build` → pass; re-run Task 4 Step 6 checks on the final build (`bun run preview`).
- [ ] **Step 2:** Update `architecture-vault/04-frontend/Landing.md` with the guide route (root repo file, left uncommitted for the user since the root branch holds unrelated work).
- [ ] **Step 3:** Report to the user: branch, commits, video sizes, screenshots; the root submodule pointer is not committed.
