<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	
	export let delay = 0;
	export let duration = 600;
	export let direction = 'up'; // up, down, left, right
	
	let visible = false;
	let element;
	
	const directions = {
		up: { y: 40 },
		down: { y: -40 },
		left: { x: -40 },
		right: { x: 40 }
	};
	
	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		
		observer.observe(element);
		
		return () => observer.disconnect();
	});
</script>

<div bind:this={element}>
	{#if visible}
		<div
			in:fly={{ ...directions[direction], duration, delay }}
		>
			<slot />
		</div>
	{/if}
</div>