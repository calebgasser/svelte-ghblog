<script type="text/typescript">
	import GhBlogFolder from './GhBlogFolder.svelte';
	import FolderRenderer from './renderers/FolderRenderer.svelte';
	import FileRenderer from './renderers/FileRenderer.svelte';
	import { directories } from './store';
	export let renderers = {
		folder: FolderRenderer,
		file: FileRenderer
	};
</script>

<GhBlogFolder files={$directories} {renderers} />
