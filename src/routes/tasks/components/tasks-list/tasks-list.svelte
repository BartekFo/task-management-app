<script lang="ts">
	import type { TasksListProps } from './index.js';
	import { TaskItem } from '../task-item';

	const { tasks }: TaskListProps = $props();
</script>

{#if tasks.length === 0}
	<p class="text-gray-600">Brak zadań do wyświetlenia</p>
{:else}
	<div class="space-y-4">
		{#each tasks as task}
			<TaskItem {...task} />
		{/each}
	</div>
{/if}
