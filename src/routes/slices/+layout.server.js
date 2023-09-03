import { createClient } from '$lib/prismicio';

export async function load() {
	const client = createClient();

	//todo find away to bring in a PrismicLink array? -->
	const sliceNav = await client.getAllByType('slicePage');

	return { sliceNav };
}
