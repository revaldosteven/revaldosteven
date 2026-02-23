import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeShiki from '@shikijs/rehype';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				[
					rehypeShiki,
					{
						theme: 'github-dark'
					}
				]
			]
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
