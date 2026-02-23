<script>
	import { Twitter, Linkedin, Facebook, Link2, Check } from 'lucide-svelte';
	
	export let title;
	export let excerpt;
	
	let copied = false;
	let url = '';
	
	$: if (typeof window !== 'undefined') {
		url = window.location.href;
	}
	
	$: encodedUrl = encodeURIComponent(url);
	$: encodedTitle = encodeURIComponent(title);
	
	function copyLink() {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		}
	}
	
	const shareLinks = {
		twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
	};
</script>

<div class="flex items-center gap-3 flex-wrap">
	<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Share:</span>
	
	<a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-all transform hover:scale-110" aria-label="Share on Twitter">
		<Twitter size={18} />
	</a>
	
	<a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-all transform hover:scale-110" aria-label="Share on LinkedIn">
		<Linkedin size={18} />
	</a>
	
	<a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-all transform hover:scale-110" aria-label="Share on Facebook">
		<Facebook size={18} />
	</a>
	
	<button on:click={copyLink} class="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all transform hover:scale-110" aria-label="Copy link">
		{#if copied}
			<Check size={18} class="text-green-600" />
		{:else}
			<Link2 size={18} />
		{/if}
	</button>
</div>