<script>
	import { Code2, Palette, Database, Smartphone, Zap, Users, ArrowRight } from 'lucide-svelte';
	import FadeIn from '$lib/components/animations/FadeIn.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { generateSEO } from '$lib/utils/seo';
	import { services } from '$lib/data/services';
	
	const icons = {
		code: Code2,
		palette: Palette,
		database: Database,
		smartphone: Smartphone,
		zap: Zap,
		users: Users
	};
	
	const seo = generateSEO({
		title: 'Services',
		description: 'Professional web development, UI/UX design, and consulting services',
		url: '/services'
	});
</script>

<SEO 
	title={seo.title}
	description={seo.description}
	keywords={seo.keywords}
	url={seo.url}
/>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section class="relative py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<FadeIn>
				<div class="text-center mb-16">
					<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Services I <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Offer</span>
					</h1>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						From concept to deployment, I provide end-to-end solutions tailored to your needs
					</p>
				</div>
			</FadeIn>
		</div>
	</section>
	
	<!-- Services Grid -->
	<section class="py-20 bg-gray-50 dark:bg-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each services as service, i}
					{@const Icon = icons[service.icon]}
					<FadeIn delay={i * 100}>
						<Card padding="lg" hover={true}>
							<div class="mb-6">
								<div class="relative inline-block">
									<div class="absolute inset-0 bg-gradient-to-br {service.color} rounded-2xl blur-md opacity-50"></div>
									<div class="relative w-16 h-16 rounded-2xl bg-gradient-to-br {service.color} flex items-center justify-center text-white shadow-lg">
										<Icon size={32} />
									</div>
								</div>
							</div>
							
							<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
								{service.title}
							</h3>
							
							<p class="text-gray-600 dark:text-gray-400 mb-6">
								{service.description}
							</p>
							
							<div class="space-y-3 mb-6">
								<p class="text-sm font-semibold text-gray-900 dark:text-white">What's included:</p>
								<ul class="space-y-2">
									{#each service.features as feature}
										<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
											<div class="w-1.5 h-1.5 rounded-full bg-gradient-to-r {service.color} mt-2"></div>
											<span>{feature}</span>
										</li>
									{/each}
								</ul>
							</div>
						</Card>
					</FadeIn>
				{/each}
			</div>
		</div>
	</section>
	
	<!-- CTA Section -->
	<section class="py-20 bg-white dark:bg-gray-900">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
			<FadeIn>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
					Ready to Start Your Project?
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 mb-8">
					Let's discuss how I can help bring your ideas to life
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<Button href="/contact" variant="primary" size="lg">
						Get In Touch
						<ArrowRight size={20} class="ml-2" />
					</Button>
					<Button href="/projects" variant="outline" size="lg">
						View My Work
					</Button>
				</div>
			</FadeIn>
		</div>
	</section>
</div>