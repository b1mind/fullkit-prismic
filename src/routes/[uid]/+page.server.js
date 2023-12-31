import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';
import { isFilled } from '@prismicio/client';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const client = createClient({ fetch });

	const page = await client.getByUID('page', params.uid);

	//fixme contentRelationship fetch from component not page
	let data = page.data.slices.filter((item) => item.slice_type === 'testimonials');

	let testimonials;

	//fixme is this really the way?
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
