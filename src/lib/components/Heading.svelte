<script>
	export let tag = 'h1';
</script>

<svelte:element this={tag} class="title">
	<slot />
</svelte:element>

<style>
	.title {
		font-size: var(--heading, 2rem);
	}
</style>
