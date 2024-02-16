<script>
  import { supabase } from '$lib/supabaseClient';
  import { onMount } from 'svelte';

  let players = [];
  let selectedPlayer = '';
  let selectedPlayerImage = '';

  onMount(async () => {
    // Fetch all players from the 'main' table
    const { data: allPlayersData, error: allPlayersError } = await supabase
      .from('main')
      .select('id, name');

    if (allPlayersError) {
      console.error(allPlayersError);
      return;
    }

    players = allPlayersData;
  });

  async function fetchPlayerImage() {
    const filePath = `profile_Pics/${selectedPlayer}.jpg`;

    // Construct the URL manually
    const publicURL = `https://janbwnvcsnjlwlxweqwp.supabase.co/storage/v1/object/public/profile_Pics/${filePath}`;

    selectedPlayerImage = publicURL;
  }
</script>

<select bind:value={selectedPlayer} on:change={fetchPlayerImage}>
  <option disabled selected value="">Select a player</option>
  {#each players as player (player.id)}
    <option value={player.name}>{player.name}</option>
  {/each}
</select>

{#if selectedPlayerImage}
  <img src={selectedPlayerImage} alt="Player Image" />
{/if}
