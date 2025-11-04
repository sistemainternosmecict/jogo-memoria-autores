<script lang="ts">
	import type { PuzzlePiece } from '$lib/utils/puzzleUtils';
	import PuzzlePieceComponent from './puzzlePiece.svelte';

	const {
		pieces,
		imageSrc,
		onPieceDrop,
		draggedPiece
	}: {
		pieces: PuzzlePiece[];
		imageSrc: string;
		onPieceDrop: (slotIndex: number) => void;
		draggedPiece: PuzzlePiece | null;
	} = $props();

	const BOARD_COLS = 3;
	const BOARD_ROWS = 3;
	const PIECE_WIDTH = 120;
	const PIECE_HEIGHT = 160;

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		e.dataTransfer!.dropEffect = 'move';
	}

	function handleDrop(e: DragEvent, slotIndex: number) {
		e.preventDefault();
		onPieceDrop(slotIndex);
	}

	function getSlotHighlight(slotIndex: number): boolean {
		if (!draggedPiece) return false;
		return draggedPiece.correctPosition === slotIndex;
	}
</script>

<div class="puzzle-board">
	{#each Array(BOARD_ROWS * BOARD_COLS) as _, index}
		{@const placedPiece = pieces.find((p) => p.isPlaced && p.currentPosition === index)}
		{@const isCorrectSlot = getSlotHighlight(index)}
		<div
			class="puzzle-slot {placedPiece ? 'filled' : 'empty'} {isCorrectSlot ? 'highlight' : ''}"
			role="region"
			aria-label="Slot {index + 1} do quebra-cabeça"
			ondragover={handleDragOver}
			ondrop={(e) => handleDrop(e, index)}
			style="width: {PIECE_WIDTH}px; height: {PIECE_HEIGHT}px;"
		>
			{#if placedPiece}
				<PuzzlePieceComponent
					piece={placedPiece}
					{imageSrc}
					pieceWidth={PIECE_WIDTH}
					pieceHeight={PIECE_HEIGHT}
					onDragStart={() => {}}
					onDragEnd={() => {}}
					isPlaced={true}
				/>
			{:else}
				<div class="slot-number">{index + 1}</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.puzzle-board {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 0.5rem;
		padding: 1rem;
		background: rgba(6, 54, 54, 0.1);
		border-radius: 1rem;
		box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.puzzle-slot {
		border: 2px dashed rgba(6, 54, 54, 0.3);
		border-radius: 0.75rem;
		transition: all 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.puzzle-slot.empty:hover {
		background: rgba(82, 145, 173, 0.1);
		border-color: rgba(82, 145, 173, 0.5);
	}

	.puzzle-slot.highlight {
		background: rgba(82, 145, 173, 0.2);
		border-color: rgba(82, 145, 173, 0.8);
		border-style: solid;
		animation: pulse 0.5s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.02);
		}
	}

	.puzzle-slot.filled {
		border: none;
	}

	.slot-number {
		font-size: 48px;
		font-weight: bold;
		color: rgba(6, 54, 54, 0.3);
		user-select: none;
		pointer-events: none;
	}
</style>
