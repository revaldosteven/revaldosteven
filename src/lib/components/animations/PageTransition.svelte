<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
</script>

<div 
	in:fly={{ y: 20, duration: 300, easing: cubicOut, delay: 150 }}
	out:fade={{ duration: 150 }}
>
	<slot />
</div>