<script>
	import SvelteMarkdown from 'svelte-markdown';
	import Code from '../lib/renderers/Code.svelte';
	import GhBlog from '../../src/GhBlog.svelte';
	import GhBlogIndex from '../../src/GhBlogIndex.svelte';
</script>

<div style="width: 100vw; height: 100vh; background-color: slategray; padding: 16px;">
	<div class="flex-container">
		<div
			class="flex"
			style="display: flex; flex-direction: column; border-right: solid 1px; padding-right: 6px"
		>
			<GhBlogIndex>
			</GhBlogIndex>
		</div>
		<div style="align-content: center; justify-content: center; width: 75%; padding-left: 6px">
      <GhBlog repo={"calebgasser/cgasser-blog"} branch={"develop"} let:file>
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
  ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
	.flex-container {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
</style>
