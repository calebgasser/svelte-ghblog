<script type="text/typescript">
  import type { Directory } from "./store"
  import { displayPage } from "./store"

  export let name = "";
  export let path = "";
  $: noExtensionName = name.slice(0, name.lastIndexOf('.')) 

	function setDisplay() {
    console.log($displayPage)
		$displayPage = path;
    console.log($displayPage)
	}
</script>

<span on:click={setDisplay}>{noExtensionName}</span>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
