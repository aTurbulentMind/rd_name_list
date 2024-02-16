<script>
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	export let isOpen = false;
</script>

<div class="modal" class:open={isOpen}>
	<div class="backdrop" on:click={() => dispatch('close')}></div>
	<div class="content">
		<button on:click={() => dispatch('close')}>Close</button>
		<slot />
	</div>
</div>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use '../routes/style/baseCamp';

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
		visibility: hidden;
		opacity: 0;
		transition:
			visibility 0s linear 0.25s,
			opacity 0.25s 0s;
	}
	.modal.open {
		visibility: visible;
		opacity: 1;
		transition-delay: 0s, 0s;
	}
	.backdrop {
		position: fixed;
		width: 100%;
		height: fit-content;
		background: rgba(0, 0, 0, 0.1);
	}
	.content {
		background: white;
		padding: 1em;
		max-width: 100vw;
		max-height: fit-content;
		border-radius: 8px;
	}
	.content h2 {
		grid-column: span 2;
	}
	.content namecard {
		display: grid;
		text-align: center;
		border: 2px dotted #000;
		font-weight: 500;
	}
	.content namecard number,
	.content namecard nickname {
		color: var(--orgss);
		text-shadow: var(--text_Shadow);
	}
	.content namecard nickname {
		font-size: var(--f_xl);
	}
	.content namecard fullname {
		color: var(--purps);
		text-shadow: var(--box_Light);
		font-size: var(--f_lg);
	}
	.content namecard button {
		cursor: pointer;
	}
</style>
