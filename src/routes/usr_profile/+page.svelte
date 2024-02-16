<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    let user = {}; // Initialize user object to store the user's data
    let userImage = '';
    
    onMount(async () => {
      // Correct usage of supabase.auth.session()
      const { data: userAuth } = await supabase.auth.getSession(); // Retrieve the current authenticated user session data
    
      if (!userAuth) {
        console.error('No user logged in');
        return;
      }
    
      // Use user details from the session
      user = userAuth.session.user.email;
    
      const { data: mainData, error: mainError } = await supabase
        .from('main')
        .select('name, email, usr_lvl')
        .eq('email', userAuth.session.user.email); // Retrieve name and email from the 'main' table using the authenticated user's email
    
      if (mainData && mainData.length > 0) {
        user = { ...user, ...mainData[0] }; // Merge user's information from 'main' table into the user object
    
        const { data: rstrData, error: rstrError } = await supabase
          .from('rstr')
          .select('player_number, full_name')
          .eq('name', user.name); // Retrieve player_number and full_name from the 'rstr' table using the shared 'name'
    
        if (rstrData && rstrData.length > 0) {
          user = { ...user, ...rstrData[0] }; // Merge user's information from 'rstr' table into the user object
    
          const { data: detailsData, error: detailsError } = await supabase
            .from('details')
            .select('role, from_location, story, hobbies')
            .eq('name', user.name); // Retrieve role, from_location, story, and hobbies from the 'details' table using the shared 'name'
    
          if (detailsData && detailsData.length > 0) {
            user = { ...user, ...detailsData[0] }; // Merge user's information from 'details' table into the user object
    
            // Assuming 'usr_lvl' is a field in the 'details' table and 'main' table
            const usrLvlDetails = detailsData[0]; // Get usr_lvl from 'details' table
    
            user = { ...user, usr_lvl: usrLvlDetails }; // Add usr_lvl to the user object
    
            if (mainData && mainData.length > 0) {
              const usrLvlMain = mainData[0].usr_lvl; // Get usr_lvl from 'main' table
              console.log('Signed in usr_lvl from main:', usrLvlMain);
            }
          } else if (mainError) {
            console.error(mainError);
          }
        }
      }
        // Fetch the image of the selected player
  await fetchPlayerImage();
    });


async function fetchPlayerImage() {
  // Log the name of the selected player for whom the image is being fetched
  console.log('Fetching image for player:', user.name);

  // Construct the file path for the selected player's image
  const filePath = `${user.name}.jpg`;

  // Construct the public URL for the selected player's image
  const publicURL = `https://janbwnvcsnjlwlxweqwp.supabase.co/storage/v1/object/public/profile_Pics/${filePath}`;

  // Log the constructed image URL
  console.log('Constructed image URL:', publicURL);

  // Assign the public URL of the selected player's image to 'userImage'
  userImage = publicURL;

  // Log the selected player's image
  console.log('Selected player image:', userImage);
}

    
async function updateUserMain(field, value) {
  // Check if user is logged in
  const userAuth = supabase.auth.getSession();
  if (!userAuth) {
    console.error('No user logged in');
    return;
  }

  // Update user data in 'main' table
  const { data: mainData, error: mainError } = await supabase
    .from('main')
    .update({ [field]: value })
    .eq('email', userAuth.email);

  if (mainError) {
    console.error(mainError);
  }

  // Refresh user data
  onMount();
}

async function updateUserRstr(field, value) {
  // Check if user is logged in
  const userAuth = supabase.auth.getSession();
  if (!userAuth) {
    console.error('No user logged in');
    return;
  }

  // Update user data in 'rstr' table
  const { data: rstrData, error: rstrError } = await supabase
    .from('rstr')
    .update({ [field]: value })
    .eq('name', user.name);

  if (rstrError) {
    console.error(rstrError);
  }

  // Refresh user data
  onMount();
}

async function updateUserDetails(field, value) {
  // Check if user is logged in
  const userAuth = supabase.auth.getSession();
  if (!userAuth) {
    console.error('No user logged in');
    return;
  }

  // Update user data in 'details' table
  const { data: detailsData, error: detailsError } = await supabase
    .from('details')
    .update({ [field]: value })
    .eq('name', user.name);

  if (detailsError) {
    console.error(detailsError);
  }

  // Refresh user data
  onMount();
}


  async function handleUpdateInfo() {
    await updateUserMain('email', user.email);
    await updateUserRstr('name', user.name);
    await updateUserDetails('name', user.name);
  }
    

function logout() {
  supabase.auth.signOut();
  // Add any additional logic here, such as redirecting to the login page or updating the UI
  window.location.href = '/';
  
}
</script>

<h1>Your info</h1>

  <!-- If 'selectedPlayerImage' is not null, display the selected player's image -->
  {#if userImage}
  <img src={userImage} alt={user.name} />
  {/if}
<grid >

<h2>Email: </h2> <p>{user.email}</p>

<h2>Number: </h2><p><input bind:value={user.player_number} on:change={() => updateUserRstr('player_number', user.player_number)} placeholder={user.player_number ? '' : 'Add Info'} /></p>

<h2>Full Name: </h2><p><input bind:value={user.full_name} on:change={() => updateUserRstr('full_name', user.full_name)} placeholder={user.full_name ? '' : 'Add Info'} /></p>

<h2>Role: </h2><p><input bind:value={user.role} on:change={() => updateUserDetails('role', user.role)} placeholder={user.role ? '' : 'Add Info'} /></p>

<h2>From Location: </h2><p><input bind:value={user.from_location} on:change={() => updateUserDetails('from_location', user.from_location)} placeholder={user.from_location ? '' : 'Add Info'} /></p>

<h2>Hobbies: </h2><p><input bind:value={user.hobbies} on:change={() => updateUserDetails('hobbies', user.hobbies)} placeholder={user.hobbies ? '' : 'Add Info'} /></p>

<h2>Story: </h2><p><input bind:value={user.story} on:change={() => updateUserDetails('story', user.story)} placeholder={user.story ? '' : 'Add Info'} /></p>


<button on:click={handleUpdateInfo} type="button">Update info</button>


<button style="background-color: var(--purps); " on:click={() => goto('/')}>Home</button>
<button style="background-color: var(--halter); " on:click={() => logout()}>Logout</button>
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

  img{
    width: 30vw;
    margin: 0 35vw;
  }

.page-heading {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns */
  gap: 15px; /* Gap between grid items */
  margin: 10vh 20vw;
  width: 60vw;
  border-radius: var(--rad);
  box-shadow: var(--box_Light_Wide);
  background-color: var(--back_Main);

  input{
    all: unset;
    text-align: center;
    font-size: var(--f_m);
  }
}

h2, p {
  margin: 2%;
  padding: 2% 10%;
  height: 5vh;
  width: fit-content;
  background-color:var(--pstl_purps);
  border-radius: var(--rad);
}

button{
  all:unset;
  cursor: pointer;
  width: fit-content;
  margin: 5%;
  padding: 3%;
  font-size: var(--f_lg);
  background-color: var(--go_Go_Go);
  border-radius: var(--rad);

      &:hover{
        transition: all 0.2s ease-in-out;
        box-shadow: var(--box_Light_Wide);
    }
}

	@media only screen and (min-width: 740px) {
	}

	@media only screen and (min-width: 980px) {
	}
</style>