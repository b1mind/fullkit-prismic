<script>
	import { page } from '$app/stores';

	export let data;
	//fixme type any
	/** @type any */
	const { sliceNav } = data;
</script>

<nav class="wrap-content" aria-label="slices">
	{#each sliceNav as nav}
		{@const currentUrl = $page.url.pathname.includes(nav?.url) ? 'page' : undefined}
		<a href={nav.url} aria-current={currentUrl}>{nav.data.title[0]?.text}</a>
	{/each}
</nav>

<slot />

<style lang="scss">
	nav {
		padding-block-end: var(--spacer-sm);
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
		align-items: center;
		gap: 0.5rem 1rem;

		a::after {
			transform-origin: left;
		}
		a:hover::after {
			transform-origin: right;
		}
	}
</style>
