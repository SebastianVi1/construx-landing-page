# Construx landing page
Objective: static responsive marketing landing page (Astro 7 + Tailwind v4 + GSAP), PRD at .claude/prd.md
Branch: feat/landing-page | Delivery: ask-on-risk | Test runner: none (astro build + astro check + Lighthouse)

## Specs
- S1: Frontend-only. No backend, auth, database, billing, live data (PRD 5.2).
- S2: Header with wordmark, nav links (Product, Features, Benefits, About, Contact), primary CTA, responsive mobile nav.
- S3: Hero with headline "Take Control of Every Construction Project.", supporting text "Manage projects, coordinate your workforce, track activities, and organize construction operations in one centralized platform.", primary CTA "Get Early Access", secondary CTA "Explore Features", product visual. Value visible without scrolling.
- S4: Problem/solution section focused on customer outcomes.
- S5: Features section: Project Management, Workforce Management, Task Management, Construction Plans, Scheduling, Financial Management, CRM, each with concise text and visual when useful.
- S6: How it works, 5 steps: Create Your Organization, Organize Your Projects, Coordinate Your Team, Track Activities, Improve Visibility.
- S7: Product mockups consistent with each other; fictional data clearly marked as demo content; legible on small screens.
- S8: Benefits section; no unsupported quantitative claims.
- S9: CTAs must not lead to a nonexistent registration or auth system. Decision (user, "3"): in-page contact section with a form handled by a service later; form is UI-only now and must not fake a submission.
- S10: Footer with branding, navigation, copyright. No placeholder legal links presented as real documents.
- S11: Scroll-based animation with GSAP, creative and unique, lightweight, respects prefers-reduced-motion.
- S12: Semantic HTML, keyboard navigation, alt text, contrast, accessible labels.
- S13: SEO: title, meta description, logical headings, social-sharing metadata. Analytics readiness (optional script slot).
- S14: Performance: minimal JS, optimized assets, minimal layout shift, responsive at desktop/tablet/mobile.

## Tasks
- T1 (S12,S13,S14) Foundation: deps, Layout, global tokens, SEO meta | inline | pending
- T2 (S2,S3,S9,S10) UI primitives, Header, Footer, Contact section | inline | pending
- T3 (S3,S4,S5,S6,S8) Content sections driven by src/data | inline | pending
- T4 (S7) Mockups (SVG/HTML) | inline | pending
- T5 (S11) GSAP scroll animations + reduced motion | inline | pending
- T6 (S12,S13,S14) QA: build, a11y, Lighthouse, breakpoints, sitemap/robots/OG | inline | pending

## Log
L1 (user): "i need to create a landing page for my construction app @.claude/prd.md i explain everything."
L2 (user, 2026-10-24): CTA destination choice "3" (in-page contact section, form handled by a service later); confirmed Tailwind v4 with "yes".
