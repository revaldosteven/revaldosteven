import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/blog/posts/${params.slug}.md`);
		
		// Load all posts for related posts
		const postFiles = import.meta.glob('../../../lib/blog/posts/*.md');
		const allPosts = [];
		
		for (const path in postFiles) {
			const p = await postFiles[path]();
			const slug = path.split('/').pop().replace('.md', '');
			
			if (p.metadata && slug !== params.slug) {
				allPosts.push({
					slug,
					...p.metadata
				});
			}
		}
		
		return {
			content: post.default,
			metadata: post.metadata,
			slug: params.slug,
			allPosts
		};
	} catch (e) {
		throw error(404, `Post not found: ${params.slug}`);
	}
}