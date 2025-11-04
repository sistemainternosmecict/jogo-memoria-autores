import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Usar o adapter-static
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html', // Alterado para não sobrescrever index.html
			strict: false
		}),

		// Gera todas as rotas possíveis durante o build
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignora erros 404 de imagens durante o prerender
				if (path.startsWith('/cartas/')) {
					return;
				}
				throw new Error(message);
			},
			entries: ['*']
		}
	}
};

export default config;
