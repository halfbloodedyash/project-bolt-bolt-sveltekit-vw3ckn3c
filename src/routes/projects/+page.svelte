<script>
	const projects = [
		{
			title: 'AI-Powered Analytics',
			description: 'Built a machine learning pipeline using TensorFlow and Python for real-time data analysis',
			tech: ['Python', 'TensorFlow', 'Docker'],
			link: '#',
			image: '🤖'
		},
		{
			title: 'Blockchain DApp',
			description: 'Developed a decentralized application using Ethereum smart contracts and Web3.js',
			tech: ['Solidity', 'Web3.js', 'React'],
			link: '#',
			image: '⛓️'
		},
		{
			title: 'Cloud Microservices',
			description: 'Architected a scalable microservices system using Kubernetes and AWS',
			tech: ['Kubernetes', 'AWS', 'Node.js'],
			link: '#',
			image: '☁️'
		}
	];
</script>

<svelte:head>
	<title>Projects | Yash Kumar</title>
</svelte:head>

<div class="projects-page">
	<h1>&lt;Projects /&gt;</h1>
	<div class="grid">
		{#each projects as project}
			<div class="card project-card">
				<div class="project-icon">{project.image}</div>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<div class="tech-stack">
					{#each project.tech as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
					}
				</div>
				<a href={project.link} class="project-link">View Project <span class="arrow">→</span></a>
			</div>
		{/each}
		}
	</div>
</div>

<style>
	.projects-page {
		padding: 4rem 1.5rem;
		max-width: var(--max-width);
		margin: 0 auto;
	}

	h1 {
		text-align: center;
		margin-bottom: 3rem;
		color: var(--color-primary);
	}

	.project-card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.project-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.project-link {
		margin-top: auto;
		padding-top: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
</style>