<script>
	export let variant = 'primary';
	export let size = 'md';
	export let href = null;
	export let type = 'button';
	
	const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
	
	const variants = {
		primary: 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:from-primary-700 hover:to-blue-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
		secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
		outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500'
	};
	
	const sizes = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-5 py-2.5 text-base',
		lg: 'px-6 py-3 text-lg'
	};
	
	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]}`;
</script>

{#if href}
	<a {href} class={classes}>
		<slot />
	</a>
{:else}
	<button {type} class={classes} on:click>
		<slot />
	</button>
{/if}