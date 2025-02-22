<script>
	const projects = [
		{
			title: 'AI-Powered Analytics',
			description: 'Built a machine learning pipeline using TensorFlow and Python for real-time data analysis',
			tech: ['Python', 'TensorFlow', 'Docker'],
			link: '#'
		},
		{
			title: 'Blockchain DApp',
			description: 'Developed a decentralized application using Ethereum smart contracts and Web3.js',
			tech: ['Solidity', 'Web3.js', 'React'],
			link: '#'
		},
		{
			title: 'Cloud Microservices',
			description: 'Architected a scalable microservices system using Kubernetes and AWS',
			tech: ['Kubernetes', 'AWS', 'Node.js'],
			link: '#'
		}
	];

	const skills = [
		{
			title: 'Frontend',
			items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS']
		},
		{
			title: 'Backend',
			items: ['Node.js', 'Python', 'Go', 'PostgreSQL']
		},
		{
			title: 'DevOps',
			items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS']
		}
	];

	function downloadResume() {
		// Add your resume download logic here
		console.log('Downloading resume...');
	}
</script>

<svelte:head>
	<title>Yash Kumar - Developer</title>
	<meta name="description" content="Portfolio of Yash Kumar - Developer specializing in modern web technologies" />
</svelte:head>

<div class="tech-background">
	<div class="emoji-grid">
		🚀 💻 ⚡️ 🤖 🔮 ⚙️ 🎮 📱 🌐 🔋 🎯 💡 
	</div>
</div>

<main>
	<section class="section hero">
		<div class="container">
			<div class="terminal">
				<div class="terminal-header">
					<span class="terminal-button red"></span>
					<span class="terminal-button yellow"></span>
					<span class="terminal-button green"></span>
					<span class="terminal-title">bash ~/portfolio</span>
				</div>
				<div class="terminal-content">
					<p><span class="prompt">yash@portfolio</span> <span class="path">~</span> $ whoami</p>
					<h1>Yash Kumar</h1>
					<p><span class="prompt">yash@portfolio</span> <span class="path">~</span> $ cat role.txt</p>
					<p class="subtitle">Developer</p>
					<p><span class="prompt">yash@portfolio</span> <span class="path">~</span> $ cat about.txt</p>
					<p class="bio">
						Passionate developer crafting digital solutions with modern technologies.
						Specialized in cloud-native applications and distributed systems.
					</p>
					<p><span class="prompt">yash@portfolio</span> <span class="path">~</span> $ ./download-resume.sh</p>
					<button class="terminal-btn" on:click={downloadResume}>
						📄 Download Resume
					</button>
					<p class="cursor-line">
						<span class="prompt">yash@portfolio</span> <span class="path">~</span> $ <span class="cursor">█</span>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section">
		<div class="container">
			<h2>&lt;Projects /&gt;</h2>
			<div class="grid">
				{#each projects as project}
					<div class="card">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div class="tech-stack">
							{#each project.tech as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
							}
						</div>
						<a href={project.link}>View Project <span class="arrow">→</span></a>
					</div>
				{/each}
				}
			</div>
		</div>
	</section>

	<section class="section" style="background: var(--color-secondary)">
		<div class="container">
			<h2>&lt;Skills /&gt;</h2>
			<div class="grid">
				{#each skills as category}
					<div class="card">
						<h3>{category.title}</h3>
						<div class="skills-list">
							{#each category.items as skill}
								<span class="skill-tag">{skill}</span>
							{/each}
							}
						</div>
					</div>
				{/each}
				}
			</div>
		</div>
	</section>
</main>

<style>
	.tech-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
		opacity: 0.03;
		overflow: hidden;
	}

	.emoji-grid {
		font-size: 4rem;
		line-height: 1.5;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 2rem;
		animation: float 20s linear infinite;
		white-space: nowrap;
	}

	@keyframes float {
		0% {
			transform: translateY(0) rotate(0deg);
		}
		100% {
			transform: translateY(-100%) rotate(5deg);
		}
	}

	.hero {
		padding: 6rem 0;
	}

	.terminal {
		background: var(--color-card);
		border-radius: 12px;
		border: 1px solid var(--color-border);
		max-width: 800px;
		margin: 0 auto;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.terminal-header {
		background: var(--color-secondary);
		padding: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.terminal-button {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.terminal-button.red { background: #ff5f56; }
	.terminal-button.yellow { background: #ffbd2e; }
	.terminal-button.green { background: #27c93f; }

	.terminal-title {
		margin-left: 1rem;
		font-size: 0.8rem;
		color: var(--color-text);
		opacity: 0.7;
		font-family: var(--font-mono);
	}

	.terminal-content {
		padding: 2rem;
		font-family: var(--font-mono);
	}

	.prompt {
		color: var(--color-accent);
	}

	.path {
		color: var(--color-primary);
	}

	.cursor-line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.cursor {
		animation: blink 1s step-end infinite;
		color: var(--color-primary);
	}

	.terminal-btn {
		background: var(--color-secondary);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-family: var(--font-mono);
		cursor: pointer;
		margin: 1rem 0;
		transition: all 0.2s ease;
	}

	.terminal-btn:hover {
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
	}

	@keyframes blink {
		50% { opacity: 0; }
	}

	h1 {
		font-size: 3rem;
		margin: 0.5rem 0 1rem 0;
		color: var(--color-primary);
	}

	.subtitle {
		font-size: 1.5rem;
		color: var(--color-accent);
		margin: 0.5rem 0;
	}

	.bio {
		max-width: 600px;
		margin: 1.5rem 0;
		font-size: 1.1rem;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--color-primary);
	}

	h3 {
		margin: 0 0 1rem 0;
	}

	.tech-stack, .skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.tech-tag, .skill-tag {
		background: var(--color-secondary);
		color: var(--color-primary);
		padding: 0.25rem 0.75rem;
		border-radius: 16px;
		font-size: 0.9rem;
		font-family: var(--font-mono);
	}

	.arrow {
		display: inline-block;
		transition: transform 0.2s ease;
	}

	a:hover .arrow {
		transform: translateX(4px);
	}
</style>