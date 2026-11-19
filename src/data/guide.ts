import type { Locale } from '../i18n';

export type ChapterId = 'start' | 'company' | 'sites' | 'tasks' | 'plans' | 'attendance' | 'finance' | 'docs' | 'soon';
export type ChapterVisual = 'dashboard' | 'tasks' | 'plan' | 'workforce' | 'finance' | 'none';

// Structure only. Copy lives in src/i18n/<locale>.ts under guide.chapters[id].
export const chapters: { id: ChapterId; visual: ChapterVisual }[] = [
	{ id: 'start', visual: 'none' },
	{ id: 'company', visual: 'workforce' },
	{ id: 'sites', visual: 'dashboard' },
	{ id: 'tasks', visual: 'tasks' },
	{ id: 'plans', visual: 'plan' },
	{ id: 'attendance', visual: 'none' },
	{ id: 'finance', visual: 'finance' },
	{ id: 'docs', visual: 'none' },
	{ id: 'soon', visual: 'none' },
];

// Which render each locale plays; English falls back to the Spanish cut until it has its own.
const videoLocale: Record<Locale, Locale> = { es: 'es', en: 'es' };

export function guideVideo(locale: Locale): { src: string; poster: string } {
	const l = videoLocale[locale];
	return { src: `/video/construx-${l}.mp4`, poster: `/video/construx-${l}.jpg` };
}
