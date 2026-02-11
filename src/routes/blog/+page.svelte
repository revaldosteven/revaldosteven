<script>
	import { ArrowRight, Calendar, Clock } from 'lucide-svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import FadeIn from '$lib/components/animations/FadeIn.svelte';
	import SearchBar from '$lib/components/blog/SearchBar.svelte';
	import TagFilter from '$lib/components/blog/TagFilter.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	export let data;
	
	let searchQuery = '';
	let selectedTag = 'all';
	
	// Get all unique tags
	$: allTags = [...new Set(data.posts.flatMap(post => post.tags))];
	
	// Filter posts based on search and tag
	$: filteredPosts = data.posts.filter(post => {
		const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
							post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
		return matchesSearch && matchesTag;
	});
	
	// Calculate reading time (rough estimate)
	function getReadingTime(content) {
		const wordsPerMinute = 200;
		const words = content.split(' ').length;
		const minutes = Math.ceil(words / wordsPerMinute);
		return minutes;
	}
	
	const seo = generateSEO({
		title: 'Blog',
		description: 'Read my latest articles about web development, programming, and technology',
		url: '/blog'
	});
</script>

<SEO 
	title={seo.title}
	description={seo.description}
	keywords={seo.keywords}
	url={seo.url}
/>

<div class="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-12">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Thoughts, tutorials, and insights about web development
				</p>
			</div>
		</FadeIn>
		
		<!-- Search and Filter -->
		<FadeIn delay={100}>
			<div class="mb-12 space-y-6">
				<SearchBar bind:value={searchQuery} />
				<TagFilter tags={allTags} bind:selectedTag />
			</div>
		</FadeIn>
		
		<!-- Results count -->
		<FadeIn delay={200}>
			<div class="mb-8">
				<p class="text-gray-600 dark:text-gray-400">
					{filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
				</p>
			</div>
		</FadeIn>
		
		{#if filteredPosts.length > 0}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredPosts as post, i}
					<FadeIn delay={i * 100}>
						<Card hover={true}>
							<!-- Featured image placeholder -->
							<div class="aspect-video bg-gradient-to-br from-primary-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-2xl">
								{post.title.charAt(0)}
							</div>
							
							<div class="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
								<div class="flex items-center gap-1">
									<Calendar size={16} />
									<time>{post.date}</time>
								</div>
								<div class="flex items-center gap-1">
									<Clock size={16} />
									<span>{post.readingTime || 5} min read</span>
								</div>
							</div>
							
							<h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
								<a href="/blog/{post.slug}" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
									{post.title}
								</a>
							</h2>
							
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
							
							<div class="flex flex-wrap gap-2 mb-4">
								{#each post.tags as tag}
									<Badge variant="primary">{tag}</Badge>
								{/each}
							</div>
							
							<a href="/blog/{post.slug}" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium inline-flex items-center gap-1 group">
								Read more
								<ArrowRight size={16} class="group-hover:translate-x-1 transition-transform" />
							</a>
						</Card>
					</FadeIn>
				{/each}
			</div>
		{:else}
			<div class="text-center py-12">
				<p class="text-gray-600 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
				<button 
					on:click={() => { searchQuery = ''; selectedTag = 'all'; }}
					class="mt-4 text-primary-600 hover:text-primary-700 font-medium"
				>
					Clear filters
				</button>
			</div>
		{/if}
	</div>
</div>