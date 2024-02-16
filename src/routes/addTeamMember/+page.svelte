<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  let userHasAccess = true;
  let name = '';
  let players = [];
  let selectedPlayerToDelete = '';
  let selectedPlayerToAddNumber = '';
  let selectedPlayerToAddDetails = '';
  let selectedPlayerImage = '';
  let selectedPlayerToModify = '';
  let usr_lvl = '';
  
  let selectedPlayer = '';
  let player_number = '';
  let full_name = '';
  let role = '';
  let from_location = '';
  let story = '';
  let hobbies = '';
  let selectedFiles = '';
  const publicURL = writable('');

  let message = '';
  let messageType = '';

//function to check usr_lv before loading the page if the usr_lvl from the 'main' table is below 7 it will not render the page and only show a message ' you do not have access here'

async function checkUsrLvl() {
  // Correct usage of supabase.auth.session()
  const { data: userAuth } = await supabase.auth.getSession(); // Retrieve the current authenticated user session data

  if (!userAuth) {
    console.error('No user logged in');
    return;
  }

  // Fetch the usr_lvl for the current user from the 'main' table in Supabase
  const { data: userData, error: userError } = await supabase
    .from('main')
    .select('usr_lvl')
    .eq('email', userAuth.session.user.email); // Replace 'user_id' with the actual field name for user identification in your 'main' table

  if (userError) {
    console.error(userError);
    return;
  }

if (userData && userData.length > 0) {
      const usrLvl = userData[0].usr_lvl;
      if (usrLvl < 7) {
        message = 'You do not have access here';
        messageType = 'error';
        userHasAccess = false; // Set userHasAccess to false
        return;
    }
  }
}

checkUsrLvl();




// Function to add a player

async function addPlayer(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Insert a new player into the 'main' table in Supabase
  const { data, error } = await supabase
    .from('main')
    .insert([{ name }]);

  // If there's an error, log it
  if (error) {
    console.error(error);
  } else {
    // If the player was added successfully, clear the 'name' variable
    name = '';
  }
}


// Function to fetch and display players when the component mounts
onMount(async () => {
  // Correct usage of supabase.auth.session()
  const { data: userAuth } = await supabase.auth.getSession(); // Retrieve the current authenticated user session data

  if (!userAuth) {
    console.error('No user logged in');
    return;
  }

  // Fetch the usr_lvl for the current user from the 'main' table in Supabase
  const { data: userData, error: userError } = await supabase
    .from('main')
    .select('usr_lvl')
    .eq('email', userAuth.session.user.email); // Replace 'user_id' with the actual field name for user identification

  // If there's an error, log it
  if (userError) {
    console.error(userError);
    return;
  }

  // Fetch the players from the 'main' table in Supabase
  const { data: playersData, error: playersError } = await supabase
    .from('main')
    .select('*');

  // If there's an error, log it
  if (playersError) {
    console.error(playersError);
    return;
  }

  // Assign the fetched players to the 'players' array
  players = playersData;
});


async function modify_usr_lvl(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Update the 'usr_lvl' of the selected player in the 'main' table in Supabase
  const { data, error } = await supabase
    .from('main')
    .update({ usr_lvl }) // update 'usr_lvl'
    .eq('id', selectedPlayerToModify); // where 'id' equals 'selectedPlayerToModify'

  // If there's an error, log it
  if (error) {
    console.error(error);
  } else {
    // If the player's level was updated successfully, clear the 'name' variable
    name = '';
  }
}




// Function to delete a player

async function deletePlayer(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Delete the selected player from the 'main' table in Supabase
  const { data, error } = await supabase
    .from('main')
    .delete()
    .match({ id: selectedPlayerToDelete });

  // If there's an error, log it
  if (error) {
    console.error(error);
  } else {
    // If the player was deleted successfully, remove them from the 'players' array
    players = players.filter(player => player.id !== selectedPlayerToDelete);

    // Clear the 'selectedPlayerToDelete' variable
    selectedPlayerToDelete = '';
  }
}


// Function to fetch player data for the number/Full Name space

