import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = ({ params }) => {
	// Lista hardcoded das cartas disponíveis
	const cartas = [
		'cecilia_1', 'cecilia_2', 'cecilia_3', 'cecilia_4',
		'clarice_1', 'clarice_2', 'clarice_3', 'clarice_4',
		'conceicao_1', 'conceicao_2', 'conceicao_3', 'conceicao_4',
		'cora_1', 'cora_2', 'cora_3', 'cora_4',
		'rachel_1', 'rachel_2', 'rachel_3', 'rachel_4'
	];

	return {
		options: cartas.map((fileName) => ({
			name: fileName,
			path: `cartas/${fileName}.png`,
			carta: fileName.split('_')[0],
			variante: fileName.split('_')[1]
		}))
	};
};
