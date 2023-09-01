<script>
	export let size = 'lrg';
</script>

<h1 style="--size:var(--title-{size});">
	<slot />
</h1>

<style>
	h1 {
		font-size: var(--size, 2rem);
	}
</style>
