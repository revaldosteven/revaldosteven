export async function load() {
	try {
		const postFiles = import.meta.glob('$lib/blog/posts/*.md');
		const posts = [];
		
		for (const path in postFiles) {
			const post = await postFiles[path]();
			const slug = path.split('/').pop().replace('.md', '');
			
			if (post.metadata) {
				posts.push({
					slug,
					...post.metadata
				});
			}
		}
		
		posts.sort((a, b) => new Date(b.date) - new Date(a.date));
		
		return {
			posts: posts.slice(0, 3) // Only 3 for homepage
		};
	} catch (error) {
		console.error('Error loading posts:', error);
		return {
			posts: []
		};
	}
}