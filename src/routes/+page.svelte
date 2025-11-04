<script lang="ts">
	import Titulo from '$lib/components/titulo.svelte';
	import TituloPuzzle from '$lib/components/tituloPuzzle.svelte';
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
			Clique em uma das imagens abaixo para começar a jogar
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
			<!-- Card Jogo da Memória -->
			<a href="/memoria" class="game-card-link group">
				<div class="game-card">
					<div class="thumbnail-container">
						<img
							src="/verso.svg"
							alt="Jogo da Memória"
							class="thumbnail-image"
						/>
						<div class="overlay">
							<span class="play-text">▶ Jogar Agora</span>
						</div>
					</div>
				<div class="card-footer">
					<Titulo class="w-64 mx-auto mb-2" />
					<p class="text-base text-[#5291ad] poppins-light">
						Encontre os pares de cartas iguais
					</p>
				</div>
				</div>
			</a>

			<!-- Card Quebra-Cabeça -->
			<a href="/puzzle" class="game-card-link group">
				<div class="game-card">
					<div class="thumbnail-container">
						<img
							src="/puzzle/puzzle.jpg"
							alt="Quebra-Cabeça"
							class="thumbnail-image"
						/>
						<div class="overlay">
							<span class="play-text">▶ Jogar Agora</span>
						</div>
					</div>
					<div class="card-footer">
						<TituloPuzzle class="w-64 mx-auto mb-2" />
						<p class="text-base text-[#5291ad] poppins-light">
							Monte a imagem arrastando as peças
						</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<style>
	.game-card-link {
		text-decoration: none;
		display: block;
	}

	.game-card {
		background: white;
		border-radius: 1.5rem;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		border: 3px solid transparent;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.game-card-link:hover .game-card {
		transform: translateY(-8px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
		border-color: #5291ad;
	}

	.thumbnail-container {
		position: relative;
		width: 100%;
		height: 350px;
		overflow: hidden;
		background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
	}

	.thumbnail-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.game-card-link:hover .thumbnail-image {
		transform: scale(1.05);
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(6, 54, 54, 0.85);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.game-card-link:hover .overlay {
		opacity: 1;
	}

	.play-text {
		color: white;
		font-size: 1.75rem;
		font-weight: bold;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		transform: translateY(10px);
		transition: transform 0.3s ease;
	}

	.game-card-link:hover .play-text {
		transform: translateY(0);
	}

	.card-footer {
		padding: 1.5rem;
		background: #000000;
		text-align: center;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card-footer p {
		margin: 0;
		color: #5291ad;
	}
</style>


