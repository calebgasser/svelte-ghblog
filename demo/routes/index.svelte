<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Code from '$lib/renderers/Code.svelte';
	import GhBlog from '../../src/GhBlog.svelte';
	import GhBlogIndex from '../../src/GhBlogIndex.svelte';
</script>

<div style="width: 100vw; height: 100vh; background-color: slategray; padding: 16px;">
	<div class="flex-container">
		<div
			class="flex"
			style="display: flex; flex-direction: column; border-right: solid 1px; padding-right: 6px"
		>
			<GhBlogIndex let:setDisplay let:path>
				<button on:click={setDisplay(path)}>{path}</button>
			</GhBlogIndex>
		</div>
		<div style="align-content: center; justify-content: center; width: 75%; padding-left: 6px">
			<GhBlog let:file>
				<div slot="loading">
					<h1>Loading...</h1>
				</div>
				<div slot="loaded">
					<SvelteMarkdown source={file} renderers={{ code: Code }} />
				</div>
			</GhBlog>
		</div>
	</div>
</div>

<style>
	.flex-container {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
</style>
