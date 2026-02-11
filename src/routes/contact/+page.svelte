<script>
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	const seo = generateSEO({
		title: 'Contact',
		description: 'Get in touch with me for project collaborations or inquiries',
		url: '/contact'
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-800">
	<ContactSection />
</div>