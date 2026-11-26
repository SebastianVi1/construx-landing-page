import { localeHome, type Locale } from './index';

export type Page = 'home' | 'guide' | 'whatsapp';

// Trailing slash: the built pages are directories, which is how nginx and the sitemap serve them.
const guidePaths: Record<Locale, string> = { es: '/guia/', en: '/en/guide/' };
const whatsappPaths: Record<Locale, string> = { es: '/whatsapp/', en: '/en/whatsapp/' };

/** Path of a page in a locale. */
export function pagePath(locale: Locale, page: Page): string {
	if (page === 'guide') return guidePaths[locale];
	if (page === 'whatsapp') return whatsappPaths[locale];
	return localeHome(locale);
}

/** Which page a request path belongs to. */
export function pageFromPath(pathname: string): Page {
	const path = pathname.replace(/\/*$/, '/');
	if (Object.values(guidePaths).includes(path)) return 'guide';
	if (Object.values(whatsappPaths).includes(path)) return 'whatsapp';
	return 'home';
}

/** Link to a home-page section: an in-page anchor on home, the locale home plus the anchor elsewhere. */
export function sectionHref(locale: Locale, page: Page, hash: string): string {
	return page === 'home' ? hash : localeHome(locale) + hash;
}
