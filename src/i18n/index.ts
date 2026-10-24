import { en, type Dict } from './en';
import { es } from './es';

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; name: string; hreflang: string }> = {
	en: { label: 'EN', name: 'English', hreflang: 'en' },
	es: { label: 'ES', name: 'Español', hreflang: 'es' },
};

const dictionaries: Record<Locale, Dict> = { en, es };

export function getLocale(value: string | undefined): Locale {
	return locales.find((l) => l === value) ?? defaultLocale;
}

export function useTranslations(value: string | undefined): Dict {
	return dictionaries[getLocale(value)];
}

/** Home path for a locale: `/` for the default locale, `/es/` for the others. */
export function localeHome(locale: Locale): string {
	return locale === defaultLocale ? '/' : `/${locale}/`;
}
