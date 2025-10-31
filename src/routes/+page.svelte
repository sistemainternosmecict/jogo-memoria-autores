<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Titulo from '$lib/components/titulo.svelte';
	import type { PageProps } from './$types';
	import { shuffle } from '$lib/utils';
	import WinScreen from '$lib/components/winScreen.svelte';
	const { data }: PageProps = $props();
	const { options } = data;
	const CARDS_SIZE = 16;

	type Card = {
		name: string;
		icon: string;
		flipped: boolean;
		matchFound: boolean;
		carta: string;
		variante: string;
	};

	let cardFlipped: Card | undefined = $state();

	function clicked(card: Card) {
		if (card.matchFound || locked || cardFlipped === card) {
			return;
		}
		if (!cardFlipped) {
			card.flipped = !card.flipped;
			cardFlipped = card;
			return;
		}

		if (isCardEqual(cardFlipped, card)) {
			cardFlipped.matchFound = true;
			card.matchFound = true;
			cardFlipped = undefined;
		} else {
			locked = true;
			card.flipped = false;
			setTimeout(() => {
				cardFlipped!.flipped = true;
				card.flipped = true;
				cardFlipped = undefined;
				locked = false;
			}, 1000);
		}
	}

	function isCardEqual(left: Card, right: Card) {
		console.log(left, right)
		return left.carta === right.carta;
	}

	function setup(size: number) {
		const newCards: Card[] = [];
		let totalPairs = 0;

		for (let { name, path, carta, variante } of options) {
			newCards.push({
				icon: path,
				name,
				flipped: true,
				matchFound: false,
				carta: carta,
				variante: variante
			});
			if (++totalPairs == size) {
				break;
			}
		}

		return shuffle(newCards);
	}

	function reset() {
		cards.forEach((card) => {
			card.matchFound = false;
			card.flipped = true;
		});
		setTimeout(() => {
			cards = setup(CARDS_SIZE);
		}, 1000);
	}

	let cards: Card[] = $state(setup(CARDS_SIZE));
	const cardsLeft = $derived(cards.filter((card) => !card.matchFound).length);
	let locked = false;
</script>

<div class="select-none content flex min-h-screen flex-col bg-[#ffffff] text-white">
	<section class="flex flex-wrap justify-center">
		<div class="shadow-xl b flex flex-col sm:flex-row items-center bg-[#063636] p-4 z-1 justify-between  w-screen ">
			<Titulo class="logo drag-none w-64 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]"/>
			<!-- <h1 class="text-shadow-lg text-center text-3xl font-bold poppins-bold text-[#ffffff]">Jogo da Memória <span class="text-[#5291ad] poppins-thin">Autores</span></h1> -->
			
			<section class="p-2 flex flex-row items-center">
				<img class="drag-none m-2 max-w-20 sm:max-w-28 min-w-[0] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]" src="/LOGO_FLIS.svg" alt="logo da flis" />
				<img class="drag-none m-2 max-w-34 sm:max-w-54 min-w-[0] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]" src="/logo_edu.svg" alt="logo da sub de tecnologia" />
			</section>
		</div>
	</section>

	<div class="m-3 flex flex-1 flex-wrap content-center items-center justify-center gap-4">
		{#each cards as { icon, name, flipped, matchFound }, idx}
			{@const card = cards[idx]}
			<Card
				mouseClick={() => clicked(card)}
				iconSrc={icon}
				{name}
				flipped={!matchFound && flipped}
			/>
		{/each}
	</div>

	{#if cardsLeft === 0}
		<WinScreen resetCallback={reset}></WinScreen>
	{/if}
</div>

<style>
	.cor1{
		fill: red;
	}
</style>


