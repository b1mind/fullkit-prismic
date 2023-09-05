import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { isFilled } from '@prismicio/client';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const client = createClient();

	const page = await client.getByUID('page', params.uid);

	//fix contentRelationship fetch from component?
	let data = page.data.slices.filter((item) => item.slice_type === 'testimonials');

	let testimonials;

	if (data.length > 0) {
		let items = data.flatMap((item) =>
			item.items.map((item) => {
				return item.testimonial;
			})
		);

		testimonials = await Promise.all(
			items.map((item) => {
				if (isFilled.contentRelationship(item)) {
					return client.getByUID('testimonial', item.uid);
				}
			})
		);
	}

	return {
		page,
		testimonials,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}
