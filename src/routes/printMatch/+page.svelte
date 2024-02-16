<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { supabase } from '$lib/supabaseClient';

let data = [];
let gameRoster = [];
let matchRoster = [];

onMount(async () => {
    let { data: rstr, error } = await supabase
        .from('rstr')
        .select('*')

    if (error) console.error(error);
    else data = rstr.map(item => ({...item, selected: false}));
});

function addToGameRoster(number) {
    const index = data.findIndex(item => item.player_number === number);
    data[index].selected = true;
    gameRoster = data.filter(item => item.selected);
    matchRoster = [...gameRoster];
}

function removeFromGameRoster(number) {
    const index = data.findIndex(item => item.player_number === number);
    data[index].selected = false;
    gameRoster = data.filter(item => item.selected);
    matchRoster = [...gameRoster];
}


function selectAll() {
    data = data.map(item => ({...item, selected: true}));
    gameRoster = data.filter(item => item.selected);
    matchRoster = [...gameRoster];
}

function unselectAll() {
    data = data.map(item => ({...item, selected: false}));
    gameRoster = [];
    matchRoster = [];
}


// Function to generate the match page and store the match roster in session storage
function generateMatchPage() {
    console.log("Generating match page");
    // Store the match roster in session storage as JSON
    sessionStorage.setItem('matchRoster', JSON.stringify(matchRoster));
    console.log("Stored matchRoster in session storage: ", matchRoster);
    // Navigate to the match page
    goto('/match');
}
</script>

<h1>Print match page</h1>

<p class="larrg">This should be viewed of a full sceen</p>

<grid>

<h2>The whole team</h2>





<button style="background-color: var(--grabber); text-align:center;" on:click={selectAll}>Select All</button>
<button style="background-color: var(--halter); text-align:center;" on:click={unselectAll}>Unselect All</button>

{#each data as item (item.player_number)}
    <rosterPick>
        <number>{item.player_number}</number>
        <button class:added={item.selected} on:click={() => addToGameRoster(item.player_number)}>✔️</button>
        <button class:unadded={!item.selected} on:click={() => removeFromGameRoster(item.player_number)}>✖️</button>
    </rosterPick>
{/each}

	<h2>Print</h2>
	<button
		style="background-color: var(--purps); font-size:var(--f_xl);"
		on:click={generateMatchPage}>Generate Match Page</button
	>

<h2>The next match</h2>

{#each matchRoster as player}
<namecard>
    <number> {player.player_number}</number>
    <nickname>{player.name}</nickname>
    <fullname> {player.full_name}</fullname>
</namecard>
{/each}


</grid>
<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use '../style/baseCamp';
	:global(*) {
		box-sizing: border-box;
	}

	  h1{
    text-align: center;
    margin: 10%;
  }


	h2 {
		font-size: var(--f_xl);
	}

	button {
		all: unset;
		cursor: pointer;
		margin: 5%;
		font-size: var(--f_xl);
		color: var(--back_Main);
		padding: 2%;
		border-radius: var(--rad);
	}

	img{
		width: 20vw;
	}

	grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 90vw;
		height: 100vh;
		margin: 0 5vw;
		font-size: var(--f_xxl);
		text-transform: uppercase;

		h2 {
			grid-column: span 2;
		}

		rosterPick {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;

			number {
				font-size: var(--f_xl);
				display: grid;
			}

			button {
				font-size: var(--f_lg);
				display: grid;
			}

			.added {
				background-color: var(--go_Go_Go);
				height: fit-content;
				width: fit-content;
				border-radius: 50%;
			}

			.unadded {
				background-color: var(--halter);
				height: fit-content;
				width: fit-content;
				border-radius: 50%;
			}
		}

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

			button {
				cursor: pointer;
			}
		}
	}

    .larrg{
    display: none;
  }

  	@media only screen and (max-width: 740px) {
      .larrg{
        display: block;
      }
	}

	@media only screen and (min-width: 980px) {
	}
</style>
