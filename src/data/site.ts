export const site = {
	name: 'Construx',
	tagline: 'Take Control of Every Construction Project.',
	// Set to a form service URL (Formspree, Tally, ...) to enable the contact form.
	// While empty, the form renders disabled and states that it is not connected.
	formEndpoint: '',
	// Optional analytics script URL, injected only when set.
	analyticsSrc: '',
	year: new Date().getFullYear(),
};

export const navLinks = [
	{ label: 'Product', href: '#product' },
	{ label: 'Features', href: '#features' },
	{ label: 'Benefits', href: '#benefits' },
	{ label: 'About', href: '#how-it-works' },
	{ label: 'Contact', href: '#contact' },
];

export const cta = {
	primary: { label: 'Get Early Access', href: '#contact' },
	secondary: { label: 'Explore Features', href: '#features' },
};
