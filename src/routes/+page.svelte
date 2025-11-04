<script lang="ts">
	import Titulo from '$lib/components/titulo.svelte';
</script>

<div class="select-none min-h-screen bg-white flex flex-col">
	<!-- Header -->
	<section class="flex flex-wrap justify-center">
		<div
			class="shadow-xl flex flex-col sm:flex-row items-center bg-[#063636] p-4 z-10 justify-between w-screen"
		>
			<Titulo class="logo drag-none w-64 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]" />

			<section class="p-2 flex flex-row items-center">
				<img
					class="drag-none m-2 max-w-20 sm:max-w-28 min-w-[0] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]"
					src="/LOGO_FLIS.svg"
					alt="logo da flis"
				/>
				<img
					class="drag-none m-2 max-w-34 sm:max-w-54 min-w-[0] drop-shadow-[0_1px_2px_rgba(0,0,0,1)]"
					src="/logo_edu.svg"
					alt="logo da sub de tecnologia"
				/>
			</section>
		</div>
	</section>

	<!-- Main Content -->
	<div class="flex-1 flex flex-col items-center justify-center p-8">
		<h1 class="text-5xl font-bold text-[#063636] mb-4 poppins-bold text-center">
			Escolha seu Jogo
		</h1>
		<p class="text-xl text-[#5291ad] mb-12 poppins-light text-center">
			Selecione uma das opções abaixo para começar a jogar
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
			<!-- Card Jogo da Memória -->
			<a
				href="/memoria"
				class="game-card bg-gradient-to-br from-[#063636] to-[#0a4a4a] rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
			>
				<div
					class="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl group-hover:animate-pulse"
				>
					🎴
				</div>
				<h2 class="text-3xl font-bold text-white poppins-bold">Jogo da Memória</h2>
				<p class="text-lg text-green-100 text-center poppins-light">
					Encontre os pares de cartas iguais
				</p>
				<span
					class="bg-[#5291ad] hover:bg-[#4994ce] px-8 py-3 rounded-xl text-white font-bold transition-all duration-300 poppins-semibold"
				>
					Jogar Agora →
				</span>
			</a>

			<!-- Card Quebra-Cabeça -->
			<a
				href="/puzzle"
				class="game-card bg-gradient-to-br from-[#5291ad] to-[#3d7a94] rounded-3xl p-8 flex flex-col items-center justify-center gap-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
			>
				<div
					class="w-32 h-32 bg-white rounded-full flex items-center justify-center text-6xl group-hover:animate-pulse"
				>
					🧩
				</div>
				<h2 class="text-3xl font-bold text-white poppins-bold">Quebra-Cabeça</h2>
				<p class="text-lg text-blue-100 text-center poppins-light">
					Monte a imagem arrastando as peças
				</p>
				<span
					class="bg-[#063636] hover:bg-[#0a4a4a] px-8 py-3 rounded-xl text-white font-bold transition-all duration-300 poppins-semibold"
				>
					Jogar Agora →
				</span>
			</a>
		</div>
	</div>
</div>

<style>
	.game-card {
		min-height: 400px;
		cursor: pointer;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	.group:hover .group-hover\:animate-pulse {
		animation: pulse 1s infinite;
	}
</style>


