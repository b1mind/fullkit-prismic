import { createClient } from '$lib/prismicio';

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const sliceNav = await client.getAllByType('slicePage');

	return { sliceNav };
}
