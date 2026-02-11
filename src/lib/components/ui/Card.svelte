<script>
	export let hover = true;
	export let padding = 'md'; // sm, md, lg
	
	const paddingSizes = {
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8'
	};
	
	const baseClass = 'bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300';
	const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';
</script>

<div class="{baseClass} {hoverClass} {paddingSizes[padding]}">
	<slot />
</div>