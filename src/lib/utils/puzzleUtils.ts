export interface PuzzlePiece {
	id: number;
	correctPosition: number;
	currentPosition: number;
	imageX: number;
	imageY: number;
	isPlaced: boolean;
}

export function createPuzzlePieces(rows: number = 3, cols: number = 3): PuzzlePiece[] {
	const pieces: PuzzlePiece[] = [];
	let id = 0;

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			pieces.push({
				id: id,
				correctPosition: id,
				currentPosition: id,
				imageX: (col * 100) / (cols - 1),
				imageY: (row * 100) / (rows - 1),
				isPlaced: false
			});
			id++;
		}
	}

	return pieces;
}

export function shufflePuzzlePieces(pieces: PuzzlePiece[]): PuzzlePiece[] {
	const shuffled = [...pieces];

	// Fisher-Yates shuffle
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		shuffled[i].currentPosition = j;
		shuffled[j].currentPosition = i;
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}

export function checkPuzzleComplete(pieces: PuzzlePiece[]): boolean {
	return pieces.every((piece) => piece.isPlaced && piece.currentPosition === piece.correctPosition);
}

export function isPieceInCorrectPosition(
	piece: PuzzlePiece,
	dropPosition: number,
	tolerance: number = 0
): boolean {
	return Math.abs(dropPosition - piece.correctPosition) <= tolerance;
}
