<script>
	import { onMount } from 'svelte';
	
	let headings = [];
	let activeId = '';
	
	onMount(() => {
		// Get all h2 and h3 headings
		const articleHeadings = document.querySelectorAll('article h2, article h3');
		
		headings = Array.from(articleHeadings).map((heading, index) => {
			const id = heading.id || `heading-${index}`;
			heading.id = id;
			
			return {
				id,
				text: heading.textContent,
				level: heading.tagName
			};
		});
		
		// Track active heading on scroll
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{ rootMargin: '-20% 0px -80% 0px' }
		);
		
		articleHeadings.forEach(heading => {
			observer.observe(heading);
		});
		
		return () => observer.disconnect();
	});
	
	function scrollToHeading(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

{#if headings.length > 0}
	<div class="sticky top-24 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg">
		<h3 class="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
			Table of Contents
		</h3>
		<nav>
			<ul class="space-y-2 text-sm">
				{#each headings as heading}
					<li class="{heading.level === 'H3' ? 'ml-4' : ''}">
						<button
							on:click={() => scrollToHeading(heading.id)}
							class="text-left w-full hover:text-primary-600 dark:hover:text-primary-400 transition-colors {activeId === heading.id ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-gray-600 dark:text-gray-400'}"
						>
							{heading.text}
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/if}