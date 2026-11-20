import { describe, expect, test } from 'bun:test';
import { pageFromPath, pagePath, sectionHref } from './paths';

describe('pagePath', () => {
	test('maps the guide to a localized route per locale', () => {
		expect(pagePath('es', 'guide')).toBe('/guia/');
		expect(pagePath('en', 'guide')).toBe('/en/guide/');
	});

	test('maps the MCP page to a localized route per locale', () => {
		expect(pagePath('es', 'mcp')).toBe('/mcp/');
		expect(pagePath('en', 'mcp')).toBe('/en/mcp/');
	});

	test('maps home to the locale home', () => {
		expect(pagePath('es', 'home')).toBe('/');
		expect(pagePath('en', 'home')).toBe('/en/');
	});
});

describe('pageFromPath', () => {
	test('recognizes both guide routes, with or without a trailing slash', () => {
		expect(pageFromPath('/guia')).toBe('guide');
		expect(pageFromPath('/guia/')).toBe('guide');
		expect(pageFromPath('/en/guide/')).toBe('guide');
	});

	test('recognizes both MCP routes, with or without a trailing slash', () => {
		expect(pageFromPath('/mcp')).toBe('mcp');
		expect(pageFromPath('/mcp/')).toBe('mcp');
		expect(pageFromPath('/en/mcp')).toBe('mcp');
		expect(pageFromPath('/en/mcp/')).toBe('mcp');
	});

	test('treats everything else as home', () => {
		expect(pageFromPath('/')).toBe('home');
		expect(pageFromPath('/en/')).toBe('home');
	});
});

describe('sectionHref', () => {
	test('keeps in-page anchors on the home page', () => {
		expect(sectionHref('es', 'home', '#features')).toBe('#features');
	});

	test('points anchors back to the locale home from other pages', () => {
		expect(sectionHref('es', 'guide', '#features')).toBe('/#features');
		expect(sectionHref('en', 'guide', '#contact')).toBe('/en/#contact');
		expect(sectionHref('es', 'mcp', '#contact')).toBe('/#contact');
		expect(sectionHref('en', 'mcp', '#contact')).toBe('/en/#contact');
	});
});
