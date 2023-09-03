<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<SliceZone slices={data.page.data.slices} {components} />
