<script>
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';
	
	function toggleTheme() {
		theme.update(t => t === 'dark' ? 'light' : 'dark');
	}
</script>

<button
	on:click={toggleTheme}
	class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
	aria-label="Toggle theme"
>
	{#if $theme === 'dark'}
		<Sun size={20} />
	{:else}
		<Moon size={20} />
	{/if}
</button>