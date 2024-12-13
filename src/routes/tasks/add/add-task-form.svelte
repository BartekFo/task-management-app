<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { goto } from '$app/navigation';
	import { taskStore } from '$lib/stores/tasks';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { DateFormatter, getLocalTimeZone, today, type DateValue } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Button from '$lib/components/ui/button/button.svelte';

	type FormFieldsType = Infer<FormSchema>;

	export let data: SuperValidated<FormFieldsType>;
	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	let dateValue: DateValue | undefined = undefined;

	function handleSubmit({ title, description, date }: FormFieldsType) {
		if (title.trim()) {
			taskStore.addTask(title, description, date);
			goto('/tasks');
		}
	}

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated({ form }) {
			if (form.valid) {
				handleSubmit({ ...form.data, date: dateValue });
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance>
	<div class="flex flex-col gap-6">
		<Form.Field {form} name="title">
			<Form.Control let:attrs>
				<Form.Label>Tytuł</Form.Label>
				<Input class="max-w-96" {...attrs} bind:value={$formData.title} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="description">
			<Form.Control let:attrs>
				<Form.Label>Opis</Form.Label>
				<Textarea class="max-w-xl" {...attrs} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="date">
			<Form.Control let:attrs>
				<div class="flex flex-col gap-2">
					<Form.Label>Termin zadania</Form.Label>
					<Popover.Root>
						<Popover.Trigger asChild let:builder>
							<Button
								variant="outline"
								class={cn(
									'w-[280px] justify-start text-left font-normal',
									!$formData.date && 'text-muted-foreground'
								)}
								builders={[builder]}
								{...attrs}
							>
								<CalendarIcon class="mr-2 h-4 w-4" />
								{dateValue ? df.format(dateValue.toDate(getLocalTimeZone())) : 'Pick a date'}
							</Button>
						</Popover.Trigger>
						<Popover.Content class="w-auto p-0">
							<Calendar minValue={today(getLocalTimeZone())} bind:value={dateValue} initialFocus />
						</Popover.Content>
					</Popover.Root>
				</div>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Button class="max-w-max" type="submit">Dodaj</Button>
	</div>
</form>
