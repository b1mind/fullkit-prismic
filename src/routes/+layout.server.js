import { createClient } from '$lib/prismicio';

export async function load() {
	const client = createClient();

	const navigation = client.getSingle('navigation');
	const settings = client.getSingle('settings');
	const footer = client.getSingle('footer');

	return { navigation, settings, footer };
}
