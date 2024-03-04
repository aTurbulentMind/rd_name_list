<script>
  // Retrieve the match roster data from session storage or initialize an empty array
	let matchRoster = JSON.parse(sessionStorage.getItem('matchRoster')) || [];
	</script>

	<!-- Create a grid layout -->
	<grid>
	{#each matchRoster as player}
		<!-- For each player in the match roster, create a name card -->
		<namecard>
		<!-- Display the player's number -->
		<number> #{player.player_number}</number>
		<!-- Display the player's nickname -->
		<nickname>{player.name}</nickname>
		<!-- Display the player's full name -->
		<fullname> {player.full_name}</fullname>
		</namecard>
	{/each}
	<!-- Add a button to trigger printing -->
	<button on:click={() => window.print()}>Print</button>
</grid>


<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use '../style/baseCamp';
	@page {
		margin: 0;
	}

	:global(*) {
		box-sizing: border-box;
	}

	h2 {
		font-size: var(--f_xl);
	}

	grid {
		display: grid;
		grid-template-columns: 1fr 1fr; 
		grid-template-rows: 1fr 1fr 1fr;
		width: 100vw;
		height: 100vh;
		margin: 0;
		font-size: var(--f_xxxl);
		text-transform: uppercase;
		z-index: 999;

		namecard {
			display: grid;
			text-align: center;
			border: 2px dotted #000;
			font-weight: 500;

			number,
			nickname {
				color: var(--orgs);
				text-shadow: var(--text_Shadow);
			}

			nickname {
				font-size: var(--f_xl);
			}

			fullname {
				color: var(--purps);
				text-shadow: var(--box_Light);
				font-size: var(--f_lg);
			}
		}
		button {
			all: unset;
			cursor: pointer;
			grid-column: span 2;
			text-align: center;
			background-color: var(--grabber);
		}
	}

	@media only screen and (min-width: 740px) {
	}

	@media only screen and (min-width: 980px) {
	}
</style>
