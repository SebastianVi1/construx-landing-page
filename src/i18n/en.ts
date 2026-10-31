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
		faq: 'FAQ',
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
	metrics: {
		eyebrow: 'Measured and unified',
		items: [
			{ value: 7, label: 'Workspace modules', detail: 'Sites · Tasks · Plans · Schedule · Prices · Expenses' },
			{ value: 8, label: 'Roles', detail: 'Owner · Admin · Member · Worker · Finance · Lead · Foreman · Crew' },
			{ value: 3, label: 'Task statuses', detail: 'To do · In progress · Done' },
			{ value: 2, label: 'Languages', detail: 'English · Spanish' },
		],
	},
	modules: {
		eyebrow: 'Modules',
		title: 'Inside the workspace',
		description: 'Seven modules cover the day-to-day of a construction company, from site planning to budgets.',
		items: [
			{
				title: 'Sites',
				description: 'One construction project with its own people, phases, budget and expenses.',
				points: ['Create and archive sites', 'Set a site budget', 'Assign people to a site'],
			},
			{
				title: 'Tasks',
				description: 'A piece of work inside a phase, with dates, a status and a team.',
				points: ['Assign a team with roles', 'Track to do, in progress, done', 'Record expenses on a task'],
			},
			{
				title: 'Construction plans',
				description: 'Plan files stored with the site they belong to.',
				points: ['Upload plan files per site', 'View plans and open originals'],
			},
			{
				title: 'Scheduling',
				description: 'Phase and task timelines on a shared Gantt chart.',
				points: ['Phase and task dates', 'Color-coded bars', 'Track progress'],
			},
			{
				title: 'Workforce',
				description: 'The people of the company, with roles and responsibilities.',
				points: ['Invite members', 'Assign roles and permissions', 'Assign people to sites'],
			},
			{
				title: 'Materials price catalog',
				description: 'Materials, suppliers and the prices you observed, with history.',
				points: ['Organize by category and unit', 'Record supplier prices and history', 'Import prices from a CSV exported from Excel'],
			},
			{
				title: 'Budget & expenses',
				description: 'Site budgets against recorded expenses, with savings and overruns.',
				points: ['Record expenses on sites and tasks', 'Compare budget vs. spending', 'See savings or overrun'],
			},
		],
	},
	faq: {
		eyebrow: 'FAQ',
		title: 'Questions, answered',
		description: 'The essentials before you request access.',
		items: [
			{
				q: 'Who is Construx for?',
				a: 'Construction companies and their project teams, in the office and on site. Owners see every site; leads and crews see their tasks and record expenses.',
			},
			{
				q: 'How much does it cost?',
				a: "Construx is in early access and pricing has not been announced. Request access and we'll reach out as it opens.",
			},
			{
				q: 'Which languages are supported?',
				a: 'Spanish and English.',
			},
			{
				q: 'Can I import my material prices?',
				a: 'Yes. The price catalog records supplier prices with their history, and you can import prices from a CSV (exported from Excel).',
			},
			{
				q: 'Who can see what?',
				a: 'Access is set by role. Administrators manage the company, finance sees budgets and expenses, and members and workers see their assigned sites and tasks.',
			},
			{
				q: 'Does it replace Excel?',
				a: 'Construx centralizes sites, phases, tasks, plans, prices and expenses in one workspace with clear roles — instead of files and chats scattered across tools.',
			},
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
