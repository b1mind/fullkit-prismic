<script>
	import Heading from '$lib/components/Heading.svelte';
	export let size = 'sm';
</script>

<Heading tag="h3" --heading="var(--title-{size})">
	<slot />
</Heading>
