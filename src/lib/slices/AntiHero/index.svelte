<script>
	import * as prismic from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Label from './Label.svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import("@prismicio/client").Content.AntiHeroSlice} */
	export let slice;
	$$restProps;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="layer">
		<div class="img">
			<PrismicImage field={slice.primary.image} />
		</div>
		<header>
			<PrismicRichText
				field={slice.primary.heading}
				components={{
					label: Label
				}}
			/>
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
		max-height: 720px;
		position: relative;
		isolation: isolate;
		overflow: hidden;
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
		grid-template-areas: 'l';
		place-items: center;
		text-shadow: 2px 1px 2px black;
		font-size: var(--text-med);

		& > * {
			grid-area: l;
			z-index: 1;
		}
	}

	[data-slice-variation='default'] {
		grid-column: content;
		.img {
			border-radius: var(--round-out, 10px);
		}
	}

	[data-slice-variation='full'] {
		text-align: center;
		background-color: var(--secondary-bg);
		& > * {
			grid-column: full;
		}
	}
</style>
