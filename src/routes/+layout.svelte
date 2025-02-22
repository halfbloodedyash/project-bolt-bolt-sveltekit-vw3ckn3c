<script>
	import Header from './Header.svelte';
	import NowPlaying from '$lib/components/NowPlaying.svelte';
	import '../app.css';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme') || 'light';
		theme.set(savedTheme);
	});
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<NowPlaying />
	<footer>
		<div class="container">
			<div class="social-links">
				<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
					<span class="social-icon">📦</span> GitHub
				</a>
				<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
					<span class="social-icon">💼</span> LinkedIn
				</a>
				<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
					<span class="social-icon">🐦</span> Twitter
				</a>
			</div>
			<p class="footer-text">Made with 💖 by Yash</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	footer {
		padding: 2rem 0;
		background: var(--color-secondary);
		border-top: 1px solid var(--color-border);
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 1rem;
	}

	.social-links a {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-text);
		text-decoration: none;
		font-family: var(--font-mono);
		transition: color 0.2s ease;
	}

	.social-links a:hover {
		color: var(--color-primary);
	}

	.social-icon {
		font-size: 1.2rem;
	}

	.footer-text {
		text-align: center;
		font-family: var(--font-mono);
		color: var(--color-text);
		margin: 0;
	}
</style>