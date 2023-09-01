<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import Heading1 from '$lib/components/PrismicRichText/Heading1.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Heading1 size="sml">TEST heading</Heading1>

<PrismicRichText field={data.page.data.title} />
<PrismicRichText field={data.page.data.text} />

<SliceZone slices={data.page.data.slices} {components} />
