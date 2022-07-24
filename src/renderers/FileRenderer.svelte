<script type="text/typescript">
	export let name = '';
	export let setAsDisplayPage: () => any;
</script>

<li>
	<span on:click={setAsDisplayPage}>{name}</span>
</li>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}

	li {
		padding: 0.2em 0;
	}
</style>
