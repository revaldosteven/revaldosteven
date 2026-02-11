import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/blog/posts/${params.slug}.md`);
		
		return {
			content: post.default,
			metadata: post.metadata,
			slug: params.slug
		};
	} catch (e) {
		throw error(404, `Post not found: ${params.slug}`);
	}
}