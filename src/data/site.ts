import type { Locale } from '../i18n';
import { pagePath, sectionHref, type Page } from '../i18n/paths';

export const site = {
	name: 'Construx',
	// Set to a form service URL (Formspree, Tally, ...) to enable the contact form.
	// While empty, the form renders disabled and states that it is not connected.
	formEndpoint: '',
	// Optional analytics script URL, injected only when set.
	analyticsSrc: '',
	year: new Date().getFullYear(),
};

export const navItems = [
	{ key: 'product', href: '#product' },
	{ key: 'features', href: '#features' },
	{ key: 'benefits', href: '#benefits' },
	{ key: 'about', href: '#how-it-works' },
	{ key: 'faq', href: '#faq' },
	{ key: 'contact', href: '#contact' },
] as const;

export const ctaHref = { primary: '#contact', secondary: '#features' };

type NavKey = (typeof navItems)[number]['key'] | 'guide';

/** Header and footer links for the current page; the guide link sits after "How it works". */
export function navLinks(locale: Locale, page: Page): { key: NavKey; href: string; current: boolean }[] {
	const links: { key: NavKey; href: string; current: boolean }[] = navItems.map((item) => ({
		key: item.key,
		href: sectionHref(locale, page, item.href),
		current: false,
	}));
	const at = links.findIndex((l) => l.key === 'about') + 1;
	links.splice(at, 0, { key: 'guide', href: pagePath(locale, 'guide'), current: page === 'guide' });
	return links;
}
