<script lang="ts">
	// import { something } from "$lib/db";
	import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
	// Get these dynamically
	let category = ["Mat", "Drikke", "Iskrem", "Bakevarer"];
</script>

<div class="container p-10 space-y-4">
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
			>Homepage</span
		>
	</h1>

	<RadioGroup
		active="variant-filled-primary"
		hover="hover:variant-soft-primary"
		rounded="rounded-container-token"
		flexDirection="flex-col"
	>
		{#each category as name}
			<RadioItem
				bind:group={category}
				label={name}
				{name}
				value={name}>{name}</RadioItem
			>
		{/each}
	</RadioGroup>
</div>
