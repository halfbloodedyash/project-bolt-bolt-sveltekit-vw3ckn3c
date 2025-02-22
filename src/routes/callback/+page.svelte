<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		// The SDK will handle the token exchange automatically
		goto('/');
	});
</script>

<div class="callback-page">
	<div class="loading">
		<p>Connecting to Spotify...</p>
	</div>
</div>

<style>
	.callback-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.loading {
		font-family: var(--font-mono);
		text-align: center;
	}
</style>