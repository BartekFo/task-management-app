<script lang="ts">
	import { taskStore } from '$lib/stores/tasks';
	import Button from '$lib/components/ui/button/button.svelte';
	import { TasksList } from './components/tasks-list';
</script>

<div class="flex flex-col gap-6">
	<h1>Lista zadań</h1>
	<div class="h-px w-full bg-black"></div>
	<Button class="max-w-max" href="/tasks/add">Nowe zadanie</Button>
	<TasksList tasks={$taskStore} />
</div>
