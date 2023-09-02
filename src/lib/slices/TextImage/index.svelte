<script>
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	/** @type {import("@prismicio/client").Content.CardSlice} */
	export let slice;
	$$restProps;
</script>

<section
	class="container"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<figure class="grid" class:alt={slice.variation === 'imageLeft'}>
		<figcaption>
			<PrismicRichText field={slice.primary.text} />
		</figcaption>
		<div class="img">
			<PrismicImage field={slice.primary.image} />
		</div>
	</figure>
</section>

<style lang="scss">
	figure {
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'content img';
		gap: 1rem;

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
			grid-template-areas:
				'content'
				'img';
		}
	}

	figcaption {
		grid-area: content;
	}

	.img {
		border-radius: 10px;
		overflow: hidden;
	}

	.alt {
		grid-template-areas: 'img content';
		@media (max-width: 600px) {
			grid-template-areas:
				'img'
				'content';
		}
	}
</style>
