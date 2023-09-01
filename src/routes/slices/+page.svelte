<script>
	import { SliceZone, PrismicRichText } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div>
	<PrismicRichText field={data.page.data.title} />
	<PrismicRichText field={data.page.data.text} />
</div>

<SliceZone slices={data.page.data.slices} {components} />
