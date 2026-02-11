<script>
	import { Quote, Star } from 'lucide-svelte';
	import Card from '../ui/Card.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import { testimonials } from '$lib/data/testimonials';
</script>

<section class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					What people say about working with me
				</p>
			</div>
		</FadeIn>
		
		<div class="grid md:grid-cols-3 gap-8">
			{#each testimonials as testimonial, i}
				<FadeIn delay={i * 150}>
					<Card padding="lg">
						<div class="relative">
							<Quote class="absolute -top-2 -left-2 text-primary-200 dark:text-primary-900/30" size={48} />
							
							<div class="relative mb-4">
								<div class="flex gap-1 mb-4">
									{#each Array(testimonial.rating) as _}
										<Star size={16} class="fill-yellow-400 text-yellow-400" />
									{/each}
								</div>
								
								<p class="text-gray-600 dark:text-gray-400 italic mb-6">
									"{testimonial.content}"
								</p>
							</div>
							
							<div class="flex items-center gap-4">
								<img src={testimonial.image} alt={testimonial.name} class="w-12 h-12 rounded-full" />
								<div>
									<h4 class="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
									<p class="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
									<p class="text-xs text-primary-600">{testimonial.company}</p>
								</div>
							</div>
						</div>
					</Card>
				</FadeIn>
			{/each}
		</div>
	</div>
</section>