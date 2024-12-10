<script lang="ts">
	import '../app.css';
	import { Home, List, CirclePlus, SlidersHorizontal } from 'lucide-svelte';
	import NavLink from '$lib/components/ui/navLink/navLink.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen">
	<nav class="min-h-screen max-w-max rounded-sm border border-black">
		<div class="border-b border-black p-6">
			<h1 class="font-italiana text-7xl font-normal">TDM</h1>
		</div>
		<div class="flex items-center justify-between p-8">
			<div class="flex flex-col gap-6">
				<NavLink href="/" Icon={Home} label="Home" />
				<a href="/" class="flex gap-4"><Home /> Home</a>
				<a href="/tasks" class="flex gap-4"><List />Zadania</a>
				<a href="/tasks/add" class="flex gap-4"><CirclePlus /> zadanie</a>
				<a href="/settings" class="flex gap-4"><SlidersHorizontal /> Ustawienia</a>
			</div>
		</div>
	</nav>

	<main class="container mx-auto p-4">
		{@render children()}
	</main>
</div>
