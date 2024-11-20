<script lang="ts">
	import { goto } from '$app/navigation';
	import { taskStore } from '$lib/stores/tasks';

	let title = '';
	let description = '';

	function handleSubmit() {
		if (title.trim()) {
			taskStore.addTask(title, description);
			goto('/tasks');
		}
	}
</script>

<div class="max-w-2xl mx-auto">
	<h2 class="text-2xl font-bold mb-4">Dodaj nowe zadanie</h2>

	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div>
			<label class="block text-gray-700 dark:text-gray-300 mb-2" for="title">
				Tytuł zadania
			</label>
			<input
				id="title"
				bind:value={title}
				class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
				placeholder="Wprowadź tytuł zadania"
				required
			/>
		</div>

		<div>
			<label class="block text-gray-700 dark:text-gray-300 mb-2" for="description">
				Opis zadania
			</label>
			<textarea
				id="description"
				bind:value={description}
				class="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
				placeholder="Wprowadź opis zadania"
				rows="4"
			></textarea>
		</div>

		<button
			type="submit"
			class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
		>
			Dodaj zadanie
		</button>
	</form>
</div>
