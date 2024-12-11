<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import type { Props } from './index.js';

	const { completed, id, description, title }: Props = $props();
</script>

<div
	class={`flex items-center justify-between rounded-lg border border-black bg-white p-4 shadow-md dark:bg-gray-800 ${completed ? 'bg-[#D2D2D2]' : ''}`}
>
	<div class="flex flex-col">
		<div class="flex items-center gap-2">
			<Checkbox
				id="terms"
				checked={completed}
				onCheckedChange={() => taskStore.toggleTask(id)}
				aria-labelledby="terms-label"
			/>
			<Label
				id="terms-label"
				for="terms"
				class={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${completed ? 'line-through' : ''}`}
			>
				{title}
			</Label>
		</div>
		{#if description}
			<p class={`text-sm ${completed ? 'line-through' : ''}`}>{description}</p>
		{/if}
	</div>
	<Button
		variant="ghost"
		onclick={() => taskStore.deleteTask(id)}
		class="text-red-500 hover:text-red-700"
	>
		Usuń
	</Button>
</div>
