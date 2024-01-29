<script>
</script>

<grid>
	<namecard>
		<number> #764</number>
		<nickname>Lazer</nickname>
		<fullname>Lazer</fullname>
	</namecard>

	<namecard>
		<number> #23</number>
		<nickname> Girlfriend</nickname>
		<fullname> Nacho Girlfriend </fullname>
	</namecard>

	<namecard>
		<number> #0</number>
		<nickname>Freeze</nickname>
		<fullname>Freezer Burn</fullname>
	</namecard>

	<namecard>
		<number> #122</number>
		<nickname>Whoops </nickname>
		<fullname>Whoopsie Daisy</fullname>
	</namecard>

	<namecard>
		<number> #25</number>
		<nickname>Foxy </nickname>
		<fullname>Foxy Jocie</fullname>
	</namecard>

	<namecard>
		<number> #303</number>
		<nickname>Blitz </nickname>
		<fullname>sugar blitz</fullname>
	</namecard>

	<namecard>
		<number> #62</number>
		<nickname>Squirrely</nickname>
		<fullname>Squirrely Temple </fullname>
	</namecard>

	<namecard>
		<number> #8</number>
		<nickname>Maxx</nickname>
		<fullname>Mad Maxxine</fullname>
	</namecard>

	<namecard>
		<number> #309</number>
		<nickname>Cypher</nickname>
		<fullname>Cypher</fullname>
	</namecard>

	<namecard>
		<number> #20</number>
		<nickname>Slyde </nickname>
		<fullname>Slydeways </fullname>
	</namecard>

	<namecard>
		<number>#515</number>
		<nickname>lit</nickname>
		<fullname>Literally Katie </fullname>
	</namecard>

	<namecard>
		<number> #6</number>
		<nickname>chaos</nickname>
		<fullname>Chaos party of six </fullname>
	</namecard>

	<namecard>
		<number>#68</number>
		<nickname>Gnome </nickname>
		<fullname> Gaurdin' gnome</fullname>
	</namecard>

	<namecard>
		<number> #210</number>
		<nickname>Giggles</nickname>
		<fullname> Hits & Giggles </fullname>
	</namecard>

	<namecard>
		<number> #05</number>
		<nickname>kat</nickname>
		<fullname> Kategory 5 </fullname>
	</namecard>

	<namecard>
		<number> #5150</number>
		<nickname>Medic </nickname>
		<fullname>Mad Medic</fullname>
	</namecard>

	<namecard>
		<number> #101</number>
		<nickname>Shovey</nickname>
		<fullname>P.S. I shove You </fullname>
	</namecard>

	<namecard>
		<number> #117</number>
		<nickname>Nixie </nickname>
		<fullname>Nixie </fullname>
	</namecard>

	<namecard>
		<number> #08</number>
		<nickname>stare</nickname>
		<fullname>Shred Astare </fullname>
	</namecard>

	<namecard>
		<number> #57</number>
		<nickname>Rizzo</nickname>
		<fullname>Sonic chorizo</fullname>
	</namecard>

	<namecard>
		<number> #86 </number>
		<nickname>Twist</nickname>
		<fullname>Twisted Spinster</fullname>
	</namecard>

	<namecard>
		<number> #17</number>
		<nickname>Lil'Dizzy</nickname>
		<fullname>Dysfunctional Dame</fullname>
	</namecard>

	<namecard>
		<number> #942 </number>
		<nickname>Elsa</nickname>
	</namecard>
</grid>

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">
	@use 'style/baseCamp';
	:global(*) {
		box-sizing: border-box;
	}

	grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100vw;
		height: 100vh;
		margin: 0;
		font-size: var(--f_xxl);
		text-transform: uppercase;

		namecard {
			display: grid;
			text-align: center;
			border: 2px dotted #000;
			font-weight: 500;

			number,
			nickname {
				color: var(--orgss);
				text-shadow: var(--text_Shadow);
			}

			nickname {
				font-size: var(--f_xl);
			}

			fullname {
				color: var(--purps);
				text-shadow: var(--box_Light);
				font-size: var(--f_lg);
			}
		}
	}

	@media only screen and (min-width: 740px) {
	}

	@media only screen and (min-width: 980px) {
	}
</style>
