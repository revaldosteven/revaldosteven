<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	
	export let target = 0;
	export let duration = 2000;
	export let suffix = '';
	export let prefix = '';
	
	const count = tweened(0, {
		duration,
		easing: cubicOut
	});
	
	let observer;
	let element;
	let hasAnimated = false;
	
	onMount(() => {
		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					count.set(target);
					hasAnimated = true;
				}
			},
			{ threshold: 0.5 }
		);
		
		observer.observe(element);
		
		return () => observer.disconnect();
	});
</script>

<div bind:this={element}>
	<span>{prefix}{Math.floor($count)}{suffix}</span>
</div>