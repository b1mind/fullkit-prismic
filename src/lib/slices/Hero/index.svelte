<script>
	import * as prismic from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import Label from './Label.svelte';

	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Button from '$lib/components/Button.svelte';

	/** @type {import("@prismicio/client").Content.AntiHeroSlice} */
	export let slice;
	$$restProps;
</script>

<section
	class="wrap-full"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div class="layer">
		<header>
			<div>
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
			</div>

			{#if prismic.isFilled.link(slice.primary.button)}
				<Button {slice}>
					{slice.primary.button_text}
				</Button>
			{/if}
		</header>
		<div class="img">
			<PrismicImage
				field={slice.primary.image}
				aria-hidden={slice.variation === 'pFull' || 'default' ? true : undefined}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 420px;
	}

	.layer {
		grid-column: content;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas: 'l';
		place-items: center;

		& > * {
			grid-area: l;
		}
	}

	.img {
		max-height: 620px;
		position: relative;
		isolation: isolate;
		overflow: hidden;
		z-index: -1;

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			background-color: hsl(0 0% 0% / 0.55);
		}
	}

	header {
		@media (max-width: 600px) {
			padding-inline: var(--gap-sm);
		}

		& > div {
			font-size: var(--text-md);
			text-shadow: var(--shadow-txt);
		}
	}

	[data-slice-variation='default'] {
		.img {
			border-radius: var(--radius-img, 10px);
		}
	}

	[data-slice-variation*='Full'] {
		text-align: center;

		& > * {
			grid-column: full;
		}

		//wish something fun for larger screens... they deserve it! (the forgotten)
		@media (min-width: 1920px) {
			.img {
				border-radius: var(--radius-img, 10px);
			}
		}
	}

	[data-slice-variation*='Split'] {
		.layer {
			grid-column: content-start / full-end;
			grid-template-columns: 1fr 1.5fr;
			grid-template-areas: 'header img';
			column-gap: var(--gap-sm);
			justify-items: start;

			@media (max-width: 600px) {
				grid-column: full;
				grid-template-columns: 1fr;
				grid-template-areas: 'header' 'img';
			}
		}

		header {
			grid-area: header;
		}

		.img {
			grid-area: img;

			&::after {
				content: initial;
			}

			@media (max-width: 600px) {
				max-height: 420px;
			}
		}
	}
</style>
