<script>
	import { page } from '$app/stores';
	import { theme } from '$lib/stores/theme';

	function toggleTheme() {
		theme.update(current => current === 'light' ? 'dark' : 'light');
	}

	const tabs = [
		{ path: '/', label: 'Home' },
		{ path: '/projects', label: 'Projects' },
		{ path: '/contact', label: 'Contact' }
	];
</script>

<header>
	<div class="container">
		<nav>
			<div class="logo">
				<code>&lt;YK /&gt;</code>
			</div>
			<div class="tabs-container">
				{#each tabs as tab}
					<a 
						href={tab.path}
						class="tab"
						class:active={$page.url.pathname === tab.path}
					>
						<div class="tab-background"></div>
						<div class="tab-content">
							{tab.label}
						</div>
					</a>
				{/each}
				}
			</div>
			<button class="theme-toggle" on:click={toggleTheme}>
				{#if $theme === 'light'}
					<span>🌙</span>
				{:else}
					<span>☀️</span>
				{/if}
				}
				<span class="mode-text">{$theme} mode</span>
			</button>
		</nav>
	</div>
</header>

<style>
	header {
		padding: 1rem 0;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 100;
		backdrop-filter: blur(10px);
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		flex-shrink: 0;
	}

	.tabs-container {
		display: flex;
		gap: 0.25rem;
		height: 40px;
		flex: 1;
		max-width: 600px;
		margin: 0 auto;
	}

	.tab {
		position: relative;
		height: 100%;
		padding: 0 20px;
		color: var(--color-text);
		text-decoration: none;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		border-radius: 8px 8px 0 0;
		overflow: hidden;
		transition: color 0.2s ease;
	}

	.tab-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: var(--color-secondary);
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.tab-content {
		position: relative;
		z-index: 1;
	}

	.tab:hover .tab-background {
		opacity: 0.5;
	}

	.tab.active {
		color: var(--color-primary);
	}

	.tab.active .tab-background {
		opacity: 1;
	}

	.theme-toggle {
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		flex-shrink: 0;
	}

	.theme-toggle:hover {
		color: var(--color-primary);
	}

	.mode-text {
		display: none;
	}

	@media (min-width: 768px) {
		.mode-text {
			display: inline;
		}
	}
</style>