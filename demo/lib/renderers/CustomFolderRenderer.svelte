<script type="text/typescript">
  export let name = '';
  export let expanded = true;
  function toggle(){
    expanded = !expanded;
  }
</script>

<span class:expanded on:click={toggle}>{name}</span>
{#if expanded}
  <ul>
    <slot></slot>  
  </ul>
{/if}
<style>
  .expanded {
		background-image: url(/folder-open.svg);
	}

	span {
		padding: 0 0 0 1.5em;
    background: url(/folder-closed.svg) 0 0.1em no-repeat;
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

</style>
