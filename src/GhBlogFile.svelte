<script type="text/typescript">
	import { SvelteComponentTyped } from 'svelte/internal';
	import { displayPage } from './store';
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;

	export let name = '';
	export let path = '';
	export let renderer: C;
	$: noExtensionName = name.slice(0, name.lastIndexOf('.'));
	$: isSelected = $displayPage === path;

	function setAsDisplayPage() {
		$displayPage = path;
	}
</script>

<svelte:component this={renderer} name={noExtensionName} {setAsDisplayPage} {isSelected} />
