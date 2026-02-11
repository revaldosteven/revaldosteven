<script>
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import SkillsSection from '$lib/components/sections/SkillsSection.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	const seo = generateSEO({
		title: 'About',
		description: 'Learn more about John Doe - Full Stack Developer with 5+ years of experience',
		url: '/about'
	});
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>

<AboutSection />
<SkillsSection />