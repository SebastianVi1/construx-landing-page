import type { Dict } from './en';

export const es: Dict = {
	meta: {
		title: 'Software para constructoras y control de obra | Construx',
		description:
			'Software de control de obra para constructoras, contratistas e ingeniería civil: organiza obras, asigna cuadrillas, comparte planos y controla costos.',
		ogImageAlt: 'Espacio de trabajo de Construx para la gestión de proyectos de construcción',
		appDescription: 'Software de gestión de obras para constructoras, contratistas y empresas de ingeniería civil: obras, tareas, planos, cronogramas, precios de materiales y presupuestos.',
		ogLocale: 'es_LA',
	},
	skip: 'Saltar al contenido',
	nav: {
		product: 'Producto',
		features: 'Funciones',
		benefits: 'Beneficios',
		about: 'Cómo funciona',
		whatsapp: 'WhatsApp',
		guide: 'Guía',
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
		eyebrow: 'Software para constructoras e ingeniería civil',
		line1: 'Toma el control',
		line2: 'de cada proyecto',
		line3: 'de construcción.',
		text: 'Organiza tus obras por fases, asigna tareas y equipos, sube planos, sigue el cronograma de Gantt y controla precios y gastos en un solo espacio de trabajo.',
		note: 'Para constructoras, contratistas y empresas de ingeniería civil, desde la oficina hasta la obra.',
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
				points: ['Presupuestos de obra y gastos registrados', 'Seguimiento de ahorro vs. sobrecosto', 'Gastos asociados a tareas'],
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
				description: 'Presupuestos de obra frente a los gastos registrados, con ahorro y sobrecosto.',
				points: ['Registra gastos por obra y tarea', 'Compara presupuesto vs. gasto', 'Ve el ahorro o sobrecosto'],
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
				a: 'Para constructoras, contratistas y empresas de ingeniería civil en Latinoamérica, y para sus equipos en oficina y en obra. Los dueños ven todas las obras; los líderes, el maestro de obra y la cuadrilla ven sus tareas y registran gastos.',
			},
			{
				q: '¿Sirve para obra civil e infraestructura?',
				a: 'Sí. Construx organiza cualquier proyecto en obras, fases y tareas, ya sea edificación, obra civil o infraestructura como caminos, redes o urbanización.',
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
		submitting: 'Enviando…',
		errors: {
			nameRequired: 'Escribe tu nombre.',
			nameMax: 'Usa como máximo 80 caracteres.',
			emailRequired: 'Escribe tu correo de trabajo.',
			emailInvalid: 'Escribe un correo electrónico válido.',
			companyMax: 'Usa como máximo 100 caracteres.',
			messageMax: 'Usa como máximo 500 caracteres.',
		},
		notConnected: 'Las inscripciones aún no están abiertas. Este formulario no está conectado a ningún servicio.',
	},
	footer: {
		blurb: 'Una sola plataforma para coordinar proyectos, personal y operaciones en cada obra de construcción.',
		nav: 'Pie de página',
		rights: 'Todos los derechos reservados.',
	},
	guide: {
		meta: {
			title: 'Guía de uso: cómo funciona Construx | Construx',
			description:
				'Un recorrido general por Construx: configura tu empresa, crea obras, planea fases y tareas, asigna personal sobre el plano, toma asistencia y controla presupuestos.',
		},
		eyebrow: 'Guía de uso',
		title: 'Cómo funciona Construx, de tu primera obra al reporte de obra.',
		intro: 'Un recorrido general por el espacio de trabajo. Cada capítulo explica para qué sirve un módulo, los pasos para usarlo y quién puede hacerlo. Empieza por el video de un minuto para tener el panorama completo.',
		video: {
			label: 'Video promocional de Construx',
			play: 'Reproducir video',
			note: '59 segundos · no necesita sonido',
			unsupported: 'Tu navegador no puede reproducir este video.',
		},
		tocLabel: 'Capítulos',
		whoLabel: 'Quién',
		tipLabel: 'Consejo',
		chapters: {
			start: {
				title: 'Primeros pasos',
				summary: 'Crea tu cuenta y entra al espacio de trabajo de tu empresa.',
				steps: [
					'Regístrate con tu correo y abre el enlace de verificación, o continúa con Google.',
					'Responde dos preguntas rápidas: qué quieres gestionar y tu tipo de negocio.',
					'Crea tu empresa. Quedas como Propietario, con acceso a todo.',
					'Si alguien te invitó, acepta la invitación: entras a su empresa con el rol que eligió.',
				],
				who: 'Cualquier persona con un correo electrónico.',
				tip: 'Agrega tu foto y tu oficio al perfil para que tu equipo te reconozca en obras y tareas.',
			},
			company: {
				title: 'Tu empresa y tu equipo',
				summary: 'Suma a tu gente y decide qué puede ver y hacer cada quien.',
				steps: [
					'Invita miembros por correo y elige su rol. Puedes enviarlos directo a una obra.',
					'Cambia roles, suspende o elimina miembros cuando lo necesites.',
					'Agrupa a las personas en cuadrillas, cada una con un líder, para asignarlas y pasar lista más rápido.',
					'Registra tu equipo y maquinaria para asignarlos sobre el plano igual que a las personas.',
				],
				who: 'Propietario y Administrador. Roles incluidos: Propietario, Administrador, Miembro, Trabajador, Finanzas, Residente, Jefe de Obra y Superintendente.',
				tip: 'El rol define qué ve cada persona: un Trabajador solo ve las obras a las que tiene acceso y solo actualiza el estado de sus propias tareas.',
			},
			sites: {
				title: 'Obras',
				summary: 'Cada obra tiene su propio equipo, fases, planos, presupuesto y documentos.',
				steps: [
					'Crea una obra con su dirección, fechas de inicio y fin y estado.',
					'Define el presupuesto de la obra para compararlo después con lo que gastas.',
					'Da acceso a las personas que trabajan en ella.',
					'Sigue todas tus obras desde una sola lista y archiva las que terminas.',
				],
				who: 'Propietario y Administrador crean obras; el Jefe de Obra edita su obra y su personal; Propietario y Finanzas definen el presupuesto.',
			},
			tasks: {
				title: 'Fases y tareas',
				summary: 'Divide el trabajo en fases y tareas, asigna quién hace qué y sigue el avance.',
				steps: [
					'Divide cada obra en fases, como cimentación, estructura y acabados, con sus fechas.',
					'Agrega tareas a cada fase y asigna un equipo: un Líder, más Maestro de obra y Cuadrilla.',
					'Mueve cada tarea de Por hacer a En curso y a Hecho.',
					'Cada persona ve su trabajo en Mis tareas, y el diagrama de Gantt ordena fases y tareas en el tiempo.',
				],
				who: 'Propietario, Administrador, Superintendente, Jefe de Obra, Residente y Miembro planean el trabajo; los Trabajadores actualizan sus propias tareas.',
				tip: 'Filtra las tareas por estado o por persona para ver qué está detenido.',
			},
			plans: {
				title: 'Planos y zonas',
				summary: 'El corazón de Construx: ubica a la gente y el trabajo sobre los planos de la obra.',
				steps: [
					'Sube tus planos a la biblioteca y ordénalos en carpetas.',
					'Abre un plano, calibra su escala y dibuja zonas como rectángulos o polígonos.',
					'Arrastra personas, cuadrillas o equipo sobre una zona para asignarlos.',
					'Coloca pines para marcar incidencias o notas, con fotos y estado.',
				],
				who: 'Los roles que gestionan planos editan zonas y asignaciones; los demás roles con acceso a los planos de la obra pueden verlas.',
			},
			attendance: {
				title: 'Asistencia',
				summary: 'Sabe quién está hoy en la obra y si está donde se planeó.',
				steps: [
					'Cada persona registra su llegada, opcionalmente en una zona del plano.',
					'Los líderes de cuadrilla pasan lista a toda su cuadrilla en un solo paso.',
					'Construx compara las llegadas con las asignaciones por zona: presente, ausente o no planeado.',
					'Las llegadas alimentan el costo diario de mano de obra y el reporte de obra.',
				],
				who: 'Todos en la obra registran su llegada; los líderes de cuadrilla y quienes gestionan planos pueden registrar a otros.',
				tip: 'No hay registro de salida: una nueva llegada en otra zona simplemente mueve a la persona.',
			},
			finance: {
				title: 'Finanzas',
				summary: 'Compara presupuesto contra gasto por obra, fase y tarea.',
				steps: [
					'Define presupuestos para la obra, sus fases y sus tareas.',
					'Registra gastos por categoría y fecha, en la obra o en una tarea concreta.',
					'Ve el ahorro o el sobrecosto en cuanto se registra un gasto.',
					'Sigue a toda la empresa en el resumen financiero, con el gasto mensual de todas las obras.',
				],
				who: 'Propietario y Finanzas gestionan presupuestos; Administrador y Superintendente pueden consultarlos.',
				tip: 'Solo las obras con presupuesto cuentan en el resumen de la empresa: define uno para cada obra.',
			},
			docs: {
				title: 'Documentos y reportes',
				summary: 'Guarda cada archivo de la obra en un solo lugar y comparte el avance en PDF.',
				steps: [
					'Crea carpetas por obra y sube contratos, permisos, fotos o cualquier otro archivo.',
					'Encuentra cualquier archivo con el buscador.',
					'Genera el reporte de obra: un PDF con tareas, asistencia, gastos y personal.',
					'Descárgalo y envíalo a tu cliente o a la dirección.',
				],
				who: 'Todos los que tienen acceso a la obra ven los documentos; los roles que gestionan la obra suben archivos y generan reportes.',
			},
			soon: {
				title: 'Próximamente',
				summary: 'Lo que estamos construyendo ahora.',
				steps: [
					'Catálogo de precios: importa tus propios costos de materiales y mano de obra para presupuestar más rápido. Está en reconstrucción.',
					'Libros compartidos: las hojas de cálculo integradas ya funcionan en tu navegador y se compartirán con toda tu empresa.',
				],
				who: 'Las empresas en acceso anticipado reciben cada función en cuanto está lista.',
			},
		},
		cta: {
			title: '¿Quieres verlo con tus propias obras?',
			text: 'Construx está en acceso anticipado. Cuéntanos sobre tu empresa y nos pondremos en contacto.',
		},
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
