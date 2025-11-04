<script lang="ts">
	import { onMount } from 'svelte';
	import Titulo from '$lib/components/titulo.svelte';
	import PuzzlePieceComponent from '$lib/components/puzzlePiece.svelte';
	import PuzzleBoard from '$lib/components/puzzleBoard.svelte';
	import PuzzleWinScreen from '$lib/components/puzzleWinScreen.svelte';
	import {
		createPuzzlePieces,
		shufflePuzzlePieces,
		checkPuzzleComplete,
		isPieceInCorrectPosition,
		type PuzzlePiece
	} from '$lib/utils/puzzleUtils';

	const IMAGE_SRC = '/puzzle/puzzle.jpg';
	const PIECE_WIDTH = 120;
	const PIECE_HEIGHT = 160;

	let pieces = $state<PuzzlePiece[]>([]);
	let draggedPiece = $state<PuzzlePiece | null>(null);
	let isComplete = $state(false);

	function initializePuzzle() {
		const initialPieces = createPuzzlePieces(3, 3);
		pieces = shufflePuzzlePieces(initialPieces);
		isComplete = false;
	}

	function handleDragStart(piece: PuzzlePiece) {
		draggedPiece = piece;
	}

	function handleDragEnd() {
		draggedPiece = null;
	}

	function handlePieceDrop(slotIndex: number) {
		if (!draggedPiece) return;

		const pieceIndex = pieces.findIndex((p) => p.id === draggedPiece!.id);
		if (pieceIndex === -1) return;

		// Verificar se a peça pertence a este slot (posição correta)
		if (pieces[pieceIndex].correctPosition !== slotIndex) {
			draggedPiece = null;
			return; // Não permite colocar a peça no lugar errado
		}

		// Check if slot is already occupied
		const occupiedPiece = pieces.find((p) => p.isPlaced && p.currentPosition === slotIndex);
		if (occupiedPiece) return;

		// Update piece position - só chega aqui se for a posição correta
		pieces[pieceIndex] = {
			...pieces[pieceIndex],
			currentPosition: slotIndex,
			isPlaced: true // Sempre true porque já validamos acima
		};

		// Check if puzzle is complete
		if (checkPuzzleComplete(pieces)) {
			setTimeout(() => {
				isComplete = true;
			}, 300);
		}

		draggedPiece = null;
	}

	function resetPuzzle() {
		initializePuzzle();
	}

	onMount(() => {
		initializePuzzle();
	});

	const unplacedPieces = $derived(pieces.filter((p) => !p.isPlaced));
</script>

<div class="select-none min-h-screen bg-white flex flex-col">
	<!-- Header -->
	<section class="flex flex-wrap justify-center">
		<div
			class="shadow-xl flex flex-col sm:flex-row items-center bg-[#063636] p-4 z-10 justify-between w-screen"
		>
			<Titulo class="logo drag-none w-64 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]" />

			<section class="p-2 flex flex-row items-center gap-4">
				<a
					href="/"
					class="bg-[#5291ad] hover:bg-[#4994ce] px-6 py-3 rounded-xl text-white font-bold transition-all duration-300 hover:scale-105 poppins-semibold"
				>
					← Voltar ao Menu
				</a>
				<img
					class="drag-none max-w-20 sm:max-w-28 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]"
					src="/LOGO_FLIS.svg"
					alt="logo da flis"
				/>
				<img
					class="drag-none max-w-34 sm:max-w-54 drop-shadow-[0_1px_2px_rgba(0,0,0,1)]"
					src="/logo_edu.svg"
					alt="logo da sub de tecnologia"
				/>
			</section>
		</div>
	</section>

	<!-- Main Content -->
	<div class="flex-1 flex flex-col lg:flex-row gap-8 p-8 items-center justify-center">
		<!-- Puzzle Board -->
		<div class="flex flex-col items-center gap-4">
			<h2 class="text-3xl font-bold text-[#063636] poppins-bold">Monte o Quebra-Cabeça</h2>
			<PuzzleBoard {pieces} imageSrc={IMAGE_SRC} onPieceDrop={handlePieceDrop} {draggedPiece} />
		</div>

		<!-- Sidebar -->
		<div class="flex flex-col gap-6 items-center">
			<!-- Reference Image -->
			<div class="flex flex-col items-center gap-2">
				<h3 class="text-xl font-semibold text-[#063636] poppins-semibold">Imagem de Referência</h3>
				<div
					class="reference-image rounded-2xl overflow-hidden shadow-xl border-4 border-[#063636]"
				>
					<img src={IMAGE_SRC} alt="Referência" class="w-full h-full object-cover" />
				</div>
			</div>

			<!-- Available Pieces -->
			<div class="flex flex-col items-center gap-4">
				<h3 class="text-xl font-semibold text-[#063636] poppins-semibold">
					Peças Disponíveis ({unplacedPieces.length})
				</h3>
				<div class="pieces-container">
					{#each unplacedPieces as piece (piece.id)}
						<PuzzlePieceComponent
							{piece}
							imageSrc={IMAGE_SRC}
							pieceWidth={PIECE_WIDTH}
							pieceHeight={PIECE_HEIGHT}
							onDragStart={handleDragStart}
							onDragEnd={handleDragEnd}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>

	{#if isComplete}
		<PuzzleWinScreen resetCallback={resetPuzzle} />
	{/if}
</div>

<style>
	.reference-image {
		width: 240px;
		height: 320px;
	}

	.pieces-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		padding: 1rem;
		background: rgba(6, 54, 54, 0.05);
		border-radius: 1rem;
	}
</style>
