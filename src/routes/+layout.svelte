<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<div class="min-h-screen">
	<nav class="bg-gray-800 p-4">
		<div class="container mx-auto flex items-center justify-between">
			<div class="flex space-x-4">
				<a href="/" class="text-white hover:text-gray-300">Home</a>
				<a href="/tasks" class="text-white hover:text-gray-300">Zadania</a>
				<a href="/tasks/add" class="text-white hover:text-gray-300">Dodaj zadanie</a>
				<a href="/settings" class="text-white hover:text-gray-300">Ustawienia</a>
			</div>
		</div>
	</nav>

	<main class="container mx-auto p-4">
		{@render children()}
	</main>
</div>
