<script>
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Label from '$lib/components/Label.svelte';

	/** @type {import("@prismicio/client").Content.PageHeadingSlice} */
	export let slice;
</script>

<section
	class="wrap-content"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<PrismicRichText
		field={slice.primary.heading}
		components={{
			label: Label
		}}
	/>
</section>
