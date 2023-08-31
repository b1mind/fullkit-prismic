<script>
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
	/** @type {import("@prismicio/client").Content.CardSlice} */
	export let slice;
</script>

<section
	class="container"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<PrismicImage field={slice.primary.image} />
	<PrismicRichText field={slice.primary.text} />
</section>