async function fetchPlayerData() {
  // Fetch the player number and full name for the selected player from the 'rstr' table in Supabase
  const { data: playerData, error } = await supabase
    .from('rstr')
    .select('player_number, full_name')
    .eq('id', selectedPlayerToAddNumber);

  // If there's an error, log it
  if (error) {
    console.error(error);
    return;
  }

  // If player data was fetched successfully, store it in the 'player_number' and 'full_name' variables
  if (playerData.length > 0) {
    player_number = playerData[0].player_number;
    full_name = playerData[0].full_name;
  } else {
    // If no player data was found, clear the 'player_number' and 'full_name' variables
    player_number = '';
    full_name = '';
  }
}


// Function to add a player Full Name/number

async function addPlayerNumber(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Fetch the player from the 'main' table in Supabase who matches the selected player to add number
  const { data: allPlayersData, error: allPlayersError } = await supabase
    .from('main')
    .select('id, name')
    .eq('id', selectedPlayerToAddNumber);

  // If there's an error, log it
  if (allPlayersError) {
    console.error(allPlayersError);
    return;
  }

  // Log the fetched player data
  console.log('All Players Data:', allPlayersData);

  // Fetch all players from the 'rstr' table in Supabase
  const { data: rstrPlayersData, error: rstrPlayersError } = await supabase
    .from('rstr')
    .select('id, name, player_number, full_name');

  // If there's an error, log it
  if (rstrPlayersError) {
    console.error(rstrPlayersError);
    return;
  }

  // Log the fetched player data
  console.log('Rstr Players Data:', rstrPlayersData);

  // Add or update a player in the 'rstr' table in Supabase with the player number and full name
  const { error: addError } = await supabase
    .from('rstr')
    .upsert([{ id: allPlayersData[0].id, name: allPlayersData[0].name , player_number: player_number, full_name: full_name }]);

  // If there's an error, log it
  if (addError) {
    console.error(addError);
    return;
  }
}


// Function to delete a player number

async function deletePlayerNumber(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Delete the selected player from the 'rstr' table in Supabase
  const { error } = await supabase
    .from('rstr')
    .delete()
    .eq('id', selectedPlayerToAddNumber);

  // If there's an error, log it
  if (error) {
    console.error(error);
    return;
  }

  // Log the ID of the deleted player
  console.log('Player Deleted:', selectedPlayerToAddNumber);

  // Clear the 'player_number' and 'full_name' variables
  player_number = '';
  full_name = '';
}


// Function to fetch player details

async function fetchPlayerDetails() {
  // Fetch the details of the selected player from the 'details' table in Supabase
  const { data: playerDetails, error } = await supabase
    .from('details')
    .select('role, from_location, story, hobbies')
    .eq('id', selectedPlayerToAddDetails);

  // If there's an error, log it
  if (error) {
    console.error(error);
    return;
  }

    // Fetch the player's name from the 'main' table using the selected player's ID
  const { data: playerNameData, error: playerNameError } = await supabase
    .from('main')
    .select('name')
    .eq('id', selectedPlayerToAddDetails);

  // If there's an error, log it
  if (playerNameError) {
    console.error(playerNameError);
    return;
  }

  // Store the player's name in a variable
  const playerName = playerNameData[0].name;

  // If player details were fetched successfully, store them in the 'role', 'from_location', 'story', and 'hobbies' variables
  if (playerDetails.length > 0) {
    role = playerDetails[0].role;
    from_location = playerDetails[0].from_location;
    story = playerDetails[0].story;
    hobbies = playerDetails[0].hobbies;
  } else {
    // If no player details were found, clear the 'role', 'from_location', 'story', and 'hobbies' variables
    role = '';
    from_location = '';
    story = '';
    hobbies = '';
  }

  // Fetch the image of the selected player
  await fetchPlayerImage(playerName);
}


async function fetchPlayerImage(playerName) {
  // Log the name of the selected player for whom the image is being fetched
  console.log('Fetching image for player:', playerName);

  // Construct the file path for the selected player's image
  const filePath = `${playerName}.jpg`;

  // Construct the public URL for the selected player's image
  const publicURL = `https://janbwnvcsnjlwlxweqwp.supabase.co/storage/v1/object/public/profile_Pics/${filePath}`;

  // Log the constructed image URL
  console.log('Constructed image URL:', publicURL);

  // Assign the public URL of the selected player's image to 'selectedPlayerImage'
  selectedPlayerImage = publicURL;

  // Log the selected player's image
  console.log('Selected player image:', selectedPlayerImage);
}


