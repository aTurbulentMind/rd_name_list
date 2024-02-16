<script>
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let current = 0;

	let hideNavbar;
</script>

<div class="navbar {hideNavbar ? 'hidden' : ''}">
	<a href="/" class="logo">West Sound Roller Derby</a>
	<nav class:open={isMenuOpen}>
		<!--this is the main navigation menu-->
		<ul>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 0} on:click={() => (current = 0)} href="/addTeamMember"
						>Player Details</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 1} on:click={() => (current = 1)} href="/printMatch"
						>Match</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 2} on:click={() => (current = 2)} href="/warehouse"
						>Warehouse</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 3} on:click={() => (current = 3)} href="/profile">Team Roster</a>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 4} on:click={() => (current = 4)} href="/login"
						>Login</a
					>
				</button>
			</li>
			<li>
				<button on:click={() => (isMenuOpen = false)} on:keydown={() => (isMenuOpen = false)}>
					<a class:current={current === 5} on:click={() => (current = 5)} href="/">Home</a>
				</button>
			</li>
		</ul>
	</nav>
	<button on:click={toggleMenu} on:keydown={() => (isMenuOpen = false)}>
		<div class="burger">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
		</div>
	</button>
</div>


<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}

	.navbar {
		background-color: var(--back_Alt);
		width: 100vw;
		display: flex;
		justify-content: space-between;
		position: fixed;
        top: 0;
		height: 5rem;
		z-index: 950;
		box-shadow: var(--box_Shadow);
		transition: transform 0.2s ease-in-out;

		a,
		select {
			color: var(--text_Alt);
			font-size: var(--f_lg);
			text-shadow: var(--text_Shadow);
		}

		select {
			background: var(--orgs);
		}
	}

	.logo {
		margin: 1%;
		h1 {
			font-size: var(--f_lg);
			margin: var(--marg);
		}
	}

	ul {
		flex-direction: row;
	}

	button {
		all: unset;
	}

	@media only screen and (max-width: 767px) {
		.navbar {
			height: 3rem;

				.logo {
			font-size: var(--f_m);
	}

		}

		nav {
			display: none;
		}

		nav.open {
			display: block;
			position: absolute;
			top: 100%;
			left: 0;
			background-color: var(--orgs);
			width: 100%;
		}
	


}

ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 5vh;
		margin-top: 2vh;
		margin-bottom: 4vh;
		list-style: none;
		font-size: var(--font);

		li {
			button {
				all: unset;
			}
			p {
				margin-top: 1vh;
				margin-bottom: 1vh;
				font-size: var(--f_sm);
				color: var(--highlight);
				text-shadow: var(--text_Shadow);
			}
		}
	}

	.current {
		position: relative;
	}

	.current::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--back_Main);
	}

	.burger {
		height: 30px;
		width: 30px;
		aspect-ratio: 1;
		background-color: transparent;
		
		margin-right: 6vw;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			cursor: pointer;
			transition: transform 0.1s ease-in-out;
			transform: scale(1.2);
		}
	}

	.burger > div {
		height: 2px;
		width: 14px;
		background-color: var(--highlight);
		position: absolute;
	}

	@media only screen and (min-width: 768px) {
		.burger {
			display: none;
		}

		ul {
			flex-direction: row;
		}

		.space {
			margin-right: 2vw;
		}
	}

	@media only screen and (min-width: 740px) {
	}

	@media only screen and (min-width: 980px) {
	}
</style>