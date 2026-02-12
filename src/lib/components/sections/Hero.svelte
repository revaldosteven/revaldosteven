<script>
	import { onMount } from 'svelte';
	import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-svelte';
	import Button from '../ui/Button.svelte';
	import FadeIn from '../animations/FadeIn.svelte';
	import ParticleBackground from '../animations/ParticleBackground.svelte';
	
	let typedText = '';
	const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer'];
	let roleIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	
	onMount(() => {
		const typeSpeed = 100;
		const deleteSpeed = 50;
		const pauseTime = 2000;
		
		function type() {
			const currentRole = roles[roleIndex];
			
			if (isDeleting) {
				typedText = currentRole.substring(0, charIndex - 1);
				charIndex--;
			} else {
				typedText = currentRole.substring(0, charIndex + 1);
				charIndex++;
			}
			
			let timeout = isDeleting ? deleteSpeed : typeSpeed;
			
			if (!isDeleting && charIndex === currentRole.length) {
				timeout = pauseTime;
				isDeleting = true;
			} else if (isDeleting && charIndex === 0) {
				isDeleting = false;
				roleIndex = (roleIndex + 1) % roles.length;
			}
			
			setTimeout(type, timeout);
		}
		
		type();
	});
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Animated gradient background -->
	<div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
		<div class="absolute inset-0 bg-gradient-to-tr from-primary-100/20 via-transparent to-blue-100/20 dark:from-primary-900/10 dark:to-blue-900/10 animate-pulse"></div>
	</div>
	
	<ParticleBackground />
	
	<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="text-center">
						<FadeIn delay={0}>
				<div class="mb-8">
					<!-- Profile Photo with gradient border -->
					<div class="relative inline-block">
						<div class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
						<div class="relative w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-1.5 shadow-2xl">
							<img 
								src="/img/revaldo.png" 
								alt="Revaldo Steven" 
								class="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
							/>
						</div>
					</div>
				</div>
			</FadeIn>	
			
			<FadeIn delay={100}>
				<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
					Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">Revaldo Steven</span>
				</h1>
			</FadeIn>
			
			<FadeIn delay={200}>
				<div class="h-16 sm:h-20 mb-6">
					<p class="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
						{typedText}<span class="animate-pulse">|</span>
					</p>
				</div>
			</FadeIn>
			
			<FadeIn delay={400}>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
					I build beautiful, functional, and scalable web applications using modern technologies like SvelteKit, React, and Node.js
				</p>
			</FadeIn>
			
			<FadeIn delay={600}>
				<div class="flex flex-col sm:flex-row gap-4 justify-center mb-10">
					<Button href="/projects" variant="primary" size="lg">
						View My Work
						<ArrowRight size={20} class="ml-2" />
					</Button>
					<Button href="/contact" variant="outline" size="lg">
						Get In Touch
					</Button>
				</div>
			</FadeIn>
			
			<FadeIn delay={700}>
				<div class="flex justify-center gap-4 mb-16">
					<a href="https://github.com/revaldosteven" target="_blank" rel="noopener noreferrer" class="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-700 dark:text-gray-300 hover:text-primary-600">
						<Github size={24} />
					</a>
					<a href="https://www.linkedin.com/in/revaldo-steven-655860389/" target="_blank" rel="noopener noreferrer" class="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-700 dark:text-gray-300 hover:text-primary-600">
						<Linkedin size={24} />
					</a>
					<a href="mailto:revaldosteven1986@gmail.com" class="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-gray-700 dark:text-gray-300 hover:text-primary-600">
						<Mail size={24} />
					</a>
				</div>
			</FadeIn>
			
			<FadeIn delay={800}>
				<div class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
					<div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
						<div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2">5+</div>
						<div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
					</div>
					<div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
						<div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2">50+</div>
						<div class="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
					</div>
					<div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
						<div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 mb-2">30+</div>
						<div class="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
					</div>
				</div>
			</FadeIn>
		</div>
	</div>
	
	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2">
			<div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse"></div>
		</div>
	</div>
</section>