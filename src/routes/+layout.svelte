<script>
	import Header from './Nav.svelte';
	import './style/baseCamp.scss';
	
</script>

<Header />

<slot />

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use 'style/baseCamp';
</style>