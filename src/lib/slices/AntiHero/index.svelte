<script>
	import * as prismic from '@prismicio/client'
	import { PrismicImage } from '@prismicio/svelte'
	import Label from '$lib/components/Label.svelte'

	import PrismicRichText from '$lib/components/PrismicRichText.svelte'
	import Button from '$lib/components/Button.svelte'

	//fixme type for bg_color?
	// /** @type {import("@prismicio/client").Content.AntiHeroSlice} */
	/** @type any */
	export let slice
	$$restProps
</script>

<section
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	style="background-color: var(--{slice.primary.bg_color}-bg);"
>
	<div class="layer">
		<div class="img">
			{#if prismic.isFilled.image(slice.primary.image)}
				<PrismicImage
					field={slice.primary.image}
					aria-hidden={slice.variation === 'pFull' || 'default' ? true : undefined}
				/>
			{/if}
		</div>

		<header>
			<hgroup>
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
			</hgroup>

			{#if prismic.isFilled.link(slice.primary.button)}
				<Button {slice}>
					{slice.primary.button_text}
				</Button>
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

		& > hgroup {
			font-size: var(--text-md);
			text-shadow: 2px 1px 2px black;
		}
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

	.layer {
		display: grid;
		grid-template-areas: 'l';
		place-items: center;

		& > * {
			grid-area: l;
			z-index: 1;
		}
	}

	[data-slice-variation='default'] {
		grid-column: content;
		padding-block: var(--spacer-lg);

		.img {
			border-radius: var(--radius-img, 10px);
		}
	}

	[data-slice-variation*='Full'] {
		text-align: center;

		& > * {
			grid-column: full;
		}
	}
</style>
