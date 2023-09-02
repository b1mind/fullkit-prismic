<script>
	import * as prismic from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.AntiHeroSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="layer">
		<div class="img">
			<PrismicImage field={slice.primary.image} />
		</div>
		<header>
			<PrismicRichText field={slice.primary.heading} />
			<PrismicRichText field={slice.primary.text} />
			{#if prismic.isFilled.richText(slice.primary.text2)}
				<PrismicRichText field={slice.primary.text2} />
			{/if}
			{#if prismic.isFilled.link(slice.primary.button)}
				<PrismicLink field={slice.primary.button}>{slice.primary.button_text}</PrismicLink>
			{/if}
		</header>
	</div>
</section>

<style lang="scss">
	.img {
		position: relative;
		isolation: isolate;
		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-color: hsl(0 0% 0% / 0.55);
		}
	}

	//todo make full screen background or use img
	.layer {
		grid-column: content;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas: 'l';
		place-items: center;
		text-align: center;
		text-shadow: 2px 1px 2px black;
		font-size: var(--text-med);

		& > * {
			grid-area: l;
			z-index: 1;
		}
	}

	[data-slice-variation='full'] {
		background-color: var(--secondary-bg);
		overflow: hidden;
		& > * {
			grid-column: full;
		}
	}
</style>
