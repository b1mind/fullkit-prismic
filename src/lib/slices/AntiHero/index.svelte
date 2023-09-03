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
			{#if prismic.isFilled.image(slice.primary.image)}
				<PrismicImage field={slice.primary.image} />
			{/if}
		</div>

		<header>
			{#if prismic.isFilled.richText(slice.primary.heading)}
				<PrismicRichText
					field={slice.primary.heading}
					components={{
						label: Label
					}}
				/>
			{/if}

			{#if prismic.isFilled.richText(slice.primary.text)}
				<PrismicRichText field={slice.primary.text} />
			{/if}

			{#if prismic.isFilled.richText(slice.primary.text2)}
				<PrismicRichText field={slice.primary.text2} />
			{/if}

			{#if prismic.isFilled.link(slice.primary.button)}
				{#if slice.primary.button_type === 'primary'}
					<PrismicLink class="btn-primary" field={slice.primary.button}>
						{slice.primary.button_text}
					</PrismicLink>
				{:else if slice.primary.button_type === 'secondary'}
					<PrismicLink class="btn-secondary" field={slice.primary.button}>
						{slice.primary.button_text}
					</PrismicLink>
				{:else}
					<PrismicLink field={slice.primary.button}>
						{slice.primary.button_text}
					</PrismicLink>
				{/if}
			{/if}
		</header>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 400px;
	}

	header {
		padding: var(--content-padding);
	}

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

	//todo put text-shadow on children richText remove parents
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
		padding-block: var(--spacer-lg);

		.img {
			border-radius: var(--round-out, 10px);
		}
	}

	[data-slice-variation*='Full'] {
		text-align: center;
		background-color: var(--secondary-bg);
		& > * {
			grid-column: full;
		}
	}
</style>
