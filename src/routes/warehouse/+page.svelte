<script>
    import { supabase } from '$lib/supabaseClient';
    import { onMount } from 'svelte';

    let userHasAccess = true;
    let items = [];
    let selectedItem = null;
    let selectedFiles = '';
    let message = '';
    let messageType = '';

    let newItemName = [];
    let newItemSmall = [];
    let newItemMedium = [];
    let newItemLarge = [];
    let newItemXL = [];
    let newItemXXL = [];
    let newItemXXXL = [];
    let newItemXXXXL = [];


// This function runs when the component mounts
onMount(async () => {
  // Fetch all records from the 'warehouse' table in Supabase
    let { data, error } = await supabase
    .from('warehouse')
    .select('*');

  // If there's an error, log it
    if (error) console.log('Error: ', error);
  // If there's no error, set the fetched data to the 'items' array
    else items = data;
});


//Function to check if user has access
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

// Check if the user's access level is less than 7
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


// This function is called when the add new item button is clicked
async function addNewItem() {
  // Create a new item with the input values
  const newItem = {
    item_name: newItemName,
    small: newItemSmall,
    medium: newItemMedium,
    lrg: newItemLarge,
    xl: newItemXL,
    xxl: newItemXXL,
    xxxl: newItemXXXL,
    xxxxl: newItemXXXXL
  };

  // Insert the new item into the 'warehouse' table in Supabase
  const { error } = await supabase
    .from('warehouse')
    .insert([newItem]);

  // If there's an error, log it
  if (error) console.log('Error: ', error);
  else {
    // If the item was inserted successfully, add the new item to the 'items' array and clear the input values
    items = [...items, newItem];
    newItemName = '';
    newItemSmall = 0;
    newItemMedium = 0;
    newItemLarge = 0;
    newItemXL = 0;
    newItemXXL = 0;
    newItemXXXL = 0;
    newItemXXXXL = 0;
  }

  // If there's an error, log it and show a failure message
  if (error) {
    console.error(error);
    showMessage('Failed to update inventory', 'error');
  } else {
    // If the inventory was updated successfully, show a success message
    showMessage('Inventory updated successfully', 'success');

    // Refresh the table after 1 second
    setTimeout(fetchData, 1000);
  }   
}


// This function is called to fetch data from the 'warehouse' table in Supabase
async function fetchData() {
  console.log('Fetching data from warehouse...');
  
  // Fetch all records from the 'warehouse' table
  let { data, error } = await supabase
    .from('warehouse')
    .select('*');

  // If there's an error, log it
  if (error) {
    console.log('Error fetching data from warehouse: ', error);
  } else {
    console.log('Data fetched from warehouse: ', data);
    items = data;

    // Fetch the image for each item
    for (let item of items) {
      // Fetch the public URL for the item's image from the 'warehouse' bucket in Supabase
      const { data: imageUrl, error: imageError } = await supabase.storage.from('warehouse').getPublicUrl(`${item.item_name}.jpg`);

      // If there's an error, log it
      if (imageError) {
        console.log(`Error fetching image for item: ${item.item_name}`, imageError);
      } else {
        // If the image was fetched successfully, set the image URL to the 'image' property of the item
        item.image = imageUrl.publicUrl;
      }
    }
  }
}


// This function runs when an item is selected from the dropdown
function selectItem(event) {
  // Find the selected item in the 'items' array and set it to 'selectedItem'
  selectedItem = items.find(item => item.item_name === event.target.value);
}



// This function is called to upload an image file to Supabase
async function uploadImage(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the first file from the 'selectedFiles' array
  const file = selectedFiles[0];

  // Construct the file path for the image using the name of the selected item
  const filePath = `${selectedItem.item_name}.jpg`;

  // Upload the image to the 'warehouse' bucket in Supabase
  let { error: uploadError } = await supabase.storage.from('warehouse').upload(filePath, file);

  // If there's an error, log it
  if (uploadError) {
    console.error(uploadError);
    return;
  }

  // Log a success message
  console.log('Image uploaded successfully');
}


