<script>
	import { ArrowRight } from 'lucide-svelte';
	import Card from '../ui/Card.svelte';
	import Badge from '../ui/Badge.svelte';
	import Button from '../ui/Button.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	
	export let posts = [];
	
	const recentPosts = posts.slice(0, 3);
</script>

<section class="py-20 bg-gray-50 dark:bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Blog Posts</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					Thoughts, tutorials, and insights
				</p>
			</div>
		</FadeIn>
		
		{#if recentPosts.length > 0}
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				{#each recentPosts as post, i}
					<FadeIn delay={i * 150}>
						<Card>
							<div class="mb-4">
								<time class="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
							</div>
							<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
								<a href="/blog/{post.slug}" class="hover:text-primary-600">
									{post.title}
								</a>
							</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.excerpt}</p>
							<div class="flex flex-wrap gap-2 mb-4">
								{#each post.tags as tag}
									<Badge>{tag}</Badge>
								{/each}
							</div>
							<a href="/blog/{post.slug}" class="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1">
								Read more
								<ArrowRight size={16} />
							</a>
						</Card>
					</FadeIn>
				{/each}
			</div>
			
			<FadeIn delay={500}>
				<div class="text-center">
					<Button href="/blog" variant="outline" size="lg">
						View All Posts
						<ArrowRight size={20} class="ml-2" />
					</Button>
				</div>
			</FadeIn>
		{:else}
			<p class="text-center text-gray-600 dark:text-gray-400">No blog posts yet. Check back soon!</p>
		{/if}
	</div>
</section>