<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<!-- <PrismicRichText field={data.page.data.title} />
<PrismicRichText field={data.page.data.text} /> -->

<SliceZone slices={data.page.data.slices} {components} />
