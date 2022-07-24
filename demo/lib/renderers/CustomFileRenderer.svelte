<script type="text/typescript">
	export let name = '';
	export let setAsDisplayPage: () => any;
	export let isSelected = false;
</script>

<li>
	<span class:isSelected on:click={setAsDisplayPage}>{name}</span>
</li>

<style>
	.isSelected {
		color: aquamarine;
	}

	span {
		padding: 0 0 0 1.5em;
		background: url(/article.svg) 0 0.1em no-repeat;
		background-size: 1em 1em;
		cursor: pointer;
	}

	li {
		padding: 0.2em 0;
	}
</style>
