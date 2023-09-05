<script>
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	/** @type {import("@prismicio/client").Content.CardSlice} */
	export let slice;
	$$restProps;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<figure>
		<figcaption>
			<PrismicRichText field={slice.primary.text} />
		</figcaption>
		<div class="img">
			<PrismicImage field={slice.primary.image} />
		</div>
	</figure>
</section>

<style lang="scss">
	section {
		grid-column: content;
	}

	figure {
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'text img';
		gap: 1rem;

		@media (max-width: 600px) {
			grid-column: full;
			grid-template-columns: 1fr;
			grid-template-areas:
				'text'
				'img';
		}
	}

	.img {
		grid-area: img;
		border-radius: 10px;
		overflow: hidden;
	}

	// insensitive case support ok but syntax is borked
	[data-slice-variation*='ImageLeft'] {
		figure {
			grid-template-areas: 'img text';
			@media (max-width: 600px) {
				grid-column: full;
				grid-template-areas:
					'img'
					'text';
			}
		}
	}

	//todo decide how to do multiple full variants...
	//give all letter id before pFull pFullImageLeft pImageLeft then always uppercase?
	[data-slice-variation*='Full'] {
		//have to override section
		grid-column: full;
		padding-block: var(--spacer-lg);
		background-color: var(--secondary-bg-light, grey);

		& > * {
			grid-column: content;
		}

		@media (max-width: 600px) {
			figcaption {
				padding: var(--content-padding);
			}
		}
	}
</style>
