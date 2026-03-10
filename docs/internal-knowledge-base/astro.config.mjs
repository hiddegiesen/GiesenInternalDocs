// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'GiesenCloud Internal Knowledge Base',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				nl: {
					label: 'Nederlands',
					lang: 'nl',
				},
			},
			sidebar: [
				{
					label: 'Roasting',
					autogenerate: { directory: 'roasting' },
				},
				{
					label: 'Inventory',
					autogenerate: { directory: 'inventory' },
				},
				{
					label: 'Operations',
					autogenerate: { directory: 'operations' },
				},
				{
					label: 'Quality',
					autogenerate: { directory: 'quality' },
				},
				{
					label: 'Reports',
					autogenerate: { directory: 'reports' },
				},
				{
					label: 'Equipment',
					autogenerate: { directory: 'equipment' },
				},
				{
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				},
				{
					label: 'HubSpot Bridge (Intern)',
					autogenerate: { directory: 'hubspot-bridge-intern' },
				},
				{
					label: 'Support',
					autogenerate: { directory: 'support' },
				},
				{
					label: 'Portals',
					autogenerate: { directory: 'portals' },
				},
			],
		}),
	],
});
