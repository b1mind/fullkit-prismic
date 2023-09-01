<script>
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	export let data;
	const { sliceNav } = data;
	console.log(sliceNav.data);
</script>

<ul>
	{#each sliceNav.data.sideNav as nav}
		<li><PrismicLink field={nav.link}>{nav.text}</PrismicLink></li>
	{/each}
</ul>

<slot />
