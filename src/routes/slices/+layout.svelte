<script>
	import { page } from '$app/stores';
	import Heading1 from '$lib/components/PrismicRichText/Heading1.svelte';
	// import { PrismicLink, PrismicText } from '@prismicio/svelte';

	export let data;
	const { sliceNav } = data;
	console.log($page);
</script>

<header class="wrap-content">
	<Heading1>{$page.data.page.data.title[0]?.text}</Heading1>
	<nav class="sub-page-navigation">
		{#each sliceNav as nav}
			<a href={nav.url}>{nav.data.title[0]?.text}</a>
		{/each}
	</nav>
</header>

<slot />

<style lang="scss">
	nav {
		padding-block-end: var(--spacer-xs, 10px);
		display: grid;
		grid-auto-flow: column;
		justify-content: end;
		align-items: center;
		gap: 1rem;
	}
</style>
