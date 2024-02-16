<script>
import { supabase } from '$lib/supabaseClient';
import { onDestroy } from 'svelte';
import { goto } from '$app/navigation';


let user = {};
let name = '';
let password = '';



// Function to handle the auth state change
const authStateChanged = (event, session) => {
  console.log('Auth state changed:', event, session);
  user = session?.user;
  if (user) {
    console.log('User found:', user);
    goto('/usr_profile');
  } else {
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
const handleLogin = async () => {
  console.log('Attempting to log in');
  try {
    const { user, session, error } = await supabase.auth.signInWithPassword({ email: name, password });
    if (error) {
      console.log('Error during sign in:', error.message);
      throw error;
    }

    if (user) {
      // Retrieve the usr_lvl from the 'main' table
      const { data, error } = await supabase
        .from('main')
        .select('usr_lvl')
        .eq('user_id', user.id)
        .single();

      if (error) {
        console.error('Error retrieving usr_lvl:', error.message);
        // handle the error, e.g., show an error message to the user
        return;
      }

      const usrLvl = data.usr_lvl;
      // Based on usr_lvl, grant or restrict access to certain features or pages
      // e.g., redirect the user to different pages based on their usr_lvl
      if (usrLvl >= 5) {
        console.log('Login successful for admin, redirecting to admin dashboard');
        goto('/admin_dashboard');
      } else {
        console.log('Login successful for user, redirecting to user dashboard');
        goto('/usr_profile');
      }
    } else {
      // handle the case where the user is not logged in
    }
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};

</script>

<h1>Welcome back,</h1>

<div>
  {#if user}
        <h1>Welcome back, {user.email}</h1> 
  {:else}
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
