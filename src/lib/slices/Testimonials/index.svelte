<script>
	import PrismicRichText from '$lib/components/PrismicRichText.svelte';
	import { createClient, isFilled } from '@prismicio/client';
	import { page } from '$app/stores';
	// import { onMount } from 'svelte';

	/** @type {import("@prismicio/client").Content.TestimonialsSlice} */
	export let slice;
	$$restProps;

	// use this or a function in a await block ... not ideal and client side.
	// let testimonials = [];
	// onMount(async () => {
	// 	const client = createClient('fullkit-prismic');
	// 	testimonials = await Promise.all(
	// 		slice.items.map((item) => {
	// 			if (isFilled.contentRelationship(item.testimonial)) {
	// 				return client.getByUID('testimonial', item.testimonial.uid);
	// 			}
	// 		})
	// 	);
	// });
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} />
	{#each $page.data.testimonials as item}
		{item.data.person}
		{item.data.title}
		<PrismicRichText field={item.data.text} />
	{/each}
</section>

<style>
	section {
		grid-column: content;
	}
</style>
