import { localeHome, type Locale } from './index';

export type Page = 'home' | 'guide' | 'whatsapp' | 'mcp';

// Trailing slash: the built pages are directories, which is how nginx and the sitemap serve them.
const pagePaths: Record<Exclude<Page, 'home'>, Record<Locale, string>> = {
	guide: { es: '/guia/', en: '/en/guide/' },
	whatsapp: { es: '/whatsapp/', en: '/en/whatsapp/' },
	mcp: { es: '/mcp/', en: '/en/mcp/' },
};

/** Path of a page in a locale. */
export function pagePath(locale: Locale, page: Page): string {
	return page === 'home' ? localeHome(locale) : pagePaths[page][locale];
}

/** Which page a request path belongs to. */
export function pageFromPath(pathname: string): Page {
	const path = pathname.replace(/\/*$/, '/');
	const match = (Object.keys(pagePaths) as Exclude<Page, 'home'>[]).find((page) =>
		Object.values(pagePaths[page]).includes(path),
	);
	return match ?? 'home';
}

/** Link to a home-page section: an in-page anchor on home, the locale home plus the anchor elsewhere. */
export function sectionHref(locale: Locale, page: Page, hash: string): string {
	return page === 'home' ? hash : localeHome(locale) + hash;
}
