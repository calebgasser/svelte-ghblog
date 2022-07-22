<script type="text/typescript">
	import GhBlogCategory from './GhBlogCategory.svelte';
	import GhBlogFolder from './GhBlogFolder.svelte';
	import { displayPage, markdownPaths, directories, type Directory } from './store';

	let categoryName = '';
</script>

<GhBlogFolder name="Blog" files={$directories} expanded={true} />
