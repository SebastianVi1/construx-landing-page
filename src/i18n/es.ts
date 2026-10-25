import type { Dict } from './en';

export const es: Dict = {
	meta: {
		title: 'Construx | Gestión de proyectos de construcción en una sola plataforma',
		description:
			'Construx ayuda a las empresas constructoras a gestionar proyectos, coordinar a su personal, dar seguimiento a las actividades y organizar la operación de cada obra.',
		ogLocale: 'es_ES',
	},
	skip: 'Saltar al contenido',
	nav: {
		product: 'Producto',
		features: 'Funciones',
		benefits: 'Beneficios',
		about: 'Cómo funciona',
		contact: 'Contacto',
	},
	cta: { primary: 'Solicitar acceso anticipado', secondary: 'Explorar funciones' },
	header: {
		home: 'Inicio de Construx',
		primaryNav: 'Principal',
		mobileNav: 'Móvil',
		openMenu: 'Abrir menú',
		closeMenu: 'Cerrar menú',
		language: 'Idioma',
	},
	hero: {
		eyebrow: 'Plataforma de gestión de construcción',
		line1: 'Toma el control',
		line2: 'de cada proyecto',
		line3: 'de construcción.',
		text: 'Gestiona proyectos, coordina a tu personal, da seguimiento a las actividades y organiza la operación de tus obras en una sola plataforma centralizada.',
		note: 'Construx está pensado para equipos que trabajan en Windows, macOS, iOS y Android. La disponibilidad por plataforma aún se está definiendo.',
	},
	problem: {
		eyebrow: 'El problema',
		title: 'La construcción funciona con coordinación. La mayoría de las herramientas la fragmentan.',
		description:
			'Construx conecta a las personas, los planos y las actividades de cada proyecto para que todos trabajen con la misma información.',
		today: 'Hoy',
		withConstrux: 'Con Construx',
		items: [
			{
				problem: 'La información de los proyectos está dispersa en archivos y chats.',
				solution: 'Un solo espacio reúne cada proyecto, obra y documento.',
			},
			{
				problem: 'Es difícil saber quién está asignado a cada lugar.',
				solution: 'Asigna personal a los proyectos con roles y responsabilidades claros.',
			},
			{
				problem: 'Las tareas pendientes y sus responsables no están claros.',
				solution: 'Cada tarea tiene un responsable, una prioridad y una fecha límite.',
			},
			{
				problem: 'Los planos y las actividades diarias están desconectados.',
				solution: 'Vincula las actividades con el área exacta de un plano de construcción.',
			},
			{
				problem: 'Gestionar varias obras multiplica la complejidad.',
				solution: 'Consulta todas tus obras lado a lado, desde un mismo lugar.',
			},
		],
	},
	features: {
		eyebrow: 'Funciones',
		title: 'Todo lo que un equipo de construcción necesita para mantenerse alineado.',
		description: 'Las vistas previas del producto usan datos de demostración para mostrar la experiencia prevista.',
		items: {
			'project-management': {
				title: 'Gestión de proyectos',
				points: [
					'Información de proyectos centralizada',
					'Visibilidad del avance de cada proyecto',
					'Organización de múltiples obras',
				],
			},
			'task-management': {
				title: 'Gestión de tareas',
				points: ['Asignación de tareas', 'Prioridades y fechas límite', 'Seguimiento del avance'],
			},
			'construction-plans': {
				title: 'Planos de construcción',
				points: [
					'Representación visual de las áreas de obra',
					'Relación entre planos, ubicaciones y actividades',
				],
			},
			scheduling: {
				title: 'Programación',
				points: ['Cronogramas de proyecto', 'Visualización con diagramas de Gantt', 'Dependencias y fechas límite de tareas'],
			},
			'workforce-management': {
				title: 'Gestión de personal',
				points: ['Organización de empleados', 'Asignación a proyectos', 'Roles y responsabilidades'],
			},
			'financial-management': {
				title: 'Gestión financiera',
				points: ['Organización de gastos y compras', 'Visibilidad financiera por proyecto'],
			},
			crm: {
				title: 'CRM',
				points: ['Organización de clientes y relaciones comerciales'],
			},
		},
	},
	how: {
		eyebrow: 'Cómo funciona',
		title: 'Del espacio de trabajo de tu empresa a la visibilidad total de tus obras en cinco pasos.',
		steps: [
			{ title: 'Crea tu organización', text: 'Establece el espacio de trabajo de tu empresa.' },
			{ title: 'Organiza tus proyectos', text: 'Crea y gestiona proyectos de construcción.' },
			{ title: 'Coordina a tu equipo', text: 'Organiza al personal y asigna responsabilidades.' },
			{ title: 'Da seguimiento a las actividades', text: 'Supervisa tareas, cronogramas y avance.' },
			{ title: 'Mejora la visibilidad', text: 'Consulta la información operativa relevante en un solo lugar.' },
		],
	},
	benefits: {
		eyebrow: 'Beneficios',
		title: 'Obras más claras. Responsabilidades más claras.',
		description: 'Lo que cambia cuando la información operativa vive en un solo lugar.',
		items: [
			'Mejora la visibilidad entre proyectos',
			'Reduce la dependencia de herramientas fragmentadas',
			'Mejora la coordinación del personal',
			'Aclara las responsabilidades de cada tarea',
			'Centraliza la información operativa',
			'Facilita un monitoreo de proyectos más consistente',
			'Sienta las bases para gestionar múltiples obras',
		],
	},
	contact: {
		eyebrow: 'Acceso anticipado',
		title: 'Llega primero a la obra cuando Construx abra.',
		description:
			'Cuéntanos sobre tu empresa y los proyectos que gestionas. Nos pondremos en contacto cuando abra el acceso anticipado.',
		legend: 'Solicitud de acceso anticipado',
		name: 'Nombre completo',
		email: 'Correo de trabajo',
		company: 'Empresa',
		message: '¿Qué te gustaría gestionar con Construx?',
		submit: 'Solicitar acceso anticipado',
		notConnected: 'Las inscripciones aún no están abiertas. Este formulario no está conectado a ningún servicio.',
	},
	footer: {
		blurb: 'Una sola plataforma para coordinar proyectos, personal y operaciones en cada obra de construcción.',
		nav: 'Pie de página',
		rights: 'Todos los derechos reservados.',
	},
	mockup: {
		demo: 'Datos demo',
		dashboard: {
			title: 'Resumen · Acme Builders (ejemplo)',
			stats: ['Obras activas', 'Personal en obra', 'Tareas abiertas'],
			sites: ['Bloque A', 'Fase 2', 'Bodega'],
			complete: 'completado',
		},
		gantt: {
			title: 'Cronograma · Harbor Tower (ejemplo)',
			week: 'S',
			rows: ['Preparación del terreno', 'Cimentación', 'Estructura, niveles 1-3', 'Instalaciones (MEP)', 'Fachada y acabados'],
			legend: 'El naranja muestra el trabajo completado. Dependencias y fechas límite en un solo cronograma.',
		},
		tasks: {
			title: 'Tareas · Harbor Tower (ejemplo)',
			columns: ['Por hacer', 'En curso', 'Hecho'],
			items: ['Pedir acero, nivel 2', 'Vaciar losa, eje C', 'Inspeccionar andamios', 'Levantamiento del lindero'],
			priority: { high: 'Alta', med: 'Media', low: 'Baja' },
		},
		plan: {
			title: 'Plano · Nivel 2 (ejemplo)',
			alt: 'Plano del nivel 2 con cuatro marcadores de actividad numerados: encofrado, revisión de acero, vaciado de losa y pasos de instalaciones.',
			zones: ['Zona A', 'Zona B', 'Zona C'],
			markers: ['Encofrado', 'Revisión de acero', 'Vaciado de losa', 'Pasos de instalaciones'],
		},
		team: {
			title: 'Equipo (ejemplo)',
			roles: ['Ingeniera de obra', 'Capataz', 'Oficial de seguridad', 'Topógrafo'],
		},
		crm: {
			title: 'Clientes (ejemplo)',
			stages: ['Prospecto', 'Propuesta', 'Cliente'],
		},
		finance: {
			title: 'Gastos · Harbor Tower (ejemplo)',
			labels: ['Materiales', 'Mano de obra', 'Equipos', 'Permisos'],
			ofBudget: 'del presupuesto',
		},
	},
};
