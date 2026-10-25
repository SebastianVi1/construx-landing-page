import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

// Scroll-state UI that stays useful with reduced motion: progress bar, header, active nav link.
const progress = document.getElementById('scroll-progress');
const siteHeader = document.querySelector('header');
const updateScrollState = () => {
	const max = document.documentElement.scrollHeight - window.innerHeight;
	if (progress) progress.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
	siteHeader?.setAttribute('data-scrolled', String(window.scrollY > 24));
};
updateScrollState();
window.addEventListener('scroll', updateScrollState, { passive: true });

const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('nav .nav-link'));
const sections = navLinks
	.map((a) => document.querySelector<HTMLElement>(a.getAttribute('href') ?? ''))
	.filter((s): s is HTMLElement => !!s);
const spy = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			navLinks.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === `#${entry.target.id}`)));
		});
	},
	{ rootMargin: '-40% 0px -55% 0px' },
);
sections.forEach((s) => spy.observe(s));

// Fine-pointer only: cursor-lit cards and hero parallax.
mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
	const cards = gsap.utils.toArray<HTMLElement>('.spotlight');
	const onMove = (e: PointerEvent) => {
		const el = e.currentTarget as HTMLElement;
		const r = el.getBoundingClientRect();
		el.style.setProperty('--mx', `${e.clientX - r.left}px`);
		el.style.setProperty('--my', `${e.clientY - r.top}px`);
	};
	cards.forEach((c) => c.addEventListener('pointermove', onMove));

	// Hero dashboard drifts against the cursor for depth; the grid shifts the opposite way.
	const heroSection = document.getElementById('top');
	const visual = document.querySelector<HTMLElement>('[data-hero-visual]');
	if (!heroSection || !visual) return () => cards.forEach((c) => c.removeEventListener('pointermove', onMove));
	const moveX = gsap.quickTo(visual, 'x', { duration: 0.8, ease: 'power3.out' });
	const moveY = gsap.quickTo(visual, 'y', { duration: 0.8, ease: 'power3.out' });
	const gridY = gsap.quickTo(heroSection, 'backgroundPositionY', { duration: 1.2, ease: 'power3.out' });
	const gridX = gsap.quickTo(heroSection, 'backgroundPositionX', { duration: 1.2, ease: 'power3.out' });
	const onHero = (e: PointerEvent) => {
		const r = heroSection.getBoundingClientRect();
		const nx = (e.clientX - r.left) / r.width - 0.5;
		const ny = (e.clientY - r.top) / r.height - 0.5;
		moveX(nx * -14);
		moveY(ny * -10);
		gridX(nx * 18);
		gridY(ny * 18);
	};
	heroSection.addEventListener('pointermove', onHero);

	return () => {
		cards.forEach((c) => c.removeEventListener('pointermove', onMove));
		heroSection.removeEventListener('pointermove', onHero);
	};
});

mm.add('(prefers-reduced-motion: no-preference)', () => {
	// Hero: headline lines rise in, then supporting content and the dashboard.
	const hero = gsap.timeline({ defaults: { ease: 'power3.out' } });
	hero
		.from('[data-hero-in]:first-child', { opacity: 0, y: 12, duration: 0.5 })
		.from('[data-hero-line]', { opacity: 0, y: 48, duration: 0.8, stagger: 0.12 }, '<0.1')
		.from('[data-hero-in]:not(:first-child)', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.5')
		.from('[data-hero-visual]', { opacity: 0, y: 40, duration: 0.9 }, '-=0.8')
		.from('[data-hero-visual] [data-progress]', { scaleX: 0, duration: 0.9, stagger: 0.12 }, '-=0.4');

	// Dashboard numbers count up alongside the bars. Final text is already in the DOM for no-JS and reduced motion.
	gsap.utils.toArray<HTMLElement>('[data-hero-visual] [data-count]').forEach((el) => {
		const target = Number(el.dataset.count);
		const state = { value: 0 };
		el.textContent = '0';
		gsap.to(state, {
			value: target,
			duration: 1.4,
			delay: 1.1,
			ease: 'power2.out',
			onUpdate: () => {
				el.textContent = String(Math.round(state.value));
			},
			onComplete: () => {
				el.textContent = String(target);
			},
		});
	});

	// Section headings: each word rises out of a clip mask. Text stays in one heading for assistive tech.
	gsap.utils.toArray<HTMLElement>('main h2, section h2').forEach((h2) => {
		if (h2.dataset.split) return;
		h2.dataset.split = 'true';
		const words = (h2.textContent ?? '').trim().split(/\s+/);
		h2.textContent = '';
		const inners = words.map((word, i) => {
			const mask = document.createElement('span');
			mask.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:0.12em;margin-bottom:-0.12em';
			const inner = document.createElement('span');
			inner.style.display = 'inline-block';
			inner.textContent = word;
			mask.append(inner);
			h2.append(mask, i < words.length - 1 ? ' ' : '');
			return inner;
		});
		gsap.from(inners, {
			yPercent: 110,
			duration: 0.8,
			stagger: 0.05,
			ease: 'power3.out',
			scrollTrigger: { trigger: h2, start: 'top 88%', once: true },
		});
	});

	// Generic reveal for any block marked data-reveal.
	gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
		gsap.from(el, {
			opacity: 0,
			y: 28,
			duration: 0.7,
			ease: 'power2.out',
			scrollTrigger: { trigger: el, start: 'top 88%', once: true },
		});
	});

	// Mockup internals build when their card scrolls into view.
	gsap.utils.toArray<HTMLElement>('figure').forEach((figure) => {
		if (figure.closest('[data-hero-visual]')) return;
		const trigger = { trigger: figure, start: 'top 80%', once: true };

		const bars = figure.querySelectorAll('[data-gantt-bar]');
		if (bars.length) {
			gsap.from(bars, { scaleX: 0, transformOrigin: 'left center', duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: trigger });
		}

		const progress = figure.querySelectorAll('[data-progress]');
		if (progress.length) {
			gsap.from(progress, { scaleX: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: trigger });
		}

		const markers = figure.querySelectorAll('[data-plan-marker]');
		if (markers.length) {
			gsap.from(markers, { scale: 0, duration: 0.5, stagger: 0.18, ease: 'back.out(2)', delay: 0.6, scrollTrigger: trigger });
		}

		// Blueprint walls draw themselves. Dashed guides are left untouched.
		figure.querySelectorAll<SVGGeometryElement>('[data-draw] > *').forEach((shape) => {
			if (shape.hasAttribute('stroke-dasharray')) return;
			const length = shape.getTotalLength();
			gsap.fromTo(
				shape,
				{ strokeDasharray: length, strokeDashoffset: length },
				{ strokeDashoffset: 0, duration: 1.4, ease: 'power1.inOut', scrollTrigger: trigger },
			);
		});
	});

	// The "how it works" connector grows as the section scrolls past.
	const line = document.querySelector('[data-steps-line]');
	if (line) {
		gsap.from(line, {
			scaleX: 0,
			ease: 'none',
			scrollTrigger: { trigger: line, start: 'top 85%', end: 'top 40%', scrub: true },
		});
	}
});
