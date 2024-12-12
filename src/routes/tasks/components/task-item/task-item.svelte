<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import type { TaskItemProps } from './index.js';
	import { DateFormatter, getLocalTimeZone, CalendarDate } from '@internationalized/date';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	const { completed, id, description, title, date }: TaskItemProps = $props();

	function getFormatedDate() {
		if (date) {
			const { day, month, year } = date;

			return df.format(new CalendarDate(year, month, day).toDate(getLocalTimeZone()));
		}

		return null;
	}
</script>

<div
	class={`flex items-center justify-between rounded-lg border border-black p-4 shadow-md dark:border-white dark:bg-gray-800 ${completed ? 'bg-[#D2D2D2] dark:bg-[#333333] dark:opacity-40' : ''}`}
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
		<p class="text-xs text-muted-foreground">{getFormatedDate()}</p>
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
