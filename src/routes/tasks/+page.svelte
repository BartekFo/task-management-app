<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
</script>

<div class="max-w-2xl mx-auto">
	<h2 class="text-2xl font-bold mb-4">Lista zadań</h2>

	{#if $taskStore.length === 0}
		<p class="text-gray-600">Brak zadań do wyświetlenia</p>
	{:else}
		<div class="space-y-4">
			{#each $taskStore as task}
				<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow dark:bg-gray-800">
					<div class="flex items-center space-x-4">
						<input
							type="checkbox"
							checked={task.completed}
							on:change={() => taskStore.toggleTask(task.id)}
							class="h-4 w-4 text-blue-600"
						/>
						<div>
              <span class={task.completed ? 'line-through text-gray-500' : 'text-blue-500'}>
                {task.title}
              </span>
							{#if task.description}
								<p class="text-sm text-gray-500">{task.description}</p>
							{/if}
						</div>
					</div>
					<button
						on:click={() => taskStore.deleteTask(task.id)}
						class="text-red-500 hover:text-red-700"
					>
						Usuń
					</button>
				</div>
			{/each}
		</div>
	{/if}
</div>
