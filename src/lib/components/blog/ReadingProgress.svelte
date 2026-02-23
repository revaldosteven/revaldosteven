<script>
	import { onMount } from 'svelte';
	
	let progress = 0;
	
	function updateProgress() {
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const scrollTop = window.scrollY;
		
		const totalHeight = documentHeight - windowHeight;
		progress = Math.min((scrollTop / totalHeight) * 100, 100);
	}
	
	onMount(() => {
		updateProgress();
		window.addEventListener('scroll', updateProgress);
		
		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<div class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
	<div 
		class="h-full bg-gradient-to-r from-primary-600 to-blue-600 transition-all duration-150 ease-out shadow-lg"
		style="width: {progress}%"
	></div>
</div>