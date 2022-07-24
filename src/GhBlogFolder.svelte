<script type="text/typescript">
	import GhBlogFile from './GhBlogFile.svelte';
  import FolderRenderer from './renderers/FolderRenderer.svelte';
  import FileRenderer from './renderers/FileRenderer.svelte';
	import type { Directory } from './store';

	export let name = '';
	export let files: Array<Directory>;
  export let renderers = {
    folder: FolderRenderer,
    file: FileRenderer
  }; 

</script>

{#if name !== ""}
  <svelte:component this={renderers.folder} {name} {renderers}>
    {#each files as file}
    		{#if file.files.length > 0}
    			<svelte:self name={file.name} files={file.files} {renderers}/>
    		{:else}
    			<GhBlogFile name={file.name} path={file.path} renderer={renderers.file} />
        {/if}
    {/each}
  </svelte:component>
{:else}
  {#each files as file}
  		{#if file.files.length > 0}
  			<svelte:self name={file.name} files={file.files} {renderers}/>
  		{:else}
  			<GhBlogFile name={file.name} path={file.path} renderer={renderers.file} />
      {/if}
  {/each}
{/if}
