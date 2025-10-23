<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import type { PageProps } from './$types';
	import { shuffle } from '$lib/utils';
	import WinScreen from '$lib/components/winScreen.svelte';
	const { data }: PageProps = $props();
	const { options } = data;
	const CARDS_SIZE = 9;

	type Card = {
		name: string;
		icon: string;
		flipped: boolean;
		matchFound: boolean;
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
		return left.name === right.name && left.icon == right.icon;
	}

	function setup(size: number) {
		const newCards: Card[] = [];
		let totalPairs = 0;
		for (let { name, path } of shuffle(options)) {
			newCards.push({
				icon: path,
				name,
				flipped: true,
				matchFound: false
			});
			newCards.push({
				icon: path,
				name,
				flipped: true,
				matchFound: false
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

<div class="content flex min-h-screen flex-col bg-[#0b6170] text-white">
	<section class="flex p-4">
		<h1 class=" text-shadow-lg text-center text-5xl font-bold">Jogo da Memória</h1>
		<div class="shadow-xl bottom-0 z-1 p-2 rounded-2xl flex justify-between max-h-[100px] w-screen bg-[#0b6170]">
			<img class="object-contain " src="/logo.svg" alt="logo" />

			<section class="">
					<p>Em conjunto com:</p>
					<div class="pl-3">
					 <h1 class= "font-bold">Secretaria Municipal de</h1>
					<p>Educação, Cultura, Inclusão, Ciência e Tecnologia.</p>
			</div>
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


