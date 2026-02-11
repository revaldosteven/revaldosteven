<script>
	import ProjectGrid from '$lib/components/sections/ProjectGrid.svelte';
	import FadeIn from '$lib/components/animations/FadeIn.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	const seo = generateSEO({
		title: 'Projects',
		description: 'Browse through my portfolio of web development projects',
		url: '/projects'
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					A collection of projects I've worked on, ranging from web applications to mobile apps
				</p>
			</div>
		</FadeIn>
		
		<ProjectGrid />
	</div>
</div>