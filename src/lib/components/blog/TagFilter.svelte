<script>
	import Badge from '../ui/Badge.svelte';
	
	export let tags = [];
	export let selectedTag = 'all';
</script>

<div class="flex flex-wrap gap-2">
	<button
		on:click={() => selectedTag = 'all'}
		class="px-4 py-2 rounded-lg font-medium transition-all {selectedTag === 'all' ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}"
	>
		All Posts
	</button>
	{#each tags as tag}
		<button
			on:click={() => selectedTag = tag}
			class="px-4 py-2 rounded-lg font-medium transition-all capitalize {selectedTag === tag ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}"
		>
			{tag}
		</button>
	{/each}
</div>