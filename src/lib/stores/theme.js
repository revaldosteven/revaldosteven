import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const stored = browser ? localStorage.getItem('theme') : null;
const initialTheme = stored || (browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const theme = writable(initialTheme);

if (browser) {
	theme.subscribe(value => {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
}