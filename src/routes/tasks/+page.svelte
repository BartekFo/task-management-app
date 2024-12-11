<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import Button from '$lib/components/ui/button/button.svelte';
	import { TaskItem } from './components/taskItem';
</script>

<div class="flex flex-col gap-6">
	<h1>Lista zadań</h1>
	<div class="h-px w-full bg-black"></div>
	<Button class="max-w-max" href="/tasks/add">Nowe zadanie</Button>
	{#if $taskStore.length === 0}
		<p class="text-gray-600">Brak zadań do wyświetlenia</p>
	{:else}
		<div class="space-y-4">
			{#each $taskStore as task}
				<TaskItem {...task} />
			{/each}
		</div>
	{/if}
</div>
