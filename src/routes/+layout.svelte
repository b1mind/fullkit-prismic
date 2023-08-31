<script>
	import './global.scss';
	import { page } from '$app/stores';
	import { PrismicLink, PrismicText } from '@prismicio/svelte';

	export let data;
	const { navigation, settings } = data;
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	{#if $page.data.meta_description}
		<meta name="description" content={$page.data.meta_description} />
	{/if}
	{#if $page.data.meta_title}
		<meta name="og:title" content={$page.data.meta_title} />
	{/if}
	{#if $page.data.meta_image}
		<meta name="og:image" content={$page.data.meta_image.url} />
	{/if}
</svelte:head>

<header>
	<b>
		{settings.data.siteName}
	</b>
	<nav>
		{#each navigation.data.nav as nav}
			<span>
				<PrismicLink
					aria-current={$page.url.pathname === nav.link.url ? 'page' : undefined}
					field={nav.link}
				>
					{nav.label}
				</PrismicLink>
			</span>
		{/each}
	</nav>
</header>

<main>
	<slot />
</main>

<style>
	header {
		padding: 1rem;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		font-size: 1.25rem;
	}

	nav {
		display: grid;
		grid-auto-flow: column;
		gap: 1rem;
	}
</style>
