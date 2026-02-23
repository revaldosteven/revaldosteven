<script>
	import { ArrowRight } from 'lucide-svelte';
	import Card from '../ui/Card.svelte';
	import Badge from '../ui/Badge.svelte';
	
	export let currentSlug;
	export let currentTags;
	export let allPosts;
	
	$: relatedPosts = allPosts
		.filter(post => post.slug !== currentSlug)
		.map(post => {
			const sharedTags = post.tags.filter(tag => currentTags.includes(tag));
			return {
				...post,
				relevance: sharedTags.length
			};
		})
		.filter(post => post.relevance > 0)
		.sort((a, b) => b.relevance - a.relevance)
		.slice(0, 3);
</script>

{#if relatedPosts.length > 0}
	<section class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Articles</h2>
		
		<div class="grid md:grid-cols-3 gap-6">
			{#each relatedPosts as post}
				<Card hover={true}>
					<div class="aspect-video bg-gradient-to-br from-primary-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-3xl">
						{post.title.charAt(0)}
					</div>
					
					<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
						<a href="/blog/{post.slug}" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
							{post.title}
						</a>
					</h3>
					
					<p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{post.excerpt}</p>
					
					<div class="flex flex-wrap gap-2 mb-3">
						{#each post.tags.slice(0, 2) as tag}
							<Badge variant="primary">{tag}</Badge>
						{/each}
					</div>
					
					<a href="/blog/{post.slug}" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium inline-flex items-center gap-1 group">
						Read more
						<ArrowRight size={14} class="group-hover:translate-x-1 transition-transform" />
					</a>
				</Card>
			{/each}
		</div>
	</section>
{/if}