<script type="text/typescript">
	import { displayPage, markdownFiles, markdownPaths, directories, type Directory } from './store';

	export let repo = '';
	export let branch = '';
  export let subDirectory = '';
  export let trimSubdiretory = false;

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

	function createNode(path: string[], tree: Directory[], fullPath: string): void {
		const name = path.shift();
		const idx = tree.findIndex((e: Directory) => {
			return e.name == name;
		});
		if (idx < 0) {
			if ((name || '').includes('.md')) {
				tree.push({
					name: name || '',
					path: fullPath,
					files: []
				});
			} else {
				tree.push({
					name: name || '',
					files: []
				});
			}
			if (path.length !== 0) {
				createNode(path, tree[tree.length - 1].files, fullPath);
			}
		} else {
			createNode(path, tree[idx].files, fullPath);
		}
	}

	function parseDirectories(data: string[]): Directory[] {
		const tree: Directory[] = [];
		for (let i = 0; i < data.length; i++) {
			const path: string = data[i];
			const split: string[] = path.split('/');
			createNode(split, tree, path);
		}
		return tree;
	}

	async function getData() {
		let ghData: GitTree = await (
			await fetch(`https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`, {
				method: 'GET'
			})
		).json();
		for (let tree of ghData['tree']) {
			if (tree.path?.includes('.md') && tree.path?.startsWith(subDirectory)) {
				let fileReq: string = await (
					await fetch(`https://raw.githubusercontent.com/${repo}/${branch}/${tree.path}`)
				).text();
        if (trimSubdiretory){
          $markdownPaths = [...$markdownPaths, tree.path?.replace(subDirectory + "/", "")];
          $markdownFiles.set(tree.path.replace(subDirectory + "/", ""), fileReq || '');
        } else {
				  $markdownPaths = [...$markdownPaths, tree.path || ""];
				  $markdownFiles.set(tree.path || "", fileReq || '');
        }
			}
		}
		$directories = parseDirectories($markdownPaths);
		$displayPage = $directories[0].name;
		console.log($directories);
	}
</script>

{#await getData()}
	<slot name="loading">Loading...</slot>
{:then}
	<slot name="loaded" file={$markdownFiles.get($displayPage)} />
{:catch error}
	<slot name="error" {error} />
{/await}
