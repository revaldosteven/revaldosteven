<script>
	import { Code2, Palette, Database, Smartphone, Zap, Users, Check } from 'lucide-svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import Card from '../ui/Card.svelte';
	import { services } from '$lib/data/services';
	
	const icons = {
		code: Code2,
		palette: Palette,
		database: Database,
		smartphone: Smartphone,
		zap: Zap,
		users: Users
	};
</script>

<section class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Comprehensive solutions for your digital needs
				</p>
			</div>
		</FadeIn>
		
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service, i}
				{@const Icon = icons[service.icon]}
				<FadeIn delay={i * 100}>
					<Card padding="lg" hover={true}>
						<div class="mb-6">
							<!-- Icon with gradient -->
							<div class="relative inline-block">
								<div class="absolute inset-0 bg-gradient-to-br {service.color} rounded-2xl blur opacity-50"></div>
								<div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br {service.color} flex items-center justify-center text-white shadow-lg">
									<Icon size={32} />
								</div>
							</div>
						</div>
						
						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
							{service.title}
						</h3>
						
						<p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
							{service.description}
						</p>
						
						<ul class="space-y-2">
							{#each service.features as feature}
								<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
									<Check size={16} class="text-primary-600 mt-0.5 flex-shrink-0" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</Card>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>