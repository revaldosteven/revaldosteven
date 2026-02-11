<script>
	import { ArrowLeft } from 'lucide-svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	export let data;
	
	const seo = generateSEO({
		title: data.metadata.title,
		description: data.metadata.excerpt,
		keywords: data.metadata.tags.join(', '),
		url: `/blog/${data.slug}`
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />
	<meta name="author" content={data.metadata.author} />
</svelte:head>

<article class="min-h-screen bg-white dark:bg-gray-900 py-20">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<Button href="/blog" variant="outline" size="sm">
				<ArrowLeft size={16} class="mr-2" />
				Back to Blog
			</Button>
		</div>
		
		<header class="mb-8">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
				{data.metadata.title}
			</h1>
			<div class="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
				<time>{data.metadata.date}</time>
				<span>•</span>
				<span>{data.metadata.author}</span>
			</div>
			<div class="flex flex-wrap gap-2">
				{#each data.metadata.tags as tag}
					<Badge variant="primary">{tag}</Badge>
				{/each}
			</div>
		</header>
		
		<div class="prose prose-lg dark:prose-invert max-w-none
			prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
			prose-p:text-gray-600 dark:prose-p:text-gray-400
			prose-a:text-primary-600 hover:prose-a:text-primary-700
			prose-strong:text-gray-900 dark:prose-strong:text-white
			prose-code:text-primary-600 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
			prose-pre:bg-gray-900 prose-pre:text-gray-100
		">
			<svelte:component this={data.content} />
		</div>
	</div>
</article>