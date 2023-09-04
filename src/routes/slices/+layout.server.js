import { createClient } from '$lib/prismicio';

export async function load() {
	const client = createClient();

	const sliceNav = await client.getAllByType('slicePage');

	return { sliceNav };
}
