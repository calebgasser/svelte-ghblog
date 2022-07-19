<script>
	import { HighlightAuto } from 'svelte-highlight';
	import monokaiSublime from 'svelte-highlight/styles/monokai-sublime';
	export let lang;
	export let text;
</script>

<svelte:head>
	{@html monokaiSublime}
</svelte:head>

<pre class={lang}><code><HighlightAuto code={text} /></code></pre>
