<script lang="ts">
	import '../app.css';
	import { Home, List, CirclePlus, SlidersHorizontal } from 'lucide-svelte';
	import NavLink from '$lib/components/ui/navLink/navLink.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen">
	<nav class="min-h-screen max-w-max rounded-sm border border-black dark:border-white">
		<div class="border-b border-black p-6 dark:border-white">
			<h1 class="font-italiana text-center text-7xl font-normal">TDM</h1>
		</div>
		<div class="flex items-center justify-between p-8">
			<div class="flex flex-col gap-4">
				<NavLink href="/" Icon={Home} label="Home" />
				<NavLink href="/tasks" Icon={List} label="Lista zadań" />
				<NavLink href="/tasks/add" Icon={CirclePlus} label="Dodaj zadanie" />
				<NavLink href="/settings" Icon={SlidersHorizontal} label="Ustawienia" />
			</div>
		</div>
	</nav>

	<main class="container mx-auto p-16">
		{@render children()}
	</main>
</div>
