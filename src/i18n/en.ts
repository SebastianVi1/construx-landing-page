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
		about: 'How it works',
		contact: 'Contact',
	},
	cta: { primary: 'Request access', secondary: 'Explore Features' },
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
		text: 'Organize sites into phases, assign tasks and teams, upload plans, follow the Gantt schedule, and track material prices and expenses in one workspace.',
		note: 'An operations workspace for construction companies and their project teams.',
	},
	problem: {
		eyebrow: 'The problem',
		title: 'Construction runs on coordination. Most tools break it apart.',
		description:
			'Bring site information, phase schedules, plan files, and team assignments into one workspace.',
		today: 'Today',
		withConstrux: 'With Construx',
		items: [
			{
				problem: 'Project information lives in scattered files and chats.',
				solution: 'Keep site details, project phases, and uploaded plan files together.',
			},
			{
				problem: 'It is hard to know who is assigned where.',
				solution: 'Assign workers to projects with clear roles and responsibilities.',
			},
			{
				problem: 'Pending tasks and owners are unclear.',
				solution: 'Assign a team, set dates, and track each task from to do to done.',
			},
			{
				problem: 'Project plans are difficult to find when the team needs them.',
				solution: 'Upload and view plan files within the relevant construction site.',
			},
			{
				problem: 'Managing several sites multiplies the complexity.',
				solution: 'See all your sites side by side, from the same place.',
			},
			{
				problem: 'Costs and budgets are tracked separately from the work.',
				solution: 'Record expenses against each site and task, and watch budget versus spending.',
			},
		],
	},
	features: {
		eyebrow: 'Features',
		title: 'Keep your sites, schedules, and teams aligned.',
		description: 'Explore the tools in the Construx workspace. Illustrations use sample data and are not live dashboard screenshots.',
		items: {
			'project-management': {
				title: 'Project Management',
				points: ['Centralized project information', 'Project progress visibility', 'Organization of multiple construction sites'],
			},
			'task-management': {
				title: 'Task Management',
				points: ['Assigned teams and responsibilities', 'Start and end dates', 'To do, in progress, and done statuses'],
			},
			'construction-plans': {
				title: 'Construction Plans',
				points: ['Upload plan files to each site', 'View plans and open original files'],
			},
			scheduling: {
				title: 'Scheduling',
				points: ['Phase and task timelines', 'Gantt chart visualization', 'Schedule dates and track progress'],
			},
			'workforce-management': {
				title: 'Workforce Management',
				points: ['Member invitations', 'Project assignments', 'Roles and responsibilities'],
			},
			'materials-catalog': {
				title: 'Materials Price Catalog',
				points: ['Organize materials by category and unit', 'Record supplier prices and review price history'],
			},
			finance: {
				title: 'Budget & Expenses',
				points: ['Site budgets and recorded expenses', 'Savings vs. overrun tracking', 'Expenses linked to tasks'],
			},
		} as Record<string, { title: string; points: string[] }>,
	},
	how: {
		eyebrow: 'How it works',
		title: 'From your company workspace to day-to-day project tracking.',
		steps: [
			{ title: 'Create Your Organization', text: "Establish your company's workspace." },
			{ title: 'Organize Your Projects', text: 'Create construction sites and organize the work into phases.' },
			{ title: 'Coordinate Your Team', text: 'Invite members, set project roles, and assign task teams.' },
			{ title: 'Track Activities', text: 'Update task statuses and follow phase and task dates on the Gantt schedule.' },
			{ title: 'Improve Visibility', text: 'Review site progress, plan files, recorded material prices, and budget versus spending.' },
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
			'Track budget and expenses alongside the schedule',
		],
	},
	contact: {
		eyebrow: 'Early access',
		title: 'Bring your construction projects into focus.',
		description: 'Tell us about your company and the projects you run. We will reach out as early access opens.',
		legend: 'Early access request',
		name: 'Full name',
		email: 'Work email',
		company: 'Company',
		message: 'What would you like to manage with Construx?',
		submit: 'Request access',
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
			stats: ['Active sites', 'Team members', 'Open tasks'],
			sites: ['Block A', 'Phase 2', 'Warehouse'],
			complete: 'complete',
		},
		gantt: {
			title: 'Schedule · Harbor Tower (sample)',
			week: 'W',
			rows: ['Site preparation', 'Foundations', 'Structure, levels 1-3', 'MEP rough-in', 'Facade and finishes'],
			legend: 'This illustration shows phase dates and progress. Track phases and tasks together in the Gantt schedule.',
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
