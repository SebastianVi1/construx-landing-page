export const site = {
	name: 'Construx',
	// Set to a form service URL (Formspree, Tally, ...) to enable the contact form.
	// While empty, the form renders disabled and states that it is not connected.
	formEndpoint: '',
	// Optional analytics script URL, injected only when set.
	analyticsSrc: '',
	year: new Date().getFullYear(),
};

export const navItems = [
	{ key: 'product', href: '#product' },
	{ key: 'features', href: '#features' },
	{ key: 'benefits', href: '#benefits' },
	{ key: 'about', href: '#how-it-works' },
	{ key: 'contact', href: '#contact' },
] as const;

export const ctaHref = { primary: '#contact', secondary: '#features' };
