<script>
	import './global.scss';
	import { page } from '$app/stores';

	export let data;
	let { navigation, settings } = data;

	console.dir(settings);
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
		{#each navigation.data?.nav as nav}
			<a href={nav.link.url}>
				{nav.linkName}
			</a>
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
	}

	a + a {
		margin-left: 1rem;
	}
</style>
