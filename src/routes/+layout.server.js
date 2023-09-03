import { createClient } from '$lib/prismicio';

export async function load() {
	const client = createClient();

	const navigation = await client.getSingle('navigation');
	const settings = await client.getSingle('settings');
	const footer = await client.getSingle('footer');
	// const sliceNav = await client.getSingle('sliceNav');

	return { navigation, settings, footer };
}
