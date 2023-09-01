<script>
	import Heading from '$lib/components/Heading.svelte';
	export let size = 'sm';
</script>

<Heading tag="h3" --size="var(--title-{size})">
	<slot />
</Heading>
