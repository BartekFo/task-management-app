<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import Button from '$lib/components/ui/button/button.svelte';
	import { TasksList } from './components/tasks-list';
	import * as Select from '$lib/components/ui/select/index.js';
	import { CalendarDate } from '@internationalized/date';

	const selectOptions = [
		{ value: 'asc', label: 'Najnowsze' },
		{ value: 'desc', label: 'Najstarsze' }
	];

	let selectedSorting = $state(selectOptions[0]);
	const sortedTasks = $derived(
		[...$taskStore].sort((a, b) => {
			if (a.date && b.date) {
				const dateA = new CalendarDate(a.date.year, a.date.month, a.date.day);
				const dateB = new CalendarDate(b.date.year, b.date.month, b.date.day);
				if (selectedSorting.value === 'asc') {
					return dateA.compare(dateB) ? 1 : -1;
				} else {
					return !dateA.compare(dateB) ? 1 : -1;
				}
			} else {
				return 0;
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
