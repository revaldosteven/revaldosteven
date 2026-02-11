<script>
	import { ExternalLink, Github } from 'lucide-svelte';
	import Card from '../ui/Card.svelte';
	import Badge from '../ui/Badge.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import { projects, categories } from '$lib/data/projects';
	
	let selectedCategory = 'all';
	
	$: filteredProjects = selectedCategory === 'all' 
		? projects 
		: projects.filter(p => p.category === selectedCategory);
</script>

<div class="mb-8 flex flex-wrap gap-2 justify-center">
	{#each categories as category}
		<button on:click={() => selectedCategory = category} class="px-4 py-2 rounded-lg font-medium transition-all capitalize {selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}">
			{category}
		</button>
	{/each}
</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
	{#each filteredProjects as project, i}
		<FadeIn delay={i * 100}>
			<Card>
				<div class="aspect-video rounded-lg overflow-hidden mb-4">
					<img src={project.image} alt={project.title} class="w-full h-full object-cover" />
				</div>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
				<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
				<div class="flex flex-wrap gap-2 mb-4">
					{#each project.tags as tag}
						<Badge variant="primary">{tag}</Badge>
					{/each}
				</div>
				<div class="flex gap-2">
					<a href={project.demoUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium">
						<ExternalLink size={16} />
						Demo
					</a>
					<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium">
						<Github size={16} />
						Code
					</a>
				</div>
			</Card>
		</FadeIn>
	{/each}
</div>