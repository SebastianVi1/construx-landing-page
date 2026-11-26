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
		whatsapp: 'WhatsApp',
		guide: 'Guide',
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
	whatsapp: {
		eyebrow: 'WhatsApp',
		title: 'Report site progress from WhatsApp.',
		description:
			'Your crew already lives on WhatsApp. Start or finish a task, or send a progress note with photos, in under a minute. Construx saves it to the right site and task.',
		points: [
			'No app or login: link your number once.',
			'Progress notes with up to five photos, attached to their task.',
			'Nothing is saved until you confirm.',
			'Everyone sees only what their role allows.',
		],
		more: 'See how it works',
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
	whatsappPage: {
		meta: {
			title: 'WhatsApp progress updates for construction crews | Construx',
			description:
				'Start, finish and note construction tasks from WhatsApp, with photos. Construx saves every confirmed update to the right site and task.',
		},
		eyebrow: 'WhatsApp',
		title: 'Report progress from the job site, without opening the app.',
		intro: 'Your crew links their WhatsApp once. After that they start or finish a task, or send a progress note with photos, and Construx saves it to the right site and task.',
		steps: {
			eyebrow: 'How it works',
			title: 'Four steps from the job site.',
			items: [
				{ title: 'Link your number', text: 'Get a one-time code in your Construx profile and send it from WhatsApp.' },
				{ title: 'Pick the site and task', text: 'Choose from the tasks your role lets you change.' },
				{ title: 'Write and add photos', text: 'Start, finish or write a note, with up to five photos.' },
				{ title: 'Confirm', text: 'Review the summary and tap Yes. Nothing is saved before that.' },
			],
		},
		actions: {
			eyebrow: 'What you can do',
			title: 'Three ways to report progress.',
			items: [
				{ title: 'Start a task', text: 'Mark a task in progress when the work begins.' },
				{ title: 'Finish a task', text: 'Mark it done when the work is complete, with a short note if needed.' },
				{ title: 'Add a progress note', text: 'Describe what happened and attach up to five JPEG or PNG photos.' },
			],
		},
		panel: {
			eyebrow: 'In the dashboard',
			title: 'Every update lands on its task.',
			text: 'Notes sent from WhatsApp appear on the task next to notes written in the app, with their source and the time they were saved.',
			points: [
				'Each note is dated and attributed to the person who sent it.',
				'Notes stay in the task history and are not edited afterwards.',
				'Photos are attached to the note, not to a pin on the floor plan.',
			],
		},
		security: {
			eyebrow: 'Control and security',
			title: 'Clear rules, built in.',
			items: [
				'Link codes are one-time and expire after 10 minutes.',
				'Only the number you link can send updates on your behalf.',
				'Permissions are checked again when you confirm. If the task changed in the meantime, nothing is saved.',
				'After too many wrong codes, the number is blocked for an hour.',
				'Sessions close after 30 minutes without activity.',
				'Unlink at any time from your profile, or send BAJA or STOP from WhatsApp.',
				'Construx keeps the confirmed note and photos, not the raw chat.',
			],
		},
		audience: {
			eyebrow: 'Who it is for',
			title: 'Everyone on site, with the role they have.',
			items: [
				{ role: 'Workers', text: 'Start, finish and note the tasks assigned to their team.' },
				{ role: 'Residents and site managers', text: 'Record progress on the tasks of the sites they are assigned to.' },
				{ role: 'Owners and administrators', text: 'Read every site note in the dashboard, with the source of each one.' },
			],
		},
		faq: {
			eyebrow: 'FAQ',
			title: 'Questions about WhatsApp updates',
			items: [
				{
					q: 'Do I need to install anything?',
					a: 'No. Use the WhatsApp you already have. Link your number once from your Construx profile with a one-time code.',
				},
				{
					q: 'Can I send the site report PDF through WhatsApp?',
					a: 'Not yet. WhatsApp is for field updates: starting, finishing and noting tasks, with photos. The site report PDF is generated from the dashboard.',
				},
				{
					q: 'How many photos can I attach?',
					a: 'Up to five per note, as JPEG or PNG images of up to 5 MB each.',
				},
				{
					q: 'What if I change my number?',
					a: 'Unlink the old number from your profile, or send BAJA from that number. Then link the new number with a new code.',
				},
				{
					q: 'Which language does the bot use?',
					a: 'Spanish or English, the language set in your profile. You can change it at any time.',
				},
				{
					q: 'Does Construx save my chats?',
					a: "No. It keeps only the note and photos you confirm, with an audit record of the change. Messages still travel through WhatsApp and Meta's servers.",
				},
				{
					q: 'Who can use it?',
					a: 'Anyone with a Construx account and a linked number. You only see the sites and tasks your role lets you change.',
				},
			],
		},
		cta: {
			title: 'Ready to report from the field?',
			text: 'Construx is in early access. Request access and we will show you the WhatsApp flow with your own sites.',
		},
		legal: 'WhatsApp is a trademark of Meta. Construx has no affiliation with Meta and is not endorsed by it.',
	},
	mockup: {
		demo: 'Demo data',
		progressNote: {
			title: 'Task · Pour slab, grid C (sample)',
			history: 'Progress notes',
			status: 'In progress',
			started: 'Started by LM · 07:12',
			author: 'LM',
			text: 'Rebar checked on grid C, ready to pour.',
			meta: 'Today · 07:40 · 2 photos',
			source: 'WhatsApp',
		},
		whatsapp: {
			title: 'WhatsApp · Field update (sample)',
			pickSite: 'Choose a site',
			pickTask: 'Choose a task',
			pickAction: 'What do you want to record?',
			save: 'Save it?',
			saved: 'Saved to Construx',
			site: 'Harbor Tower',
			task: 'Pour slab, grid C',
			note: 'Rebar checked on grid C, ready to pour.',
			photos: '2 photos',
			start: 'Start',
			finish: 'Finish',
			noteAction: 'Note',
			yes: 'Yes',
			no: 'No',
		},
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
