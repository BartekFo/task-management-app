<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { goto } from '$app/navigation';
	import { taskStore } from '$lib/stores/tasks';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Button from '$lib/components/ui/button/button.svelte';

	type FormFieldsType = Infer<FormSchema>;

	export let data: SuperValidated<FormFieldsType>;

	function handleSubmit({ title, description }: FormFieldsType) {
		if (title.trim()) {
			taskStore.addTask(title, description);
			goto('/tasks');
		}
	}

	const form = superForm(data, {
		validators: zodClient(formSchema),
		onUpdated({ form }) {
			if (form.valid) {
				handleSubmit(form.data);
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

		<Button class="max-w-max" type="submit">Dodaj</Button>
	</div>
</form>
