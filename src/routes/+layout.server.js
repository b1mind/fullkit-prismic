import { createClient } from '$lib/prismicio';

export async function load({ fetch }) {
	const client = createClient({ fetch });

	const navigation = client.getSingle('navigation');
	const settings = client.getSingle('settings');
	const footer = client.getSingle('footer');

	return { navigation, settings, footer };
}
