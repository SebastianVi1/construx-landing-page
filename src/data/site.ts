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

type NavKey = (typeof navItems)[number]['key'] | 'whatsapp' | 'guide' | 'mcp';

/**
 * Header and footer links for the current page. The page links (WhatsApp, guide, MCP) go last so
 * the scroll-spy highlight moves through the section links without skipping over them.
 */
export function navLinks(locale: Locale, page: Page): { key: NavKey; href: string; current: boolean }[] {
	const links: { key: NavKey; href: string; current: boolean }[] = navItems.map((item) => ({
		key: item.key,
		href: sectionHref(locale, page, item.href),
		current: false,
	}));
	links.push(
		{ key: 'whatsapp', href: pagePath(locale, 'whatsapp'), current: page === 'whatsapp' },
		{ key: 'guide', href: pagePath(locale, 'guide'), current: page === 'guide' },
		{ key: 'mcp', href: pagePath(locale, 'mcp'), current: page === 'mcp' },
	);
	return links;
}
