<script>
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		// Handle form submission
		console.log('Form submitted:', formData);
	}
</script>

<svelte:head>
	<title>Contact | Yash Kumar</title>
</svelte:head>

<div class="contact-page">
	<div class="terminal contact-terminal">
		<div class="terminal-header">
			<span class="terminal-button"></span>
			<span class="terminal-button"></span>
			<span class="terminal-button"></span>
		</div>
		<div class="terminal-content">
			<p><span class="prompt">$</span> cat contact.txt</p>
			<h1>Let's Connect 🤝</h1>
			<p class="terminal-text">
				<span class="prompt">$</span> echo "Send me a message and I'll get back to you soon!"
			</p>
			<form on:submit|preventDefault={handleSubmit} class="contact-form">
				<div class="form-group">
					<label for="name">
						<span class="prompt">$</span> name=
					</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						placeholder="John Doe"
					/>
				</div>
				<div class="form-group">
					<label for="email">
						<span class="prompt">$</span> email=
					</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						placeholder="john@example.com"
					/>
				</div>
				<div class="form-group">
					<label for="message">
						<span class="prompt">$</span> message=
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						placeholder="Your message here..."
						rows="4"
					></textarea>
				</div>
				<button type="submit" class="submit-btn">
					<span class="prompt">$</span> ./send-message.sh
				</button>
			</form>
		</div>
	</div>
</div>

<style>
	.contact-page {
		padding: 4rem 1.5rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.contact-terminal {
		background: var(--color-card);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		overflow: hidden;
	}

	.terminal-header {
		background: var(--color-secondary);
		padding: 0.5rem;
		display: flex;
		gap: 0.5rem;
	}

	.terminal-button {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--color-border);
	}

	.terminal-content {
		padding: 2rem;
		font-family: var(--font-mono);
	}

	.prompt {
		color: var(--color-accent);
		margin-right: 0.5rem;
	}

	.contact-form {
		margin-top: 2rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-family: var(--font-mono);
	}

	input, textarea {
		width: 100%;
		padding: 0.75rem;
		background: var(--color-secondary);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		color: var(--color-text);
		font-family: var(--font-mono);
	}

	input:focus, textarea:focus {
		outline: none;
		border-color: var(--color-primary);
	}

	.submit-btn {
		background: var(--color-primary);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		cursor: pointer;
		font-family: var(--font-mono);
		transition: background-color 0.2s ease;
	}

	.submit-btn:hover {
		background: var(--color-accent);
	}
</style>