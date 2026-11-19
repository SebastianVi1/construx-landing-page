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

// Each locale has its own render of the promo (construx-promo/ and construx-promo/en/).
export function guideVideo(locale: Locale): { src: string; poster: string } {
	return { src: `/video/construx-${locale}.mp4`, poster: `/video/construx-${locale}.jpg` };
}
