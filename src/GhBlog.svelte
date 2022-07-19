<script type="text/typescript">
	import { displayPage, markdownFiles, markdownPaths } from './store';

	let repo = 'https://api.github.com/repos/calebgasser/cgasser-blog';
	let branch = 'develop';
	/**
	 * The hierarchy between files in a Git repository.
	 */
	interface GitTree {
		sha: string;
		url: string;
		truncated: boolean;
		/**
		 * Objects specifying a tree structure
		 */
		tree: {
			path?: string;
			mode?: string;
			type?: string;
			sha?: string;
			size?: number;
			url?: string;
			[k: string]: unknown;
		}[];
		[k: string]: unknown;
	}

	/**
	 * Blob
	 */
	interface Blob {
		content: string;
		encoding: string;
		url: string;
		sha: string;
		size: number | null;
		node_id: string;
		highlighted_content?: string;
		[k: string]: unknown;
	}
	async function getData() {
		let ghData: GitTree = await (
			await fetch(repo + '/git/trees/' + branch + '?recursive=1', { method: 'GET' })
		).json();
		for (let tree of ghData['tree']) {
			if (tree.path?.includes('.md')) {
				let fileReq: Blob = await (await fetch(tree.url || '')).json();
				$markdownPaths = [...$markdownPaths, tree.path || ''];
				$markdownFiles.set(tree.path || '', atob(fileReq.content || ''));
			}
		}
		$displayPage = $markdownPaths[0];
	}
</script>

{#await getData()}
	<slot name="loading">Loading...</slot>
{:then}
	<slot name="loaded" file={$markdownFiles.get($displayPage)} />
{:catch error}
	<slot name="error" error="error" />
{/await}