// Function to upload an image

async function uploadImage(playerName) {
  // Get the first file from the 'selectedFiles' array
  const file = selectedFiles[0];

  // Construct the file path for the image
  const filePath = `${playerName}.jpg`;

  // Upload the image to the 'profile_Pics' bucket in Supabase
  let { error: uploadError } = await supabase.storage.from('profile_Pics').upload(filePath, file);

  // If there's an error, log it
  if (uploadError) {
    console.error(uploadError);
    return;
  }

  // Log a success message
  console.log('Image uploaded successfully');
}


// Function to delete an image
async function deleteImage(playerName) {
  // Construct the file path for the image
  const filePath = `${playerName}.jpg`;

  try {
    // Delete the image from the 'profile_Pics' bucket in Supabase
    const { error } = await supabase.storage.from('profile_Pics').remove([filePath]);

    if (error) {
      console.error("Error deleting image:", error.message);
      return;
    }

    // Log a success message
    console.log('Image deleted successfully');
  } catch (error) {
    console.error("Error deleting image:", error.message);
  }
}





// Function to add player details
async function addPlayerDetails(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Fetch the selected player from the 'main' table in Supabase
  const { data: playerDetails, error } = await supabase
    .from('main')
    .select('id, name')
    .eq('id', selectedPlayerToAddDetails);

  // If there's an error, log it
  if (error) {
    console.error(error);
    return;
  }

  // Upload the image for the selected player
  await uploadImage(playerDetails[0].name);


  // Construct the file path for the selected player's image
  const filePath = `profile_Pics/${playerDetails[0].name}.jpg`;

  // Fetch the public URL for the selected player's image from the 'profile_Pics' bucket in Supabase
  const { data: imageUrl, error: imageError } = await supabase.storage.from('profile_Pics').getPublicUrl(filePath);

  // If there's an error, log it
  if (imageError) {
    console.error(imageError);
    return;
  }

  // Set the public URL of the selected player's image in the 'publicURL' store
  publicURL.set(imageUrl.publicUrl);

  // Upsert the player details into the 'details' table in Supabase
  const { error: upsertError } = await supabase
    .from('details')
    .upsert([
      { id: playerDetails[0].id, name: playerDetails[0].name, role, from_location, story, hobbies, image: $publicURL } // Use $ to get the value of the store
    ]);

  // If there's an error, show a failure message
  if (upsertError) {
    showMessage('Failed to update player details', 'error');
  } else {
    // If the player details were upserted successfully, show a success message and clear the 'role', 'from_location', 'story', and 'hobbies' variables
    showMessage('Player details updated successfully', 'success');
    role = '';
    from_location = '';
    story = '';
    hobbies = '';
  }
}


// Function to delete player details

async function deletePlayerDetails(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Delete the selected player from the 'details' table in Supabase
  const { error } = await supabase
    .from('details')
    .delete()
    .eq('id', selectedPlayerToAddDetails);

  // If there's an error, show a failure message
  if (error) {
    showMessage('Failed to delete player details', 'error');
  } else {
    // If the player details were deleted successfully, show a success message
    showMessage('Player details deleted successfully', 'success');
  }
}


// Function to show a message

function showMessage(text, type) {
  // Set the message text and type
  message = text;
  messageType = type;

  // Clear the message text and type after 3 seconds
  setTimeout(() => {
    message = '';
    messageType = '';
  }, 3000);
}

</script>



<h1>This is a page to add new people to different spaces and manipulate their data</h1>

<p class="larrg">This should be viewed on a large screen</p>

