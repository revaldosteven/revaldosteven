<script>
	import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-svelte';
	import Button from '../ui/Button.svelte';
	import Card from '../ui/Card.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import emailjs from '@emailjs/browser';
	
	let formData = {
		name: '',
		email: '',
		phone: '',
		message: ''
	};
	
	let submitStatus = '';
	let errorMessage = '';
	
	// EmailJS credentials
	const EMAILJS_SERVICE_ID = 'service_s5ydudc';
	const EMAILJS_TEMPLATE_ID = 'template_bm9xb3l';
	const EMAILJS_PUBLIC_KEY = 'SpwjoLQinllt1fgNv';
	
	async function handleSubmit(e) {
		e.preventDefault();
		submitStatus = 'loading';
		errorMessage = '';
		
		try {
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				from_phone: formData.phone || 'Not provided',
				message: formData.message,
				to_name: 'Revaldo Steven',
			};
			
			const response = await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				templateParams,
				EMAILJS_PUBLIC_KEY
			);
			
			console.log('Email sent successfully:', response);
			submitStatus = 'success';
			formData = { name: '', email: '', phone: '', message: '' };
			
			setTimeout(() => {
				submitStatus = '';
			}, 5000);
		} catch (error) {
			console.error('FULL ERROR:', error);
			submitStatus = 'error';
			errorMessage = error.text || error.message || 'Failed to send message. Please try again.';
			
			setTimeout(() => {
				submitStatus = '';
				errorMessage = '';
			}, 5000);
		}
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
						<a href="mailto:revaldosteven1986@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
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
						<a href="tel:+6285932531354" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
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
								Name <span class="text-red-500">*</span>
							</label>
							<input type="text" id="name" bind:value={formData.name} required disabled={submitStatus === 'loading'} class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all" placeholder="Your name" />
						</div>
						
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Email <span class="text-red-500">*</span>
							</label>
							<input type="email" id="email" bind:value={formData.email} required disabled={submitStatus === 'loading'} class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all" placeholder="your.email@example.com" />
						</div>
						
						<div>
							<label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Phone <span class="text-gray-400 text-xs">(optional)</span>
							</label>
							<input type="tel" id="phone" bind:value={formData.phone} disabled={submitStatus === 'loading'} class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all" placeholder="+62 123 456 789" />
						</div>
						
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Message <span class="text-red-500">*</span>
							</label>
							<textarea id="message" bind:value={formData.message} required rows="5" disabled={submitStatus === 'loading'} class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed transition-all" placeholder="Tell me about your project..."></textarea>
						</div>
						
						{#if submitStatus === 'success'}
							<div class="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
								<CheckCircle size={20} class="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
								<div class="flex-1">
									<p class="font-semibold text-green-800 dark:text-green-300">Message sent successfully!</p>
									<p class="text-sm text-green-700 dark:text-green-400 mt-1">Thank you for reaching out. I'll get back to you soon.</p>
								</div>
							</div>
						{/if}
						
						{#if submitStatus === 'error'}
							<div class="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
								<AlertCircle size={20} class="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
								<div class="flex-1">
									<p class="font-semibold text-red-800 dark:text-red-300">Failed to send message</p>
									<p class="text-sm text-red-700 dark:text-red-400 mt-1">{errorMessage}</p>
								</div>
							</div>
						{/if}
						
						<Button type="submit" variant="primary" size="lg" disabled={submitStatus === 'loading'}>
							{#if submitStatus === 'loading'}
								<Loader2 size={20} class="mr-2 animate-spin" />
								Sending...
							{:else}
								Send Message
							{/if}
						</Button>
					</form>
				</Card>
			</div>
		</FadeIn>
	</div>
</section>