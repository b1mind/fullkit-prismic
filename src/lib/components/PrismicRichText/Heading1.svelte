<script>
	import Heading from '$lib/components/Heading.svelte';
	export let size = 'lg';
</script>

<Heading tag="h1" --size="var(--title-{size})">
	<slot />
</Heading>
