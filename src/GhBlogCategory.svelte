<script type="text/typescript">
	import { directories } from './store';
	import type { Directory } from './store';
	export let directory: Directory;
	export let directoryName = '';
	export let isFile = false;
	console.log('isFile: ' + isFile);
	console.log('Category: ');
	console.log(directory);
</script>

<!--
{#if !isFile}
  <slot name="directory" directoryName={directory.name}>{directory.name}</slot>
  {#each directory.children as child}
    <svelte:self directory={child} directoryName={directory.name}>
      <div slot="directory" let:parentCategory let:isFile let:item let:children>
        <slot name="directory" parentCategory={directory.name} isFile={true} item={item}>{item}</slot>
      </div>
    </svelte:self>
  {/each}
{:else}
  <slot name="directory" isFile={isFile} parentCategory={parentCategory} item={directory.name}>{directory.name}</slot>
{/if}
-->
