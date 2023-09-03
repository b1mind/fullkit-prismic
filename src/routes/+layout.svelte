<script>
	import '$lib/sass/global.scss';
	import { page } from '$app/stores';
	import { PrismicLink } from '@prismicio/svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	//learn how to get the proper types lul
	/** @type any */
	const { navigation, settings, footer } = data;

	let date = new Date().getFullYear();
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

<div class="wrapper">
	<header>
		<a href="/" class="logo">{settings.data.siteName}</a>

		<nav>
			{#each navigation.data.nav as nav}
				{@const currentUrl = $page.url.pathname === nav.link.url ? 'page' : undefined}

				<PrismicLink aria-current={currentUrl} field={nav.link}>
					{nav.label}
				</PrismicLink>
			{/each}
		</nav>
	</header>

	<main class="wrap-full spacer">
		<slot />
	</main>

	<footer>
		<b> {settings.data.siteName} &#169; copyright {date}</b>
		<PrismicLink field={footer.data.policy}>Privacy Policy</PrismicLink>
	</footer>
</div>

<style lang="scss">
	header {
		grid-column: content;
		padding-block: 1rem;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		font-size: 1.25rem;
	}

	.logo {
		color: white;
	}

	nav {
		display: grid;
		grid-auto-flow: column;
		align-items: center;
		gap: 1rem;
	}

	main {
		grid-template-rows: auto 1fr;
	}

	footer {
		grid-column: content;
		padding-block: 1rem;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
	}
</style>
