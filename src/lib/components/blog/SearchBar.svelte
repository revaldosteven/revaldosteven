<script>
	import { Search, X } from 'lucide-svelte';
	
	export let value = '';
	export let placeholder = 'Search articles...';
	
	function clear() {
		value = '';
	}
</script>

<div class="relative">
	<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
		<Search class="text-gray-400" size={20} />
	</div>
	<input
		type="text"
		bind:value
		{placeholder}
		class="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
	/>
	{#if value}
		<button
			on:click={clear}
			class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
		>
			<X size={20} />
		</button>
	{/if}
</div>