<script>
	//todo figure out how to import serializer and use MarkDown!
	//https://prismic.io/docs/rich-text#rich-text-serializer

	/** @type {import("@prismicio/client").Content.MarkDownSlice} */
	export let slice;
	$$restProps;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices
</section>
