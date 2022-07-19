import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const displayPage: Writable<string> = writable('');
export const markdownPaths: Writable<Array<string>> = writable([]);
export const markdownFiles: Writable<Map<string, string>> = writable(new Map());
