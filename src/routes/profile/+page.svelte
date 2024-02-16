<script>
    import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  let players = [];
  let showModal = false;
  let selectedPlayer = null;
  let selectedPlayerImage = '';


onMount(async () => {
  // Fetch all players from the 'main' table
  const { data: allPlayersData, error: allPlayersError } = await supabase
    .from('main')
    .select('id, name');

  // If there's an error in fetching data from the 'main' table, log the error and return
  if (allPlayersError) {
    console.error(allPlayersError);
    return;
  }

  // Fetch player data from the 'rstr' table, including 'player_number', 'name', and 'full_name'
  const { data: playerData, error } = await supabase
    .from('rstr')
    .select('player_number, name, full_name');

  // If there's an error in fetching data from the 'rstr' table, log the error and return
  if (error) {
    console.error(error);
    return;
  }

  // Assign the fetched data from the 'main' table to the 'players' variable
  players = allPlayersData;

  // Overwrite the 'players' variable with the fetched data from the 'rstr' table
  players = playerData;
});

async function showPlayerDetails(player) {
  // Set the selected player
  selectedPlayer = player;

  // Fetch the details of the selected player from the 'details' table
  const { data: detailsData, error } = await supabase
    .from('details')
    .select('role, from_location, hobbies, story')
    .eq('name', player.name);

  // If there's an error in fetching details, log the error and return
  if (error) {
    console.error(error);
    return;
  }

  // If there are details for the selected player, assign the first record to 'selectedPlayer.details'
  if (detailsData.length > 0) {
    selectedPlayer.details = detailsData[0];
  }

  // Fetch the image of the selected player
  await fetchPlayerImage();

  // Show the modal
  showModal = true;
}

async function fetchPlayerImage() {
  // Log the name of the selected player for whom the image is being fetched
  console.log('Fetching image for player:', selectedPlayer.name);

  // Construct the file path for the selected player's image
  const filePath = `${selectedPlayer.name}.jpg`;

  // Construct the public URL for the selected player's image
  const publicURL = `https://janbwnvcsnjlwlxweqwp.supabase.co/storage/v1/object/public/profile_Pics/${filePath}`;

  // Log the constructed image URL
  console.log('Constructed image URL:', publicURL);

  // Assign the public URL of the selected player's image to 'selectedPlayerImage'
  selectedPlayerImage = publicURL;

  // Log the selected player's image
  console.log('Selected player image:', selectedPlayerImage);
}


</script>

<!-- Display the player details heading -->
<h1>Player details</h1>
<p>click a player card to learn more about them</p>

<!-- Create a grid layout for the player details -->
<grid>
  <!-- Loop through each player in the 'players' array -->
  {#each players as player (player.player_number)}
    <!-- Create a button for each player. When clicked, it will call the 'showPlayerDetails' function with the current player. When the button changes, it will call the 'fetchPlayerImage' function. -->
    <button 
    on:click={() => showPlayerDetails(player)}
    on:change={fetchPlayerImage}
    >
      <!-- Display the player's number and name inside a 'profile' tag -->
      <profile>
        <number>
          #{player.player_number}
        </number>
        <name>
          {player.name}
        </name>
      </profile>
    </button>    
  {/each}
</grid>

<!-- If 'showModal' is true, display a modal with the selected player's details -->
{#if showModal}
  <div class="modal-background">
    <div class="modal">

  <!-- If 'selectedPlayerImage' is not null, display the selected player's image -->
  {#if selectedPlayerImage}
  <img src={selectedPlayerImage} alt={selectedPlayer.name} />
  {/if}
      <!-- Display the selected player's number, name, and full name -->
      <p>Number: {selectedPlayer.player_number}</p>
      <p>Name: {selectedPlayer.name}</p>
      <p>Full Name: {selectedPlayer.full_name}</p>
      <!-- If 'selectedPlayer.details' is not null, display the selected player's role, location, hobbies, and story -->
      {#if selectedPlayer.details}
        <p>Role: {selectedPlayer.details.role}</p>
        <p>From: {selectedPlayer.details.from_location}</p>
        <p>Hobbies: {selectedPlayer.details.hobbies}</p>
        <p>Story: {selectedPlayer.details.story}</p>
      {/if}
      <!-- Add a 'Close' button that hides the modal when clicked -->
      <button on:click={() => showModal = false}>Close</button>
    </div>
  </div>
{/if}






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

  p{
    text-align: center;
    text-transform: uppercase;
  }


    grid{
      
    text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
        margin: 5% 0 5% 15%;

      button{
        all:unset;
        cursor: pointer;
        background-color: var(--purps);
        width: 8vw;
        padding: 1%;
        border-radius: var(--rad);

                profile{
                  display: grid;
                  color: var(--back_Main);
                  font-size: var(--f_lg);
        }
    }
        

    }

.modal {
  /* Center the modal */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Style the modal */
  background-color:  rgba(128, 0, 128, 0.849);
  color: var(--back_Main);
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;


  p{
    margin:3% 0;
  }

  
  /* Blur the background */
  backdrop-filter: blur(5px);

  img{
    width: 70%;
    margin:5% 15%;
  }

  button{
    font-size: var(--f_lg);
  }
}

.modal-background {
  /* Cover the entire screen */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* Semi-transparent purple background */
  background-color: rgba(245, 191, 166, 0.5);

  /* Blur the background */
  backdrop-filter: blur(5px);
}

</style>