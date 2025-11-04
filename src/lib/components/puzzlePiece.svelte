<script lang="ts">
	import type { PuzzlePiece } from '$lib/utils/puzzleUtils';

	const {
		piece,
		imageSrc,
		pieceWidth,
		pieceHeight,
		onDragStart,
		onDragEnd,
		isPlaced = false
	}: {
		piece: PuzzlePiece;
		imageSrc: string;
		pieceWidth: number;
		pieceHeight: number;
		onDragStart: (piece: PuzzlePiece) => void;
		onDragEnd: () => void;
		isPlaced?: boolean;
	} = $props();

	function handleDragStart(e: DragEvent) {
		if (isPlaced) return;
		e.dataTransfer!.effectAllowed = 'move';
		e.dataTransfer!.setData('text/plain', piece.id.toString());
		onDragStart(piece);
	}
</script>

<div
	draggable={!isPlaced}
	ondragstart={handleDragStart}
	ondragend={onDragEnd}
	role="button"
	tabindex={isPlaced ? -1 : 0}
	class="puzzle-piece {isPlaced ? 'placed' : 'draggable'}"
	style="
    width: {pieceWidth}px;
    height: {pieceHeight}px;
    cursor: {isPlaced ? 'default' : 'grab'};
  "
>
	<div
		class="piece-image"
		style="
      background-image: url('{imageSrc}');
      background-position: {piece.imageX}% {piece.imageY}%;
      background-size: 300% 300%;
      width: 100%;
      height: 100%;
    "
	></div>
</div>

<style>
	.puzzle-piece {
		border-radius: 0.75rem;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transition: transform 0.2s, box-shadow 0.2s;
		position: relative;
	}

	.puzzle-piece.draggable:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
		cursor: grab;
	}

	.puzzle-piece.draggable:active {
		cursor: grabbing;
	}

	.puzzle-piece.placed {
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	}

	.piece-image {
		border-radius: 0.75rem;
	}
</style>
