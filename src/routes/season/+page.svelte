<script>
	import PassOne from '$lib/assets/passone.jpg';
	import PassTwo from '$lib/assets/passtwo.jpg';
</script>

<grid>
	<season><img src={PassOne} alt="background" /></season>
	<season><img src={PassTwo} alt="background" /></season>

	<season><img src={PassOne} alt="background" /></season>
	<season><img src={PassTwo} alt="background" /></season>
</grid>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100vw;
		height: 100vh;

		img {
			width: 50%;
			margin: 0;
		}
	}
	@media only screen and (min-width: 740px) {
	}

	@media only screen and (min-width: 980px) {
	}
</style>
