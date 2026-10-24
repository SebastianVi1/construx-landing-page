import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
	// Hero: headline lines rise in, then supporting content and the dashboard.
	const hero = gsap.timeline({ defaults: { ease: 'power3.out' } });
	hero
		.from('[data-hero-in]:first-child', { opacity: 0, y: 12, duration: 0.5 })
		.from('[data-hero-line]', { opacity: 0, y: 48, duration: 0.8, stagger: 0.12 }, '<0.1')
		.from('[data-hero-in]:not(:first-child)', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1 }, '-=0.5')
		.from('[data-hero-visual]', { opacity: 0, y: 40, duration: 0.9 }, '-=0.8')
		.from('[data-hero-visual] [data-progress]', { scaleX: 0, duration: 0.9, stagger: 0.12 }, '-=0.4');

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
