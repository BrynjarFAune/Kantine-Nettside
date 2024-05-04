<script lang="ts">
	import "../app.postcss";
	import { AppBar } from "@skeletonlabs/skeleton";
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/" class="h2">KantineBV</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a href="/admin" class="btn variant-filled-primary">Admin</a>
	</svelte:fragment>
</AppBar>
<slot />
