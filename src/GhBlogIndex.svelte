<script type="text/typescript">
	import { displayPage, markdownPaths } from './store';

	function tree(paths: Array<string>) {
		let result = {};
		paths.forEach((p: string) => p.split('/').reduce((o, k) => (o[k] = o[k] || {}), result));
		console.log(result);
	}
	function setDisplay(path: string) {
		$displayPage = path;
	}
</script>

{tree($markdownPaths)}
{#each $markdownPaths as path}
	<slot {setDisplay} {path} />
{/each}
