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
		faq: 'FAQ',
	},
	cta: { primary: 'Solicitar acceso', secondary: 'Explorar funciones' },
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
		text: 'Organiza tus obras por fases, asigna tareas y equipos, sube planos, sigue el cronograma de Gantt y controla precios y gastos en un solo espacio de trabajo.',
		note: 'Un espacio de trabajo de operaciones para empresas constructoras y sus equipos de proyecto.',
	},
	problem: {
		eyebrow: 'El problema',
		title: 'La construcción funciona con coordinación. La mayoría de las herramientas la fragmentan.',
		description:
			'Reúne la información de las obras, los cronogramas de fases, los archivos de planos y las asignaciones del equipo en un solo espacio.',
		today: 'Hoy',
		withConstrux: 'Con Construx',
		items: [
			{
				problem: 'La información de los proyectos está dispersa en archivos y chats.',
				solution: 'Reúne los detalles de cada obra, sus fases y los archivos de planos cargados.',
			},
			{
				problem: 'Es difícil saber quién está asignado a cada lugar.',
				solution: 'Asigna personal a los proyectos con roles y responsabilidades claros.',
			},
			{
				problem: 'Las tareas pendientes y sus responsables no están claros.',
				solution: 'Asigna un equipo, define fechas y sigue cada tarea desde pendiente hasta completada.',
			},
			{
				problem: 'Es difícil encontrar los planos cuando el equipo los necesita.',
				solution: 'Carga y consulta los archivos de planos dentro de la obra correspondiente.',
			},
			{
				problem: 'Gestionar varias obras multiplica la complejidad.',
				solution: 'Consulta todas tus obras lado a lado, desde un mismo lugar.',
			},
			{
				problem: 'Los costos y presupuestos se registran por separado del trabajo.',
				solution: 'Registra gastos por obra y tarea, y compara el presupuesto contra lo gastado.',
			},
		],
	},
	features: {
		eyebrow: 'Funciones',
		title: 'Mantén tus obras, cronogramas y equipos coordinados.',
		description: 'Conoce las herramientas del espacio de trabajo de Construx. Las ilustraciones usan datos de ejemplo y no son capturas del panel en funcionamiento.',
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
				points: ['Equipos y responsabilidades asignadas', 'Fechas de inicio y fin', 'Estados pendiente, en curso y completada'],
			},
			'construction-plans': {
				title: 'Planos de construcción',
				points: [
					'Carga de archivos de planos por obra',
					'Consulta de planos y acceso a los archivos originales',
				],
			},
			scheduling: {
				title: 'Programación',
				points: ['Cronogramas de fases y tareas', 'Visualización con diagramas de Gantt', 'Fechas programadas y seguimiento del avance'],
			},
			'workforce-management': {
				title: 'Gestión de personal',
				points: ['Invitaciones a miembros', 'Asignación a proyectos', 'Roles y responsabilidades'],
			},
			'materials-catalog': {
				title: 'Catálogo de precios de materiales',
				points: ['Materiales organizados por categoría y unidad', 'Registro de precios de proveedores e historial de precios'],
			},
			finance: {
				title: 'Presupuesto y gastos',
				points: ['Presupuestos de obra y gastos registrados', 'Seguimiento de ahorro vs. sobrecoste', 'Gastos asociados a tareas'],
			},
		},
	},
	how: {
		eyebrow: 'Cómo funciona',
		title: 'Del espacio de trabajo de tu empresa al seguimiento diario de tus proyectos.',
		steps: [
			{ title: 'Crea tu organización', text: 'Establece el espacio de trabajo de tu empresa.' },
			{ title: 'Organiza tus proyectos', text: 'Crea obras y organiza el trabajo por fases.' },
			{ title: 'Coordina a tu equipo', text: 'Invita a miembros, define roles por proyecto y asigna equipos a las tareas.' },
			{ title: 'Da seguimiento a las actividades', text: 'Actualiza los estados de las tareas y consulta las fechas de fases y tareas en el diagrama de Gantt.' },
			{ title: 'Mejora la visibilidad', text: 'Consulta el avance de las obras, los planos, los precios de materiales registrados y el presupuesto frente a lo gastado.' },
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
			'Controla el presupuesto y los gastos junto al cronograma',
		],
	},
	metrics: {
		eyebrow: 'Medido y unificado',
		items: [
			{ value: 7, label: 'Módulos del workspace', detail: 'Obras · Tareas · Planos · Cronograma · Precios · Gastos' },
			{ value: 8, label: 'Roles', detail: 'Propietario · Administrador · Miembro · Trabajador · Finanzas · Líder · Maestro de obra · Cuadrilla' },
			{ value: 3, label: 'Estados de tarea', detail: 'Por hacer · En curso · Hecho' },
			{ value: 2, label: 'Idiomas', detail: 'Español · English' },
		],
	},
	modules: {
		eyebrow: 'Módulos',
		title: 'Dentro del workspace',
		description: 'Siete módulos cubren el día a día de una constructora, de la planificación de obras al presupuesto.',
		items: [
			{
				title: 'Obras',
				description: 'Un proyecto de construcción con su propio equipo, fases, presupuesto y gastos.',
				points: ['Crea y archiva obras', 'Define el presupuesto de la obra', 'Asigna personas a la obra'],
			},
			{
				title: 'Tareas',
				description: 'Una pieza de trabajo dentro de una fase, con fechas, estado y un equipo.',
				points: ['Asigna un equipo con roles', 'Sigue pendiente, en curso y hecha', 'Registra gastos por tarea'],
			},
			{
				title: 'Planos de construcción',
				description: 'Los archivos de planos guardados con la obra a la que pertenecen.',
				points: ['Carga planos por obra', 'Consulta planos y abre los originales'],
			},
			{
				title: 'Programación',
				description: 'Cronogramas de fases y tareas en un diagrama de Gantt compartido.',
				points: ['Fechas de fases y tareas', 'Barras con colores', 'Seguimiento del avance'],
			},
			{
				title: 'Personal',
				description: 'Las personas de la empresa, con roles y responsabilidades.',
				points: ['Invita a miembros', 'Asigna roles y permisos', 'Asigna personas a obras'],
			},
			{
				title: 'Catálogo de precios de materiales',
				description: 'Materiales, proveedores y los precios que observaste, con historial.',
				points: ['Organiza por categoría y unidad', 'Registra precios e historial de proveedores', 'Importa precios desde un CSV exportado de Excel'],
			},
			{
				title: 'Presupuesto y gastos',
				description: 'Presupuestos de obra frente a los gastos registrados, con ahorro y sobrecoste.',
				points: ['Registra gastos por obra y tarea', 'Compara presupuesto vs. gasto', 'Ve el ahorro o sobrecoste'],
			},
		],
	},
	faq: {
		eyebrow: 'FAQ',
		title: 'Preguntas frecuentes',
		description: 'Lo esencial antes de solicitar acceso.',
		items: [
			{
				q: '¿Para quién es Construx?',
				a: 'Para empresas constructoras y sus equipos de proyecto, en oficina y en obra. Los dueños ven todas las obras; los líderes y la cuadrilla ven sus tareas y registran gastos.',
			},
			{
				q: '¿Cuánto cuesta?',
				a: 'Construx está en acceso anticipado y el precio aún no se anuncia. Solicita acceso y te contactaremos cuando abra.',
			},
			{
				q: '¿Qué idiomas soporta?',
				a: 'Español e inglés.',
			},
			{
				q: '¿Puedo importar mis precios de materiales?',
				a: 'Sí. El catálogo registra precios de proveedores con su historial y puedes importar precios desde un CSV (exportado de Excel).',
			},
			{
				q: '¿Quién ve qué?',
				a: 'El acceso se define por rol. Los administradores gestionan la empresa, finanzas ve presupuestos y gastos, y los miembros y trabajadores ven sus obras y tareas asignadas.',
			},
			{
				q: '¿Reemplaza a Excel?',
				a: 'Construx centraliza obras, fases, tareas, planos, precios y gastos en un solo workspace con roles claros, en lugar de archivos y chats dispersos.',
			},
		],
	},
	contact: {
		eyebrow: 'Acceso anticipado',
		title: 'Ten una visión clara de tus proyectos de construcción.',
		description:
			'Cuéntanos sobre tu empresa y los proyectos que gestionas. Nos pondremos en contacto cuando abra el acceso anticipado.',
		legend: 'Solicitud de acceso anticipado',
		name: 'Nombre completo',
		email: 'Correo de trabajo',
		company: 'Empresa',
		message: '¿Qué te gustaría gestionar con Construx?',
		submit: 'Solicitar acceso',
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
			stats: ['Obras activas', 'Miembros del equipo', 'Tareas abiertas'],
			sites: ['Bloque A', 'Fase 2', 'Bodega'],
			complete: 'completado',
		},
		gantt: {
			title: 'Cronograma · Harbor Tower (ejemplo)',
			week: 'S',
			rows: ['Preparación del terreno', 'Cimentación', 'Estructura, niveles 1-3', 'Instalaciones (MEP)', 'Fachada y acabados'],
			legend: 'Esta ilustración muestra fechas y avance de las fases. Consulta las fases y las tareas juntas en el diagrama de Gantt.',
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
		finance: {
			title: 'Gastos · Harbor Tower (ejemplo)',
			labels: ['Materiales', 'Mano de obra', 'Equipos', 'Permisos'],
			ofBudget: 'del presupuesto',
		},
	},
};