// Function to delete an image
async function deleteImage(itemName) {
  // Construct the file path for the image
  const filePath = `${itemName}.jpg`;

  console.log("Attempting to delete image with path:", filePath);

  try {
    // Delete the image from the 'warehouse' bucket in Supabase
    const { error } = await supabase.storage.from('warehouse').remove([filePath]);

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


// This function runs when the form is submitted
async function updateInventoryItem(event){
  // Prevent the default form submission behavior
  event.preventDefault();

  // Update the record in the 'warehouse' table in Supabase that matches the selected item
  const { error } = await supabase
    .from('warehouse')
    .update({
      small: selectedItem.small,
      medium: selectedItem.medium,
      lrg: selectedItem.lrg,
      xl: selectedItem.xl,
      xxl: selectedItem.xxl,
      xxxl: selectedItem.xxxl,
      xxxxl: selectedItem.xxxxl
    })
    .eq('item_name', selectedItem.item_name);
    
  // If there's an error, log it and show a failure message
  if (error) {
    console.error(error);
    showMessage('Failed to update inventory', 'error');
  } else {
    // If the update was successful, show a success message
    showMessage('Inventory updated successfully', 'success');

    // Refresh the table after 1 second
    setTimeout(fetchData, 1000);
  }   
}


// This function is called when the delete button is clicked
async function deleteItem(event){
  // Prevent the default form submission behavior
    event.preventDefault();

  // Delete the selected item from the 'warehouse' table in Supabase
    const { error } = await supabase
    .from('warehouse')
    .delete()
    .eq('item_name', selectedItem.item_name);

  // If there's an error, log it and show a failure message
    if (error) {
    console.error(error);
    showMessage('Failed to delete item', 'error');
    } else {
    // If the item was deleted successfully, show a success message
    showMessage('Item deleted successfully', 'success');

    // Refresh the table after 1 second
    setTimeout(fetchData, 1000);
    }   
}


// This function is called when a file is selected
function handleFileChange(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Log the selected file
  console.log('File selected:', selectedFiles[0]);
}


onMount(fetchData);


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


<h1>Lets store some inventory</h1>

<p class="larrg">This should be viewed of a full sceen</p>

<table>
  <thead>
    <tr>
      <th>Item Name</th>
      <th>Small</th>
      <th>Medium</th>
      <th>Large</th>
      <th>XL</th>
      <th>XXL</th>
      <th>XXXL</th>
      <th>XXXXL</th>
    </tr>
  </thead>

  <tbody>
    {#each items as item, index (index)}
      <tr>
        <td>{item.item_name}</td>
        <td>{item.small}</td>
        <td>{item.medium}</td>
        <td>{item.lrg}</td>
        <td>{item.xl}</td>
        <td>{item.xxl}</td>
        <td>{item.xxxl}</td>
        <td>{item.xxxxl}</td>
      </tr>
    {/each}
    {#if userHasAccess}
      <tr>
        <td><input type="text" bind:value={newItemName}></td>
        <td><input type="number" min="0" bind:value={newItemSmall} required></td>
        <td><input type="number" min="0" bind:value={newItemMedium} required></td>
        <td><input type="number" min="0" bind:value={newItemLarge} required></td>
        <td><input type="number" min="0" bind:value={newItemXL} required></td>
        <td><input type="number" min="0" bind:value={newItemXXL} required></td>
        <td><input type="number" min="0" bind:value={newItemXXXL} required></td>
        <td><input type="number" min="0" bind:value={newItemXXXXL} required></td>
      </tr>
    {/if}
  </tbody>
    {#if userHasAccess}
      <button type="button" on:click={addNewItem}>Add New Item</button>
    {/if}
</table>

<br>
<br>
<br>

{#if userHasAccess}
  <select class="SelectedItem" on:change={selectItem}>
  <option disabled selected>Select an item</option>
    {#each items as item, index (index)}
      <option>{item.item_name}</option>
    {/each}
</select>


{#if selectedItem}
<form on:submit|preventDefault={uploadImage} >
  <img src={selectedItem.image} alt={selectedItem.item_name}>
  <br>

    <label for="imageUpload">Upload Image:</label>
    <input 
        class="choose" 
        type="file" 
        id="imageUpload" 
        bind:files={selectedFiles} 
        accept="image/*" 
        on:change|preventDefault={handleFileChange}
        >
        <button type="submit">Add image</button>


    <button
        class="delete"
        on:click={() => {
            const itemName = selectedItem.item_name;
            console.log("Triggering deleteImage for item:", itemName);
            deleteImage(itemName);
        }}
    >
        Delete Image
  </button>
</form>
{/if}



{#if selectedItem}
  <form  on:submit|preventDefault={updateInventoryItem} >
    <p class={messageType}>{message}</p>
    <img src={selectedItem.image} alt={selectedItem.item_name}>
    <ul>
      <li>Small: {selectedItem.small}  
        <br>
        <input type="number" min="0" bind:value={selectedItem.small}></li>
      
        <li>Medium: {selectedItem.medium} 
        <br>
        <input type="number" min="0" bind:value={selectedItem.medium}></li>
      
        <li>Large: {selectedItem.lrg}
        <br>
        <input type="number" min="0" bind:value={selectedItem.lrg}></li>
      
        <li>XL: {selectedItem.xl} 
        <br>
        <input type="number" min="0" bind:value={selectedItem.xl}></li>
      </ul>
      <ul>
        <li>XXL: {selectedItem.xxl} 
        <br>
          <input type="number" min="0" bind:value={selectedItem.xxl}></li>
        <li>XXXL: {selectedItem.xxxl} 
        <br>
          <input type="number" min="0" bind:value={selectedItem.xxxl}></li>
        <li>XXXXL: {selectedItem.xxxxl} 
        <br>
          <input type="number" min="0" bind:value={selectedItem.xxxxl}></li>
    </ul>
    <br>


  <button type="submit" on:click={updateInventoryItem}>Update item</button>
    
  <button type="button" on:click={deleteItem} class="delete">Delete Item</button>
    
  </form>

  {/if}
  {:else}
    <p>{message}</p>
    <a href="/">Go Home</a>
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

  table {
    width: 80%;
    border-collapse: collapse;
    margin: 20px 10%;

    button{
      all: unset;
      background-color: var(--orgs);
      padding: 3%;
      border-radius: var(--rnd);
      color: var(--back_Main);
      cursor: pointer;
      margin: 10%;
    }
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: var(--purps);
    color: white;
  }

  tr:nth-child(even) {
    background-color: #e2d3ee;
  }

  tr:hover {
    background-color: #4810b9;
    color: var(--back_Main);
    cursor: default;
  }

  .SelectedItem {
    width:fit-content;
    height: fit-content;
    margin-left: 10%;
    border: none;
    border-radius: 5px;
    padding: 1%;
    background-color: #f8f8f8;
    font-size: var(--f_lg);
    color: var(--text_Main);
    box-shadow: 0 0 5px var(--purps);
  }

  .SelectedItem:focus {
    outline: none;
  }

  .SelectedItem option {
    padding: 5px;
  }

  .choose{
    all: unset;
  }

  form{
    width: 70%;
    margin-left: 10%;
    margin-top: 10%;
    text-align: center;

    label{
      text-align: center;
    }

    h2{
      margin:5% 0;
    }

    ul{
      display: flex;
      padding: 1%;
      margin-left: 20%;
        
        li{
          display: block;
          padding: 1%;
        }
    }

    img{
        width: 40vw;
        margin:0 30%;
    }

    button{
      all:unset;
      padding: 2%;
      margin: 5% 10%;
      background-color: var(--purps);
      cursor: pointer;
      border-radius: 5px;
      color: var(--back_Main);

          &:hover{
              box-shadow: var(--box_Light_Wide);
          }
        }

    .delete{
              background-color: var(--halter);
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
</style>
