export async function load() {
	const postFiles = import.meta.glob('$lib/blog/posts/*.md');
	const posts = [];
	
	for (const path in postFiles) {
		const post = await postFiles[path]();
		const slug = path.split('/').pop().replace('.md', '');
		
		posts.push({
			slug,
			...post.metadata
		});
	}
	
	// Sort by date descending
	posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	
	return {
		posts
	};
}