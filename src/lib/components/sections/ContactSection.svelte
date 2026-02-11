<script>
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import Button from '../ui/Button.svelte';
	import Card from '../ui/Card.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	
	let formData = {
		name: '',
		email: '',
		message: ''
	};
	
	let submitStatus = '';
	
	function handleSubmit(e) {
		e.preventDefault();
		submitStatus = 'success';
		console.log('Form submitted:', formData);
		
		formData = { name: '', email: '', message: '' };
		
		setTimeout(() => {
			submitStatus = '';
		}, 3000);
	}
</script>

<section id="contact" class="py-20 bg-white dark:bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<FadeIn>
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					Have a project in mind? Let's work together
				</p>
			</div>
		</FadeIn>
		
		<div class="grid md:grid-cols-3 gap-8">
			<FadeIn delay={100}>
				<Card hover={false}>
					<div class="text-center">
						<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 mb-4">
							<Mail size={24} />
						</div>
						<h3 class="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
						<a href="mailto:revaldosteven1986@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600">
							revaldosteven1986@gmail.com
						</a>
					</div>
				</Card>
			</FadeIn>
			
			<FadeIn delay={200}>
				<Card hover={false}>
					<div class="text-center">
						<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 mb-4">
							<Phone size={24} />
						</div>
						<h3 class="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
						<a href="tel:+6285932531354" class="text-gray-600 dark:text-gray-400 hover:text-primary-600">
							+62 859 325 313 54
						</a>
					</div>
				</Card>
			</FadeIn>
			
			<FadeIn delay={300}>
				<Card hover={false}>
					<div class="text-center">
						<div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 mb-4">
							<MapPin size={24} />
						</div>
						<h3 class="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
						<p class="text-gray-600 dark:text-gray-400">
							Nganjuk, Indonesia
						</p>
					</div>
				</Card>
			</FadeIn>
		</div>
		
		<FadeIn delay={400}>
			<div class="mt-12 max-w-2xl mx-auto">
				<Card>
					<form on:submit={handleSubmit} class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Name
							</label>
							<input type="text" id="name" bind:value={formData.name} required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="Your name" />
						</div>
						
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Email
							</label>
							<input type="email" id="email" bind:value={formData.email} required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white" placeholder="your.email@example.com" />
						</div>
						
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Message
							</label>
							<textarea id="message" bind:value={formData.message} required rows="5" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none" placeholder="Tell me about your project..."></textarea>
						</div>
						
						{#if submitStatus === 'success'}
							<div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-300 text-sm">
								Thank you! Your message has been sent successfully.
							</div>
						{/if}
						
						<Button type="submit" variant="primary" size="lg">
							Send Message
						</Button>
					</form>
				</Card>
			</div>
		</FadeIn>
	</div>
</section>