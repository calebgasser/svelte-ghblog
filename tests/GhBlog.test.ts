import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import GhBlog from '../src/GhBlog.svelte';

describe('GhBlog Tests', () => {
	it('Show GhBlog output', () => {
		const { getByText } = render(GhBlog);

		expect(() => getByText(/Loading.../i)).not.toThrow();
	});
});
