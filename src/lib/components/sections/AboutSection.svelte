<script>
	import FadeIn from '../animations/FadeIn.svelte';
	import { experience } from '$lib/data/experience';
</script>

<section id="about" class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Passionate developer with a love for clean code and elegant solutions
				</p>
			</div>
		</FadeIn>
		
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<FadeIn delay={200}>
				<div>
					<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
					<p class="text-gray-600 dark:text-gray-400 mb-4">
						I started my journey in web development 5 years ago, and since then, I've been passionate about creating digital experiences that make a difference. My focus is on writing clean, efficient code and building applications that users love.
					</p>
					<p class="text-gray-600 dark:text-gray-400 mb-4">
						I specialize in full-stack development with a strong emphasis on modern JavaScript frameworks like SvelteKit and React. I enjoy tackling complex problems and turning them into simple, beautiful interfaces.
					</p>
					<p class="text-gray-600 dark:text-gray-400">
						When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new technologies.
					</p>
				</div>
			</FadeIn>
			
			<FadeIn delay={400}>
				<div class="space-y-6">
					<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
					{#each experience as exp}
						<div class="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
							<div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600 {exp.current ? 'animate-pulse' : ''}"></div>
							<div class="mb-1">
								<h4 class="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
								<p class="text-primary-600 font-medium">{exp.company}</p>
							</div>
							<p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period} • {exp.location}</p>
							<p class="text-gray-600 dark:text-gray-400 text-sm">{exp.description}</p>
						</div>
					{/each}
				</div>
			</FadeIn>
		</div>
	</div>
</section>