{#if userHasAccess}
  <!-- Your page content goes here -->

<div class="chunk">
<h2>Add/Delete player</h2>

  <!-- this should modify the usr_lvl of a select player -->
<form on:submit={modify_usr_lvl}>
  <label for="player">Select a player:</label>
  <select id="player" bind:value={selectedPlayerToModify}>
    {#each players as player (player.id)}
      <option value={player.id}>{player.name} - Level: {player.usr_lvl}</option>
    {/each}
  </select>

  <label for="level">Select a level:</label>
  <select id="level" bind:value={usr_lvl}>
    {#each Array(10) as _, i}
      <option value={i}>{i}</option>
    {/each}
  </select>

  <button type="submit">Modify Level</button>
</form>


<form on:submit={deletePlayer}>
  <label for="player">Select a player:</label>
  <select id="player" bind:value={selectedPlayerToDelete}>
    {#each players as player (player.id)}
      <option value={player.id}>{player.name}</option>
    {/each}
  </select>
  <br>
  <button type="submit">Delete Player</button>
</form>

</div>



<div class="chunk">

<h2>Add/Delete Player Number/Full Name</h2>
<form on:submit={addPlayerNumber}>
<label for="player">Select a player:</label>
<select id="player" bind:value={selectedPlayerToAddNumber} on:change={fetchPlayerData}>
  {#each players as player (player.id)}
    <option value={player.id}>{player.name}</option>
  {/each}
</select>

  <br>

  <label for="player_number">Player Number:</label>
  <input id="player_number" type="text" bind:value={player_number} required>

  <br>

  <label for="full_name">Full Name:</label>
  <input id="full_name" type="text" bind:value={full_name} required>

  <br> <br>

  <button type="submit">Add Player</button>
  <button type="button" on:click={deletePlayerNumber}>Delete Player From Number/Full Name</button>
</form>

</div>



<div class="chunk">

<h2>Add/Delete Player Details</h2>


<form on:submit={addPlayerDetails}>
  <label for="player_details">Select a player:</label>
  <select id="player_details" bind:value={selectedPlayerToAddDetails} on:change={fetchPlayerDetails}>
    {#each players as player (player.id)}
      <option value={player.id}>{player.name}</option>
    {/each}
  </select>

  <label for="role">Role:</label>
  <input id="role" type="text" bind:value={role}>
  <br>

  <label for="from_location">From:</label>
  <input id="from_location" type="text" bind:value={from_location}>

    <label for="hobbies">Hobbies:</label>
  <input id="hobbies" type="text" bind:value={hobbies}>
  <br>

  <label for="story">Story:</label>
  <textarea id="story" bind:value={story}></textarea>
  <br>

  <br>
  <br>
  <!-- If 'selectedPlayerImage' is not null, display the selected player's image -->
  {#if selectedPlayerImage}
  <img src={selectedPlayerImage} alt={selectedPlayer.name} />
  {/if}
  <br>
  <br>


 <!-- replace 'playerName' with the actual player name -->

  <br><br>
<!---->
  <label for="imageUpload">Upload New Image:</label>
<input style="color=#fff" type="file" id="imageUpload" bind:files={selectedFiles} accept="image/*">


<br><br>
  <button type="submit">Add Player Details</button>
  <button type="button" on:click={deletePlayerDetails}>Delete Player Details</button>
  <p class={messageType}>{message}</p>


  {#if selectedPlayerImage}
<button
  on:click={() => {
    const playerName = selectedPlayerImage.split('/').pop().split('.')[0]; // Extracting player name from URL
    console.log("Triggering deleteImage for player:", playerName);
    deleteImage(playerName);
  }}
>
  Delete Selected Image
</button>

{/if}
</form>
  
</div>

{:else}
  <p>{message}</p>
  <a href="/">Go Home</a>
{/if}
<br>


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
  
    h2{
      margin: 10vh 15vw;
    }

    img {
    width: 20vw;
  }

  .chunk{
    background-color: var(--purps);
    width: 70vw;
    padding: 1% 0;
    color: var(--back_Main);
    margin: 5vh 15vw;
    border-radius: var(--rnd);
    box-shadow: var(--box_Light);

    label {
      font-size: var(--f_lg);
    }

    input, textarea, select {
      font-size: var(--f_m);
      background-color: var(--pstl_purps);
      color: var(--text_Main);
    }

    textarea{
      width: 40%;
      margin: 5% 0;
      margin-bottom: -2%;
    }

    button {
      all: unset;
      padding: 8px;
      background-color: var(--orgs);
      cursor: pointer;
      border-radius: 5px;
      color: var(--back_Main);

          &:hover{
        box-shadow: var(--box_Light_Wide);
    }
    }

    select{
      font-size: var(--f_m);
    }
  }

  form{
    width: 70vw;
    margin: 5vh 15vw;

  }

    .larrg{
    display: none;
  }

  	@media only screen and (max-width: 740px) {
      .larrg{
        display: block;
      }
	}
</style>