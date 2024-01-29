<script>
	let team = [
		{ number: '#764', nickname: 'Lazer', fullname: 'Lazer' },
		{ number: '#23', nickname: 'Girlfriend', fullname: 'Nacho Girlfriend' },
		{ number: '#0', nickname: 'Freeze', fullname: 'Freezer Burn' },
		{ number: '#122', nickname: 'Whoops', fullname: 'Whoopsie Daisy' },
		{ number: '#25', nickname: 'Foxy', fullname: 'Foxy Jocie' },
		{ number: '#303', nickname: 'Blitz', fullname: 'sugar blitz' },
		{ number: '#62', nickname: 'Squirrely', fullname: 'Squirrely Temple' },
		{ number: '#8', nickname: 'Maxx', fullname: 'Mad Maxxine' },
		{ number: '#309', nickname: 'Cypher', fullname: 'Cypher' },
		{ number: '#20', nickname: 'Slyde', fullname: 'Slydeways' },
		{ number: '#515', nickname: 'lit', fullname: 'Literally Katie' },
		{ number: '#6', nickname: 'chaos', fullname: 'Chaos party of six' },
		{ number: '#68', nickname: 'Gnome', fullname: "Gaurdin' gnome" },
		{ number: '#210', nickname: 'Giggles', fullname: 'Hits & Giggles' },
		{ number: '#05', nickname: 'kat', fullname: 'Kategory 5' },
		{ number: '#5150', nickname: 'Medic', fullname: 'Mad Medic' },
		{ number: '#101', nickname: 'Shovey', fullname: 'P.S. I shove You' },
		{ number: '#117', nickname: 'Nixie', fullname: 'Nixie' },
		{ number: '#08', nickname: 'stare', fullname: 'Shred Astare' },
		{ number: '#57', nickname: 'Rizzo', fullname: 'Sonic chorizo' },
		{ number: '#86', nickname: 'Twist', fullname: 'Twisted Spinster' },
		{ number: '#17', nickname: "Lil'Dizzy", fullname: 'Dysfunctional Dame' },
		{ number: '#942', nickname: 'Elsa', fullname: '' }
	];

	let gameRoster = ['#764', '#23', '#0'];

	let matchRoster = team.filter((player) => gameRoster.includes(player.number));

	function addToGameRoster(number) {
		if (!gameRoster.includes(number)) {
			gameRoster = [...gameRoster, number];
			matchRoster = team.filter((player) => gameRoster.includes(player.number));
		}
	}

	function selectAll() {
		gameRoster = team.map((player) => player.number);
		matchRoster = [...team];
	}
</script>

<grid>
	<h2>The next match</h2>
	{#each matchRoster as player}
		<namecard>
			<number> {player.number}</number>
			<nickname>{player.nickname}</nickname>
			<fullname> {player.fullname}</fullname>
		</namecard>
	{/each}
	<h2>The whole team</h2>
	<button on:click={selectAll}>Select All</button>

	{#each team as player}
		<namecard on:click={() => addToGameRoster(player.number)}>
			<number> {player.number}</number>
		</namecard>
	{/each}
</grid>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use 'style/baseCamp';
	:global(*) {
		box-sizing: border-box;
	}
	h2 {
		font-size: var(--f_xl);
	}

	grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100vw;
		height: 100vh;
		margin: 0;
		font-size: var(--f_xxl);
		text-transform: uppercase;

		h2 {
			grid-column: span 2;
		}

		namecard {
			display: grid;
			text-align: center;
			border: 2px dotted #000;
			font-weight: 500;
			cursor: pointer;

			number,
			nickname {
				color: var(--orgss);
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
	}

	@media only screen and (min-width: 740px) {
	}

	@media only screen and (min-width: 980px) {
	}
</style>
