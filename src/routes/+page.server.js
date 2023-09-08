// note look at all their helpers
// import { asText } from '@prismicio/client';
import { createClient } from '$lib/prismicio';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const client = createClient({ fetch });

	const page = await client.getByUID('home_page', 'home');

	return {
		page,
		title: page.data.title || 'Home Page',
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}
