<script>
	import Heading from '$lib/components/Heading.svelte';
	export let size = 'md';
</script>

<Heading tag="h2" --heading="var(--title-{size})">
	<slot />
</Heading>
