import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit({ hot: !process.env.VITEST })],
	optimizeDeps: {
		include: ['highlight.js', 'highlight.js/lib/core']
	},
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['json'],
			outputFile: './coverage/output.json'
		}
	}
};

export default config;
