export const en = {
	meta: {
		title: 'Construx | Construction project management in one platform',
		description:
			'Construx helps construction companies manage projects, coordinate their workforce, track activities, and organize operations across every site.',
		ogLocale: 'en_US',
	},
	skip: 'Skip to content',
	nav: {
		product: 'Product',
		features: 'Features',
		benefits: 'Benefits',
		about: 'About',
		contact: 'Contact',
	},
	cta: { primary: 'Get Early Access', secondary: 'Explore Features' },
	header: {
		home: 'Construx home',
		primaryNav: 'Primary',
		mobileNav: 'Mobile',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		language: 'Language',
	},
	hero: {
		eyebrow: 'Construction management platform',
		line1: 'Take Control of',
		line2: 'Every Construction',
		line3: 'Project.',
		text: 'Manage projects, coordinate your workforce, track activities, and organize construction operations in one centralized platform.',
		note: 'Construx is built for teams across Windows, macOS, iOS, and Android. Platform availability is still being decided.',
	},
	problem: {
		eyebrow: 'The problem',
		title: 'Construction runs on coordination. Most tools break it apart.',
		description:
			'Construx connects the people, plans, and activities of each project so everyone works from the same picture.',
		today: 'Today',
		withConstrux: 'With Construx',
		items: [
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
		],
	},
	features: {
		eyebrow: 'Features',
		title: 'Everything a construction team needs to stay aligned.',
		description: 'Product previews below use demo data to show the intended experience.',
		items: {
			'project-management': {
				title: 'Project Management',
				points: ['Centralized project information', 'Project progress visibility', 'Organization of multiple construction sites'],
			},
			'task-management': {
				title: 'Task Management',
				points: ['Task assignment', 'Priorities and deadlines', 'Progress tracking'],
			},
			'construction-plans': {
				title: 'Construction Plans',
				points: ['Visual representation of construction areas', 'Association between plans, locations, and activities'],
			},
			scheduling: {
				title: 'Scheduling',
				points: ['Project timelines', 'Gantt chart visualization', 'Task dependencies and deadlines'],
			},
			'workforce-management': {
				title: 'Workforce Management',
				points: ['Employee organization', 'Project assignments', 'Roles and responsibilities'],
			},
			'financial-management': {
				title: 'Financial Management',
				points: ['Expense and purchase organization', 'Project-related financial visibility'],
			},
			crm: {
				title: 'CRM',
				points: ['Customer and business relationship organization'],
			},
		} as Record<string, { title: string; points: string[] }>,
	},
	how: {
		eyebrow: 'How it works',
		title: 'From company workspace to full site visibility in five steps.',
		steps: [
			{ title: 'Create Your Organization', text: "Establish your company's workspace." },
			{ title: 'Organize Your Projects', text: 'Create and manage construction projects.' },
			{ title: 'Coordinate Your Team', text: 'Organize workers and assign responsibilities.' },
			{ title: 'Track Activities', text: 'Monitor tasks, schedules, and progress.' },
			{ title: 'Improve Visibility', text: 'Review relevant operational information in one place.' },
		],
	},
	benefits: {
		eyebrow: 'Benefits',
		title: 'Clearer sites. Clearer responsibilities.',
		description: 'What changes when operational information lives in one place.',
		items: [
			'Improve visibility across projects',
			'Reduce dependence on fragmented tools',
			'Improve workforce coordination',
			'Make task responsibilities clearer',
			'Centralize operational information',
			'Support more consistent project monitoring',
			'Build a foundation for managing multiple construction sites',
		],
	},
	contact: {
		eyebrow: 'Early access',
		title: 'Be first on site when Construx opens.',
		description: 'Tell us about your company and the projects you run. We will reach out as early access opens.',
		legend: 'Early access request',
		name: 'Full name',
		email: 'Work email',
		company: 'Company',
		message: 'What would you like to manage with Construx?',
		submit: 'Get Early Access',
		notConnected: 'Sign-ups are not open yet. This form is not connected to a service.',
	},
	footer: {
		blurb: 'One platform to coordinate projects, workforce, and operations across every construction site.',
		nav: 'Footer',
		rights: 'All rights reserved.',
	},
	mockup: {
		demo: 'Demo data',
		dashboard: {
			title: 'Overview · Acme Builders (sample)',
			stats: ['Active sites', 'Crew on site', 'Open tasks'],
			sites: ['Block A', 'Phase 2', 'Warehouse'],
			complete: 'complete',
		},
		gantt: {
			title: 'Schedule · Harbor Tower (sample)',
			week: 'W',
			rows: ['Site preparation', 'Foundations', 'Structure, levels 1-3', 'MEP rough-in', 'Facade and finishes'],
			legend: 'Orange shows completed work. Dependencies and deadlines stay in one timeline.',
		},
		tasks: {
			title: 'Tasks · Harbor Tower (sample)',
			columns: ['To do', 'In progress', 'Done'],
			items: ['Order rebar, level 2', 'Pour slab, grid C', 'Inspect scaffolding', 'Survey boundary'],
			priority: { high: 'High', med: 'Med', low: 'Low' },
		},
		plan: {
			title: 'Plan · Level 2 (sample)',
			alt: 'Floor plan of level 2 with four numbered activity markers: formwork, rebar check, slab pour and MEP sleeves.',
			zones: ['Zone A', 'Zone B', 'Zone C'],
			markers: ['Formwork', 'Rebar check', 'Slab pour', 'MEP sleeves'],
		},
		team: {
			title: 'Team (sample)',
			roles: ['Site engineer', 'Foreman', 'Safety officer', 'Surveyor'],
		},
		finance: {
			title: 'Expenses · Harbor Tower (sample)',
			labels: ['Materials', 'Labor', 'Equipment', 'Permits'],
			ofBudget: 'of budget',
		},
	},
};

export type Dict = typeof en;
