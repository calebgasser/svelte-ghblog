<script type="text/typescript">
	import GhBlogFile from './GhBlogFile.svelte';
	import type { Directory } from './store';

	export let expanded = false;
	export let name: string;
	export let files: Array<Directory>;

	function toggle() {
		expanded = !expanded;
	}
</script>

<span class:expanded on:click={toggle}>{name}</span>

{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.files.length > 0}
					<svelte:self name={file.name} files={file.files} {expanded} />
				{:else}
					<GhBlogFile {...file} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	span {
		padding: 0 0 0 1.5em;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
</style>
