<script>
	import Heading from '$lib/components/Heading.svelte';
	export let size = 'md';
</script>

<Heading tag="h2" --size="var(--title-{size})">
	<slot />
</Heading>
