export type FeatureVisual = 'tasks' | 'plan' | 'gantt' | 'workforce' | 'finance' | 'none';

// Structure only. Titles and bullet points live in src/i18n/<locale>.ts under features.items[id].
export const features: { id: string; visual: FeatureVisual; span: string }[] = [
	{ id: 'project-management', visual: 'none', span: 'lg:col-span-2' },
	{ id: 'task-management', visual: 'tasks', span: 'lg:col-span-4' },
	{ id: 'construction-plans', visual: 'none', span: 'lg:col-span-3' },
	{ id: 'scheduling', visual: 'gantt', span: 'lg:col-span-3' },
	{ id: 'finance', visual: 'finance', span: 'lg:col-span-3' },
	{ id: 'workforce-management', visual: 'workforce', span: 'lg:col-span-3' },
	{ id: 'materials-catalog', visual: 'none', span: 'lg:col-span-3' },
];
