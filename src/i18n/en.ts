export const en = {
	meta: {
		title: 'Construction Management Software for Contractors | Construx',
		description:
			'Construction management software for contractors and civil engineering firms: organize sites into phases, assign crews, share plans and track budgets.',
		ogImageAlt: 'Construx construction project management workspace',
		appDescription: 'Construction management software for contractors and civil engineering firms: sites, tasks, plans, schedules, material prices and budgets.',
		ogLocale: 'en_US',
	},
	skip: 'Skip to content',
	nav: {
		product: 'Product',
		features: 'Features',
		benefits: 'Benefits',
		about: 'How it works',
		guide: 'Guide',
		mcp: 'AI assistant',
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
		eyebrow: 'Software for contractors and civil engineering',
		line1: 'Take Control of',
		line2: 'Every Construction',
		line3: 'Project.',
		text: 'Organize sites into phases, assign tasks and teams, upload plans, follow the Gantt schedule, and track material prices and expenses in one workspace.',
		note: 'For contractors, builders and civil engineering firms, from the office to the job site.',
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
				a: 'Contractors, builders and civil engineering firms in Latin America, and their teams in the office and on site. Owners see every site; leads, foremen and crews see their tasks and record expenses.',
			},
			{
				q: 'Does it work for civil engineering and infrastructure?',
				a: 'Yes. Construx organizes any project into sites, phases and tasks, whether building construction, civil works or infrastructure such as roads, utilities or land development.',
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
		submitting: 'Sending…',
		errors: {
			nameRequired: 'Enter your name.',
			nameMax: 'Use at most 80 characters.',
			emailRequired: 'Enter your work email.',
			emailInvalid: 'Enter a valid email address.',
			companyMax: 'Use at most 100 characters.',
			messageMax: 'Use at most 500 characters.',
		},
		notConnected: 'Sign-ups are not open yet. This form is not connected to a service.',
	},
	footer: {
		blurb: 'One platform to coordinate projects, workforce, and operations across every construction site.',
		nav: 'Footer',
		rights: 'All rights reserved.',
	},
	guide: {
		meta: {
			title: 'User guide: how Construx works | Construx',
			description:
				'A general walkthrough of Construx: set up your company, create sites, plan phases and tasks, assign people on the floor plan, take attendance and track budgets.',
		},
		eyebrow: 'User guide',
		title: 'How Construx works, from your first site to the site report.',
		intro: 'A general walkthrough of the workspace. Each chapter explains what a module is for, the steps to use it and who can do it. Start with the one-minute video for the big picture.',
		video: {
			label: 'Construx promo video',
			play: 'Play video',
			note: '59 seconds · no sound needed',
			unsupported: 'Your browser cannot play this video.',
		},
		tocLabel: 'Chapters',
		whoLabel: 'Who',
		tipLabel: 'Tip',
		chapters: {
			start: {
				title: 'Get started',
				summary: 'Create your account and enter your company workspace.',
				steps: [
					'Sign up with your email and open the verification link, or continue with Google.',
					'Answer two quick questions: what you want to manage and your type of business.',
					'Create your company. You become its Owner, with access to everything.',
					'If someone invited you, accept the invitation instead: you join their company with the role they chose.',
				],
				who: 'Anyone with an email address.',
				tip: 'Add your photo and trade to your profile so your team recognizes you on sites and tasks.',
			},
			company: {
				title: 'Your company and team',
				summary: 'Bring your people in and decide what each one can see and do.',
				steps: [
					'Invite members by email and choose their role. You can send them straight to a site.',
					'Change roles, suspend or remove members whenever you need to.',
					'Group people into crews, each with a leader, to assign them and take roll faster.',
					'Register your equipment and machinery so it can be assigned on the plan like people.',
				],
				who: 'Owner and Administrator. Built-in roles: Owner, Administrator, Member, Worker, Finance, Resident, Site Manager and Superintendent.',
				tip: 'Roles decide what each person sees: a Worker only sees the sites they have access to and only updates the status of their own tasks.',
			},
			sites: {
				title: 'Sites',
				summary: 'Each construction site gets its own team, phases, plans, budget and documents.',
				steps: [
					'Create a site with its address, start and end dates and status.',
					'Set the site budget to compare it later against what you spend.',
					'Give access to the people who work there.',
					'Follow all your sites from one list and archive the ones you finish.',
				],
				who: 'Owner and Administrator create sites; the Site Manager edits their own site and its staff; Owner and Finance set the budget.',
			},
			tasks: {
				title: 'Phases and tasks',
				summary: 'Break the work into phases and tasks, assign who does what and follow progress.',
				steps: [
					'Split each site into phases, such as foundations, structure and finishes, with their dates.',
					'Add tasks to each phase and assign a team: one Lead, plus Foreman and Crew.',
					'Move each task from To do to In progress to Done.',
					'Everyone sees their own work in My tasks, and the Gantt chart lays phases and tasks on a timeline.',
				],
				who: 'Owner, Administrator, Superintendent, Site Manager, Resident and Member plan the work; Workers update their own tasks.',
				tip: 'Filter tasks by status or by person to see what is stuck.',
			},
			plans: {
				title: 'Plans and zones',
				summary: "The heart of Construx: put people and work on the site's own floor plans.",
				steps: [
					'Upload your plans to the library and sort them into folders.',
					'Open a floor plan, calibrate its scale and draw zones as rectangles or polygons.',
					'Drag people, crews or equipment onto a zone to assign them.',
					'Drop pins to flag issues or notes, with photos and a status.',
				],
				who: 'Roles that manage plans edit zones and assignments; other roles with access to the site\'s plans can view them.',
			},
			attendance: {
				title: 'Attendance',
				summary: 'Know who is on site today and whether they are where they were planned.',
				steps: [
					'Each person checks in on arrival, optionally in a zone of the floor plan.',
					'Crew leaders take roll for their whole crew in one step.',
					'Construx compares check-ins with zone assignments: present, absent or unplanned.',
					'Check-ins feed the daily labor cost and the site report.',
				],
				who: 'Everyone on the site checks in; crew leaders and plan managers can check others in.',
				tip: 'There is no check-out: a new check-in in another zone simply moves the person.',
			},
			finance: {
				title: 'Finance',
				summary: 'Compare budget against spending per site, phase and task.',
				steps: [
					'Set budgets for the site, its phases and its tasks.',
					'Record expenses by category and date, on the site or on a specific task.',
					'See savings or overruns as soon as an expense is recorded.',
					'Follow the whole company in the finance summary, with monthly spending across sites.',
				],
				who: 'Owner and Finance manage budgets; Administrator and Superintendent can review them.',
				tip: 'Only sites with a budget count in the company summary, so set one for each site.',
			},
			docs: {
				title: 'Documents and reports',
				summary: 'Keep every site file in one place and share progress in a PDF.',
				steps: [
					'Create folders per site and upload contracts, permits, photos or any other file.',
					'Find any file with search.',
					'Generate the site report: a PDF with tasks, attendance, expenses and staff.',
					'Download it and send it to your client or management.',
				],
				who: 'Everyone with access to the site views documents; roles that manage the site upload files and generate reports.',
			},
			soon: {
				title: 'Coming soon',
				summary: 'What we are building next.',
				steps: [
					'Price catalog: import your own material and labor costs to budget faster. It is being rebuilt.',
					'Shared workbooks: the built-in spreadsheets already work in your browser and will be shared across your company.',
				],
				who: 'Early access companies get each one as it lands.',
			},
		},
		cta: {
			title: 'Want to see it with your own sites?',
			text: 'Construx is in early access. Tell us about your company and we will get in touch.',
		},
	},
	mcp: {
		meta: {
			title: 'AI assistant integration via MCP (coming soon) | Construx',
			description:
				'Coming soon: connect Claude, ChatGPT, Cursor or any MCP client to Construx to look up your sites, tasks and expenses with your own permissions. In design, not available yet.',
		},
		eyebrow: 'Coming soon',
		status: 'In design. Not available yet.',
		title: 'Ask your AI assistant about your sites.',
		mcpDefinition:
			'MCP (Model Context Protocol) is an open standard that lets an AI assistant connect to other apps and work with their data.',
		intro:
			'We are designing a Construx MCP server. Once it exists, Claude, ChatGPT, Cursor or any MCP-compatible client will be able to look up your sites, tasks and expenses and help with the daily paperwork, always with your own permissions.',
		secondaryCta: 'See what it will do',
		diagram: {
			label: 'How the connection is planned',
			assistant: { title: 'Your AI assistant', text: 'Claude, ChatGPT, Cursor or another MCP client' },
			link: 'MCP',
			server: { title: 'Construx MCP server', tag: 'Planned' },
			scope: 'with your permissions',
			company: { title: 'Your company in Construx', text: 'Sites, phases, tasks, team, expenses and prices' },
			legend: 'Solid line: exists today. Dashed line: planned, not built yet.',
		},
		capabilities: {
			eyebrow: 'Capabilities',
			title: 'What your assistant will be able to do',
			description: 'A first list grouped by what the assistant does with your data. It may change as we design it.',
			groups: [
				{
					title: 'Look up',
					text: 'Answers from your own data, without opening the app.',
					items: [
						'The status of a site: progress by phase, open tasks and budget',
						'Overdue or pending tasks, by site or by assignee',
						'Who has access to a site and with which role',
						'Recorded material prices and their history',
					],
				},
				{
					title: 'Act',
					text: 'Day-to-day changes, asked for in plain words.',
					items: [
						'Create tasks inside a phase and assign the team',
						'Move a task to in progress or done',
						'Record an expense on a site or a task',
					],
				},
				{
					title: 'Analyse',
					text: 'Summaries that usually take an afternoon of spreadsheets.',
					items: [
						'Site expenses against budget, by phase or category',
						'A draft of the daily or weekly site report',
						'Progress compared across all your sites',
					],
				},
			],
		},
		examples: {
			eyebrow: 'Examples',
			title: 'What it could look like in a conversation',
			description: 'Illustrative conversations with sample data. Tool names are provisional.',
			frameTitle: 'Assistant + Construx',
			you: 'You',
			tool: 'Construx tool',
			assistant: 'Assistant',
			items: [
				{
					prompt: 'Which tasks are overdue at Harbor Tower?',
					calls: ['list_tasks(site: "Harbor Tower", status: "overdue")'],
					answer: 'Three tasks are overdue. The oldest is "Pour slab, grid C", due Nov 12, led by the Ramirez crew. Want me to list the other two by phase?',
				},
				{
					prompt: 'Create a task to check the level 2 rebar in the Structure phase, assign it to Luis and make it due Friday.',
					calls: ['find_member(site: "Harbor Tower", name: "Luis")', 'create_task(phase: "Structure", name: "Check level 2 rebar", lead: "Luis Ortega", due: "Fri, Nov 20")'],
					answer: 'Done. "Check level 2 rebar" is in Structure, To do, led by Luis Ortega and due Friday, Nov 20.',
				},
				{
					prompt: 'How is North Warehouse doing against its budget this month?',
					calls: ['get_budget(site: "North Warehouse")', 'list_expenses(site: "North Warehouse", month: "2026-11")'],
					answer: 'You have spent 68% of the site budget. Materials is the largest category this month, and the Foundations phase is 6% over its own budget.',
				},
			],
		},
		security: {
			eyebrow: 'Security and control',
			title: 'Your permissions, nothing more.',
			description: 'The assistant will not get a back door. It will go through the same rules as you do in the app.',
			items: [
				{
					title: 'It acts as you',
					text: 'It will connect with your account and only see the companies and sites you already have access to.',
				},
				{
					title: 'Same roles for every change',
					text: 'Creating or changing anything will require the same role as in the app. If you are a Worker, it will only update your own tasks.',
				},
				{
					title: 'You can disconnect it',
					text: 'You will be able to revoke the assistant at any time, and its access will end right away.',
				},
				{
					title: 'Every action recorded',
					text: 'Each change will be audited with your name and a note that it came from the assistant.',
				},
			],
		},
		cta: {
			title: 'Not available yet. Want it first?',
			text: 'The MCP server is in design and has no release date. Early access companies will get it first when it is ready.',
			secondary: 'Read the user guide',
		},
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
