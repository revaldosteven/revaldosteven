<script>
	import { onMount } from 'svelte';
	
	let canvas;
	let ctx;
	let particles = [];
	let animationId;
	
	class Particle {
		constructor(canvas) {
			this.canvas = canvas;
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
			this.size = Math.random() * 3 + 1;
			this.speedX = Math.random() * 0.5 - 0.25;
			this.speedY = Math.random() * 0.5 - 0.25;
			this.opacity = Math.random() * 0.5 + 0.2;
		}
		
		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			
			if (this.x > this.canvas.width) this.x = 0;
			if (this.x < 0) this.x = this.canvas.width;
			if (this.y > this.canvas.height) this.y = 0;
			if (this.y < 0) this.y = this.canvas.height;
		}
		
		draw(ctx) {
			ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	
	onMount(() => {
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		// Create particles
		for (let i = 0; i < 50; i++) {
			particles.push(new Particle(canvas));
		}
		
		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			
			particles.forEach(particle => {
				particle.update();
				particle.draw(ctx);
			});
			
			// Draw connections
			particles.forEach((p1, i) => {
				particles.slice(i + 1).forEach(p2 => {
					const dx = p1.x - p2.x;
					const dy = p1.y - p2.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					
					if (distance < 100) {
						ctx.strokeStyle = `rgba(14, 165, 233, ${0.2 * (1 - distance / 100)})`;
						ctx.lineWidth = 0.5;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				});
			});
			
			animationId = requestAnimationFrame(animate);
		}
		
		animate();
		
		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvas} class="absolute inset-0 pointer-events-none opacity-40" />