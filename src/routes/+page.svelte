<script>
	import Hero from '$lib/components/sections/Hero.svelte';
	import SkillsSection from '$lib/components/sections/SkillsSection.svelte';
	import ServicesSection from '$lib/components/sections/ServicesSection.svelte';
	import ProjectsPreview from '$lib/components/sections/ProjectsPreview.svelte';
	import TestimonialsSection from '$lib/components/sections/TestimonialsSection.svelte';
	import BlogPreview from '$lib/components/sections/BlogPreview.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { generateSEO } from '$lib/utils/seo';
	
	export let data;
	
	const seo = generateSEO({ url: '/' });
</script>

<SEO 
	title={seo.title}
	description={seo.description}
	keywords={seo.keywords}
	url={seo.url}
/>

<Hero />
<SkillsSection />
<ServicesSection />
<ProjectsPreview />
<TestimonialsSection />
<BlogPreview posts={data.posts || []} />
<ContactSection />
