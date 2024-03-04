<script>
import { supabase } from '$lib/supabaseClient';
import { onDestroy } from 'svelte';
import { goto } from '$app/navigation';


let user = {};
let name = '';
let password = '';


// This function is called when the authentication state changes.
const authStateChanged = (event, session) => {
  // Log the event and session information for debugging purposes.
  console.log('Auth state changed:', event, session);

  // Extract the user object from the session (if it exists).
  user = session?.user;

  // If a user is found in the session:
  if (user) {
    // Log that the user is found.
    console.log('User found:', user);

    // Redirect the user to the '/usr_profile' route.
    goto('/usr_profile');
  } else {
    // If no user is found, log an appropriate message.
    console.log('No user found');
  }
};

// Subscribe to auth state changes
console.log('Subscribing to auth state changes');
const { data: authListener } = supabase.auth.onAuthStateChange(authStateChanged);
console.log('Subscribed to auth state changes');

// Unsubscribe from auth state changes when the component is destroyed
onDestroy(() => {
  console.log('Unsubscribing from auth state changes');
  if (authListener?.unsubscribe) {
    authListener.unsubscribe();
    console.log('Unsubscribed from auth state changes');
  }
});

// Function to handle user login
const handleLogin = async () => {
  console.log('Attempting to log in');
  try {
    // Attempt to sign in with the provided email and password
    const { user, session, error } = await supabase.auth.signInWithPassword({ email: name, password });

    // If there's an error during sign-in, log it and throw the error
    if (error) {
      console.log('Error during sign in:', error.message);
      throw error;
    }

    // If a user is successfully logged in:
    if (user) {
      // Retrieve the user's access level (usr_lvl) from the 'main' table
      const { data, error } = await supabase
        .from('main')
        .select('usr_lvl')
        .eq('user_id', user.id)
        .single();

      // If there's an error retrieving usr_lvl, handle it (e.g., show an error message)
      if (error) {
        console.error('Error retrieving usr_lvl:', error.message);
        // Handle the error, e.g., show an error message to the user
        return;
      }

      // Extract the user's access level from the retrieved data
      const usrLvl = data.usr_lvl;

      // Based on usr_lvl, grant or restrict access to certain features or pages
      // For example, redirect the user to different pages based on their usr_lvl
      if (usrLvl >= 5) {
        console.log('Login successful for admin, redirecting to admin dashboard');
        goto('/admin_dashboard');
      } else {
        console.log('Login successful for user, redirecting to user dashboard');
        goto('/usr_profile');
      }
    } else {
      // Handle the case where the user is not logged in
      // (You can add specific logic here if needed)
    }
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};


</script>

<h1>Welcome back,</h1>

<div>
  {#if user}
    <!-- If a user is logged in, display a welcome message -->
    <h1>Welcome back, {user.email}</h1>
  {:else}
    <!-- If no user is logged in, show the login form -->
    <form on:submit|preventDefault={handleLogin}>
      <label for="email">Email:</label>
      <input type="text" id="email" bind:value={name} />
      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={password} />
      <button type="submit">Login</button>
    </form>
  {/if}
</div>


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

form{
    width: 70%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label{
      display: block;
    }

    input{
    width: 40%;
    margin: 0 auto;
    height: 2rem;
    }

    button{
        all:unset;
        width: fit-content;
        padding: 2%;
        margin: 0 auto;
        font-size: var(--f_lg);
        background-color: var(--go_Go_Go);
        border-radius: var(--rad);
    }
  }

  </style>
