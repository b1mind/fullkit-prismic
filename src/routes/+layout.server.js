import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch });

	const { data } = await client.getSingle('navigation');

	return data;
}
