<script>
	import { ArrowRight, ExternalLink, Github } from 'lucide-svelte';
	import Card from '../ui/Card.svelte';
	import Badge from '../ui/Badge.svelte';
	import Button from '../ui/Button.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import { projects } from '$lib/data/projects';
	
	const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
</script>

<section class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					Some of my recent work
				</p>
			</div>
		</FadeIn>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
			{#each featuredProjects as project, i}
				<FadeIn delay={i * 150}>
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
		
		<FadeIn delay={500}>
			<div class="text-center">
				<Button href="/projects" variant="outline" size="lg">
					View All Projects
					<ArrowRight size={20} class="ml-2" />
				</Button>
			</div>
		</FadeIn>
	</div>
</section>