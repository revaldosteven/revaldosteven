export const defaultSEO = {
	title: 'Revaldo Steven - Full Stack Developer',
	description: 'Portfolio website Revaldo Steven - Full Stack Developer specializing in SvelteKit, React, and Node.js',
	keywords: 'full stack developer, web developer, sveltekit, react, portfolio, revaldo steven',
	author: 'Revaldo Steven',
	siteUrl: 'https://revaldosteven.dev' // Sesuaikan dengan domain Anda
};

export function generateSEO(page = {}) {
	return {
		title: page.title ? `${page.title} | ${defaultSEO.title}` : defaultSEO.title,
		description: page.description || defaultSEO.description,
		keywords: page.keywords || defaultSEO.keywords,
		author: defaultSEO.author,
		url: page.url ? `${defaultSEO.siteUrl}${page.url}` : defaultSEO.siteUrl
	};
}