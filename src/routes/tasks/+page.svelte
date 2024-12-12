<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import Button from '$lib/components/ui/button/button.svelte';
	import { TasksList } from './components/tasks-list';
	import * as Select from '$lib/components/ui/select/index.js';

	const selectOptions = [
		{ value: 'asc', label: 'Najnowsze' },
		{ value: 'desc', label: 'Najstarsze' }
	];

	let selectedSorting = $state(selectOptions[0]);
	const sortedTasks = $derived(
		$taskStore.toSorted((a, b) => {
			if (selectedSorting.value === 'asc') {
				return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
			} else {
				return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
			}
		})
	);
</script>

<div class="flex flex-col gap-6">
	<h1>Lista zadań</h1>
	<div class="h-px w-full bg-black"></div>
	<div class="flex gap-4">
		<Button class="max-w-max" href="/tasks/add">Nowe zadanie</Button>
		<Select.Root bind:selected={selectedSorting}>
			<Select.Trigger class="w-[180px]">
				<Select.Value placeholder="Posortuj todo" />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					<Select.Label>Sortowanie</Select.Label>
					{#each selectOptions as selectOption}
						<Select.Item value={selectOption.value} label={selectOption.label}
							>{selectOption.label}</Select.Item
						>
					{/each}
				</Select.Group>
			</Select.Content>
			<Select.Input name="sorting" />
		</Select.Root>
	</div>
	<TasksList tasks={sortedTasks} />
</div>
