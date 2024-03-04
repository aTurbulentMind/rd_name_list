<div class="hero-banner">
    <div class="hero-text">West Sound Roller Derby</div>
</div>

<h1>Welcome to the West Sound Roller Derby Team Page</h1>

<p> This is just a test page that started with trying to print from the browser. If you want to mess with the functionality feel free to reach out  <a href="https://www.lanternlightdevelopment.com/contact/">here</a> . Supabase likes to shut down a database when it has not been touched in a while. 
<br><br>

	Now it has a bunch of functionality. But it is not a perfectly finished project. It needs some styling and responsive design. But it seems to function well on a desktop. It can still print the match. 
<br>

	Go check it out <a href="/printMatch">Here</a> 
</p>


<p>There is a login system that has tables to store information about the players. It has a place to view your profile. 
<br>

	Go check out the register <a href="/register">Here</a>
<br>

	The login is here <a href="/login">Here</a>
</p>
	
<p>And then a roster page with everyone in a grid. You can select a player and it will show their profile picture which call from cloud storage and the info it calls from the database.
<br>

	Go check it out <a href="/roster">Here</a>
</p>

<p>I had to add a warehouse system for storing and updating warehouse inventory with image upload for reference. 
<br>

	Go check it out <a href="/warehouse">Here</a>
</p>

<p>And it has a user level system so that some spaces or actions are not available unless you are a certain level. That is not as simplie as pointing you in a direction.
<br>

	But you could try to go here if you are allowed <a href="/addTeamMember">Here</a>
</p>

<p>A bit overkill from the request to print some names, but it was fun.</p>



<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use 'style/baseCamp';
	:global(*) {
		box-sizing: border-box;
	}

	h1{
		margin: 10% 15%;
	}

	p{
		margin: 5% 15%;
		font-size: var(--f_lg);
		padding: 1% 0;
	}

	a{
		color: var(--purps);
		font-weight: 700;
	}

    .hero-banner {
	    display: flex;
	    position: relative;
        background-image: url('$lib/assets/heropus.jpg');
	    background-repeat: no-repeat;
	    background-attachment: fixed;
	    background-size: cover;
	    height: 100vh;
	    width: 100vw;
	    margin-top: 8vh;
    }

    .hero-text {
    	position: absolute;
    	top: 25%;
    	left: 50%;
    	transform: translate(-50%, -50%);
    	color: var(--back_Main);
    	font-size: var(--f_xl);
		padding: 1%;
		background-color: var(--back_Hallow);
		border-radius: var(--rnd);
		box-shadow: var(--box_Light_Wide);
    }

	@media only screen and (max-width: 740px) {
	.hero-banner {
		height: 80vh;
		margin-top: 0;
		background-position: center;

		.hero-text{
			font-size: 2rem;
			text-align: center;
		}
	}

		h1{
		font-size: var(--f_m);
	}

		p{
		margin: 5%;
		font-size: var(--f_m);
		padding: 1% 0;
	}

		a{
		color: var(--purps);
		font-weight: 700;
	}
	}

	@media only screen and (min-width: 980px) {}
</style>
