<script lang="ts">
	import type { PageData } from './$types';
	import AddTaskForm from './add-task-form.svelte';
	let { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col gap-6">
	<h1>Dodaj zadnie do wykonania:</h1>
	<div class="h-px w-full bg-black"></div>
	<AddTaskForm data={data.form} />
</div>
