<script>
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Label from './Label.svelte';

	/** @type {import("@prismicio/client").Content.RichTextSlice} */
	export let slice;
	$$restProps;
</script>

<section class="container">
	<PrismicRichText
		field={slice.primary.content}
		components={{
			label: Label
		}}
	/>
</section>
