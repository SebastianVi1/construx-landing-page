export const problems = [
	{
		problem: 'Project information lives in scattered files and chats.',
		solution: 'One workspace holds every project, site, and document.',
	},
	{
		problem: 'It is hard to know who is assigned where.',
		solution: 'Assign workers to projects with clear roles and responsibilities.',
	},
	{
		problem: 'Pending tasks and owners are unclear.',
		solution: 'Every task has an owner, a priority, and a deadline.',
	},
	{
		problem: 'Plans and daily activities are disconnected.',
		solution: 'Link activities to the exact area of a construction plan.',
	},
	{
		problem: 'Managing several sites multiplies the complexity.',
		solution: 'See all your sites side by side, from the same place.',
	},
];

export type FeatureVisual = 'tasks' | 'plan' | 'gantt' | 'workforce' | 'finance' | 'none';

export const features: {
	id: string;
	title: string;
	points: string[];
	visual: FeatureVisual;
	span: string;
}[] = [
	{
		id: 'project-management',
		title: 'Project Management',
		points: ['Centralized project information', 'Project progress visibility', 'Organization of multiple construction sites'],
		visual: 'none',
		span: 'lg:col-span-2',
	},
	{
		id: 'task-management',
		title: 'Task Management',
		points: ['Task assignment', 'Priorities and deadlines', 'Progress tracking'],
		visual: 'tasks',
		span: 'lg:col-span-4',
	},
	{
		id: 'construction-plans',
		title: 'Construction Plans',
		points: ['Visual representation of construction areas', 'Association between plans, locations, and activities'],
		visual: 'plan',
		span: 'lg:col-span-3',
	},
	{
		id: 'scheduling',
		title: 'Scheduling',
		points: ['Project timelines', 'Gantt chart visualization', 'Task dependencies and deadlines'],
		visual: 'gantt',
		span: 'lg:col-span-3',
	},
	{
		id: 'workforce-management',
		title: 'Workforce Management',
		points: ['Employee organization', 'Project assignments', 'Roles and responsibilities'],
		visual: 'workforce',
		span: 'lg:col-span-2',
	},
	{
		id: 'financial-management',
		title: 'Financial Management',
		points: ['Expense and purchase organization', 'Project-related financial visibility'],
		visual: 'finance',
		span: 'lg:col-span-2',
	},
	{
		id: 'crm',
		title: 'CRM',
		points: ['Customer and business relationship organization'],
		visual: 'none',
		span: 'lg:col-span-2',
	},
];

export const steps = [
	{ title: 'Create Your Organization', text: "Establish your company's workspace." },
	{ title: 'Organize Your Projects', text: 'Create and manage construction projects.' },
	{ title: 'Coordinate Your Team', text: 'Organize workers and assign responsibilities.' },
	{ title: 'Track Activities', text: 'Monitor tasks, schedules, and progress.' },
	{ title: 'Improve Visibility', text: 'Review relevant operational information in one place.' },
];

export const benefits = [
	'Improve visibility across projects',
	'Reduce dependence on fragmented tools',
	'Improve workforce coordination',
	'Make task responsibilities clearer',
	'Centralize operational information',
	'Support more consistent project monitoring',
	'Build a foundation for managing multiple construction sites',
];
