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
	<header class="wrap-pop">
		<div>
			<b><a href="/" class="logo">{settings.data.siteName}</a></b>

			<nav>
				{#each navigation.data.nav as nav}
					{@const currentUrl = $page.url.pathname.startsWith(nav.link.url) ? 'page' : undefined}

					<PrismicLink aria-current={currentUrl} field={nav.link}>
						{nav.label}
					</PrismicLink>
				{/each}
			</nav>
		</div>
	</header>

	<main class="wrap-full">
		<slot />
	</main>

	<footer class="wrap-pop">
		<div>
			{settings.data.siteName} &#169; copyright {date}
			<PrismicLink field={footer.data.policy}>Privacy Policy</PrismicLink>
		</div>
	</footer>
</div>

<style lang="scss">
	header {
		font-size: 1.25rem;
	}

	header,
	footer {
		padding-block: 1rem;

		& > div {
			grid-column: content;
			display: flex;
			flex-wrap: wrap;
			// grid-auto-flow: column;
			justify-content: space-between;
			align-items: center;
		}
	}

	.logo {
		display: block;
		//hacks need to refactor header (component?)
		margin-block-end: 0.4rem;
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
</style>
