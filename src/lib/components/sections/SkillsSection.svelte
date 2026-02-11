<script>
	import { onMount } from 'svelte';
	import { Code2, Database, Wrench } from 'lucide-svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import { skills } from '$lib/data/skills';
	
	const categoryInfo = {
		'Frontend': {
			gradient: 'from-blue-500 to-cyan-500',
			icon: Code2,
			color: '#0ea5e9'
		},
		'Backend': {
			gradient: 'from-purple-500 to-pink-500',
			icon: Database,
			color: '#a855f7'
		},
		'Tools & Others': {
			gradient: 'from-orange-500 to-red-500',
			icon: Wrench,
			color: '#f97316'
		}
	};
	
	let progressValues = {};
	
	onMount(() => {
		// Animate progress bars after a short delay
		setTimeout(() => {
			skills.forEach(skillGroup => {
				skillGroup.items.forEach(skill => {
					progressValues[skill.name] = skill.level;
				});
			});
		}, 300);
	});
</script>

<section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					Technologies and tools I work with
				</p>
			</div>
		</FadeIn>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each skills as skillGroup, i}
				{@const info = categoryInfo[skillGroup.category]}
				<FadeIn delay={i * 150}>
					<div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
						<!-- Header dengan gradient -->
						<div class="flex items-center gap-4 mb-8">
							<div class="relative">
								<!-- Glow effect -->
								<div class="absolute inset-0 bg-gradient-to-br {info.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
								<!-- Icon container -->
								<div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br {info.gradient} flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
									<svelte:component this={info.icon} size={32} />
								</div>
							</div>
							<div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
								<p class="text-sm text-gray-500 dark:text-gray-400">{skillGroup.items.length} skills</p>
							</div>
						</div>
						
						<!-- Skills List -->
						<div class="space-y-5">
							{#each skillGroup.items as skill}
								<div class="group/item">
									<div class="flex items-center justify-between mb-2">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-200">
											{skill.name}
										</span>
										<span class="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r {info.gradient} text-white shadow-md">
											{skill.level}%
										</span>
									</div>
									<!-- Progress bar container -->
									<div class="relative h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
										<!-- Progress bar -->
										<div 
											class="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out shadow-lg bg-gradient-to-r {info.gradient}"
											style="width: {progressValues[skill.name] || 0}%"
										>
											<!-- Shimmer effect -->
											<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	
	.animate-shimmer {
		animation: shimmer 2s infinite;
	}
</style>