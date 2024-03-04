<script>
  import { goto } from '$app/navigation';
import { onMount } from 'svelte';
import { supabase } from '$lib/supabaseClient';

let name = '';
let email = '';
let password = '';
let successMessage = '';

// This function handles user registration.
async function register() {
  // Attempt to sign up the user with the provided email, password, and full name.
    const { user, session, error } = await supabase.auth.signUp({
    email,
    password,
    full_name: name
    });

  // If there's an error during sign-up, log it.
    if (error) {
    console.error(error);
    } else {
    // User registered successfully, now insert the user's information into the 'main' table.
    const { data, error } = await supabase.from('main').insert([
      { name: name, email: email } // Assuming 'main' table has 'name' and 'email' columns
    ]);

    // If there's an error inserting data, log it.
    if (error) {
        console.error(error);
    } else {
      // Set a success message and redirect to the main screen.
        successMessage = 'User registered successfully!';
        window.location.href = '/'; // Redirect to the main screen (adjust the path as needed)
    }
    }
}

// Reactive statement: If 'successMessage' changes, execute the following block.
$: {
  if (successMessage) {
    // After 3 seconds, clear the success message.
    setTimeout(() => {
      successMessage = '';
    }, 3000);
  }
}

</script>

<h1>Register as a new user</h1>

{#if successMessage}
    <!-- If there's a success message, display it within a <div> -->
    <div>{successMessage}</div>
{/if}

<!-- Create a registration form -->
<form on:submit={register}>
    <!-- Input field for user's name -->
    <label for="name">Name:</label>
    <input id="name" type="name" bind:value={name} required>
    <br>

    <!-- Input field for user's email -->
    <label for="email">Email:</label>
    <input id="email" type="email" bind:value={email} required>
    <br>

    <!-- Input field for user's password -->
    <label for="password">Password:</label>
    <input id="password" type="password" bind:value={password} required>
    <br>

    <!-- Submit button to register the user -->
    <button type="submit">Register</button>
</form>


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