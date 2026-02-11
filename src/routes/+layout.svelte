<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import PageTransition from '$lib/components/animations/PageTransition.svelte';
	import { onMount } from 'svelte';
	
	onMount(() => {
		const theme = localStorage.getItem('theme') || 
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark', theme === 'dark');
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
	<Navbar />
	<main class="flex-1">
		{#key $page.url.pathname}
			<PageTransition>
				<slot />
			</PageTransition>
		{/key}
	</main>
	<Footer />
</div>