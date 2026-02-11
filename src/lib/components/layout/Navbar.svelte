<script>
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	
	let mobileMenuOpen = false;
	
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },  // ← TAMBAH INI
		{ href: '/projects', label: 'Projects' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contact', label: 'Contact' }
	];
	
	function isActive(href) {
		if (href === '/') {
			return $page.url.pathname === '/';
		}
		return $page.url.pathname.startsWith(href);
	}
	
	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<a href="/" class="text-xl font-bold text-gray-900 dark:text-white">
				Val<span class="text-primary-600">Boy</span>
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-1">
				{#each navItems as item}
					<a href={item.href} class="px-4 py-2 rounded-lg text-sm font-medium transition-colors {isActive(item.href) ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800'}">
						{item.label}
					</a>
				{/each}
				<ThemeToggle />
			</div>
			
			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center gap-2">
				<ThemeToggle />
				<button on:click={() => mobileMenuOpen = !mobileMenuOpen} class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle menu">
					{#if mobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>
	
	<!-- Mobile Navigation -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-gray-200 dark:border-gray-800">
			<div class="px-4 py-3 space-y-1">
				{#each navItems as item}
					<a href={item.href} on:click={closeMenu} class="block px-4 py-2 rounded-lg text-base font-medium transition-colors {isActive(item.href) ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}">
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>