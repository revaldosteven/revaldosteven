<script>
	import { Github, Linkedin, Mail, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Brand -->
			<div>
				<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">
					Val<span class="text-primary-600">Boy</span>
				</h3>
				<p class="text-gray-600 dark:text-gray-400 text-sm">
					Full Stack Developer passionate about creating beautiful and functional web applications.
				</p>
			</div>
			
			<!-- Quick Links -->
			<div>
				<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
				<ul class="space-y-2">
					<li><a href="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm">About</a></li>
					<li><a href="/services" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm">Services</a></li>
					<li><a href="/projects" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm">Projects</a></li>
					<li><a href="/blog" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm">Blog</a></li>
					<li><a href="/contact" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 text-sm">Contact</a></li>
				</ul>
			</div>
			
			<!-- Social -->
			<div>
				<h4 class="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
				<div class="flex space-x-4">
					<a href="https://github.com/revaldosteven" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
						<Github size={20} />
					</a>
					<a href="https://www.linkedin.com/in/revaldo-steven-655860389/" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
						<Linkedin size={20} />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
						<Twitter size={20} />
					</a>
					<a href="mailto:revaldosteven1986@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
						<Mail size={20} />
					</a>
				</div>
			</div>
		</div>
		
		<div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
			<p class="text-sm text-gray-600 dark:text-gray-400">
				&copy; {new Date().getFullYear()} Revaldo Steven. All rights reserved.
			</p>
		</div>
	</div>
</footer>