<script lang="ts">
	import logo from '$lib/assets/main-logo.webp';
	import advertisment from '$lib/assets/advertisement.webp';
	import { taskStore } from '$lib/stores/tasks';
	import TasksList from './tasks/components/tasks-list/tasks-list.svelte';
</script>

<div class="mx-auto mt-9 max-w-4xl">
	<div class="relative w-full text-center">
		<img src={logo} alt="Logo" class="h-48" />
		<h1 class="absolute top-1/3 mb-4 w-full text-4xl font-bold dark:text-black">
			Witaj w TDM, czym chcesz się zająć dzisiaj?
		</h1>
	</div>
	<div class="mb-24 mt-14 flex flex-col gap-14">
		<p>Lista najpilniejszych zadań:</p>
		<TasksList tasks={$taskStore} />
	</div>
	<img src={advertisment} alt="Adverisment" class="h-48 dark:bg-white" />
</div>
