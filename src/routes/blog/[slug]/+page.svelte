<script>
	import { ArrowLeft, Calendar, Clock, User } from 'lucide-svelte';
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import ShareButtons from '$lib/components/blog/ShareButtons.svelte';
	import ReadingProgress from '$lib/components/blog/ReadingProgress.svelte';
	import TableOfContents from '$lib/components/blog/TableOfContents.svelte';
	import RelatedPosts from '$lib/components/blog/RelatedPosts.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	export let data;
	
	const seo = generateSEO({
		title: data.metadata.title,
		description: data.metadata.excerpt,
		keywords: data.metadata.tags.join(', '),
		url: `/blog/${data.slug}`
	});
	
	// Calculate reading time
	function getReadingTime(content) {
		const text = content.replace(/<[^>]*>/g, '');
		const words = text.split(/\s+/).length;
		const minutes = Math.ceil(words / 200);
		return minutes;
	}
	
	$: readingTime = getReadingTime(data.metadata.excerpt || '');
</script>

<ReadingProgress />

<SEO 
	title={seo.title}
	description={seo.description}
	keywords={seo.keywords}
	url={seo.url}
/>

<article class="min-h-screen bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="mb-8">
			<Button href="/blog" variant="outline" size="sm">
				<ArrowLeft size={16} class="mr-2" />
				Back to Blog
			</Button>
		</div>
		
		<div class="grid lg:grid-cols-12 gap-8">
			<!-- Main Content -->
			<div class="lg:col-span-8">
				<header class="mb-8">
					<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
						{data.metadata.title}
					</h1>
					
					<div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
						<div class="flex items-center gap-1">
							<Calendar size={16} />
							<time>{data.metadata.date}</time>
						</div>
						<span>•</span>
						<div class="flex items-center gap-1">
							<User size={16} />
							<span>{data.metadata.author}</span>
						</div>
						<span>•</span>
						<div class="flex items-center gap-1">
							<Clock size={16} />
							<span>{readingTime} min read</span>
						</div>
					</div>
					
					<div class="flex flex-wrap gap-2 mb-6">
						{#each data.metadata.tags as tag}
							<Badge variant="primary">{tag}</Badge>
						{/each}
					</div>
					
					<ShareButtons title={data.metadata.title} excerpt={data.metadata.excerpt} />
				</header>
				
				<div class="prose prose-lg dark:prose-invert max-w-none 
					prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:scroll-mt-20
					prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
					prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline
					prose-strong:text-gray-900 dark:prose-strong:text-white 
					prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
					prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:shadow-lg
					prose-ul:list-disc prose-ul:pl-6
					prose-ol:list-decimal prose-ol:pl-6
					prose-li:text-gray-600 dark:prose-li:text-gray-400 prose-li:my-1
					prose-blockquote:border-l-4 prose-blockquote:border-primary-600 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
					prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8
					prose-hr:border-gray-200 dark:prose-hr:border-gray-800
				">
					<svelte:component this={data.content} />
				</div>
				
				<footer class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
					<ShareButtons title={data.metadata.title} excerpt={data.metadata.excerpt} />
				</footer>
				
				<RelatedPosts 
					currentSlug={data.slug}
					currentTags={data.metadata.tags}
					allPosts={data.allPosts || []}
				/>
			</div>
			
			<!-- Sidebar with TOC -->
			<aside class="lg:col-span-4 hidden lg:block">
				<TableOfContents />
			</aside>
		</div>
	</div>
</article>