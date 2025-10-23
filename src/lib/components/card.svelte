<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	const {
		iconSrc,
		name,
		flipped,
		mouseClick
	}: {
		mouseClick: MouseEventHandler<any>;
		iconSrc: string;
		name: string;
		flipped: boolean;
	} = $props();
</script>

<button onclick={mouseClick} class="perspective">
	<div class="card-container {flipped ? 'flipped' : ''}">
		<!-- Front -->
		<figure class="card-side front flex w-full justify-stretch text-white">
			<div class=" dr ax-h-[176px] min-w-0 flex-1 overflow-hidden rounded-t-2xl bg-white">
				<img src={iconSrc} alt={name} class="h-full object-cover"/>
			</div>
			<figcaption
				class="w-full text-wrap whitespace-wrap break-all content-center rounded-b-xl bg-green-900 p-2 text-xl font-bold"
			>
				{name}
			</figcaption>
		</figure>

		<!-- Back -->
		<figure class="card-side back items-center justify-center bg-black text-white"></figure>
	</div>
</button>

<style>

	.perspective {
		background: none;
        border: none;
        padding: 0;
        cursor: pointer;
		transition: 0.2s linear;
		perspective: 1000px;
	}
.perspective:hover {
        transform: scale(1.05);
        backdrop-filter: drop-shadow(4px 4px 10px red);
    }
	.card-container {
		position: relative;
		width: 11rem;
		height: 17rem;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	}

	.card-container.flipped {
		transform: rotateY(180deg);
	}

	.card-side {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		border-radius: 1rem;
		background-size: cover;
	}

	.card-side.front {
		transform: rotateY(0deg);
		background-image: url('/frontCard.png');
	}

	.card-side.back {
		transform: rotateY(180deg);
		background-image: url('/card.svg');
		background-color: #0d3f4b;
		background-size: contain;
	}
</style>
