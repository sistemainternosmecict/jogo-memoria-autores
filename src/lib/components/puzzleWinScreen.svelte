<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	const {
		resetCallback
	}: {
		resetCallback: MouseEventHandler<any>;
	} = $props();
</script>

<main
	class="fixed z-50 inset-0 flex items-center bg-black/50 justify-center animate-fadeIn"
>
	<div
		class="flex flex-col justify-evenly items-center min-w-1/3 p-8 bg-gradient-to-br from-green-700 to-green-900 rounded-3xl shadow-2xl animate-bounceIn"
	>
		<div class="text-center mb-6">
			<h1 class="text-6xl font-bold text-white mb-2 animate-pulse">🎉 PARABÉNS! 🎉</h1>
			<p class="text-2xl text-green-100 poppins-light">Você completou o quebra-cabeça!</p>
		</div>

		<button
			onclick={resetCallback}
			class="bg-green-950 hover:bg-green-800 px-8 py-4 font-bold text-xl text-white rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg poppins-semibold"
		>
			Jogar Novamente
		</button>
	</div>
</main>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes bounceIn {
		0% {
			transform: scale(0.3);
			opacity: 0;
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.animate-fadeIn {
		animation: fadeIn 0.3s ease-out;
	}

	.animate-bounceIn {
		animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}
</style>
