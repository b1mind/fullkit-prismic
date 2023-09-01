<script>
	import Heading from '$lib/components/Heading.svelte';
	export let size = 'lg';
</script>

<Heading tag="h1" --heading="var(--title-{size})">
	<slot />
</Heading>
