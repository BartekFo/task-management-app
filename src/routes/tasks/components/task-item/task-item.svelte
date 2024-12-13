<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import type { TaskItemProps } from './index.js';
	import {
		DateFormatter,
		getLocalTimeZone,
		CalendarDate,
		type DateValue,
		today as getToday
	} from '@internationalized/date';
	import { getCalendarDateFromDateValue } from '$lib/utils.js';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	const { completed, id, description, title, date }: TaskItemProps = $props();

	function isDateInPast(date: CalendarDate): boolean {
		const today = getToday(getLocalTimeZone());
		return date.compare(today) < 0;
	}

	function creatFormattedDateInfo(date: DateValue) {
		const calendarDate = getCalendarDateFromDateValue(date);
		return {
			date: df.format(calendarDate.toDate(getLocalTimeZone())),
			isPast: isDateInPast(calendarDate)
		};
	}

	const formattedDateInfo = $derived(date ? creatFormattedDateInfo(date) : null);
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
		{#if formattedDateInfo}
			<p class="text-xs text-muted-foreground {formattedDateInfo.isPast ? 'text-red-500' : ''}">
				{formattedDateInfo.date}
			</p>
		{/if}
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
