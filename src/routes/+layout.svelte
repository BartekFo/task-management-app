<script lang="ts">
	import '../app.css';
	import { Home, List, CirclePlus, SlidersHorizontal } from 'lucide-svelte';
	import { NavLink } from '$lib/components/ui/nav-link';
	let { children } = $props();

	let isMobileMenuOpen = $state(false);

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	const closeMobileMenu = () => {
		setTimeout(() => {
			isMobileMenuOpen = false;
		}, 200);
	};
</script>

<div class="flex min-h-screen flex-col md:flex-row">
	<!-- Mobile Topbar -->
	<nav
		class="flex items-center justify-between border-b border-black p-4 dark:border-white md:hidden"
	>
		<h1 class="font-italiana text-3xl font-normal">TDM</h1>
		<button class="p-2" onclick={toggleMobileMenu} aria-label="Toggle menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
			</svg>
		</button>
	</nav>

	<!-- Sidebar for larger screens -->
	<nav
		class="hidden min-h-screen max-w-max rounded-sm border border-black dark:border-white md:block"
	>
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

	<!-- Mobile Menu -->
	{#if isMobileMenuOpen}
		<div class="absolute left-0 top-0 z-50 h-screen w-screen bg-white dark:bg-black md:hidden">
			<div class="flex items-center justify-between border-b border-black p-4 dark:border-white">
				<h1 class="font-italiana text-3xl font-normal">TDM</h1>
				<button class="p-2" onclick={toggleMobileMenu} aria-label="Close menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-col gap-4 p-8">
				<NavLink href="/" Icon={Home} label="Home" onclick={closeMobileMenu} />
				<NavLink href="/tasks" Icon={List} label="Lista zadań" onclick={closeMobileMenu} />
				<NavLink
					href="/tasks/add"
					Icon={CirclePlus}
					label="Dodaj zadanie"
					onclick={closeMobileMenu}
				/>
				<NavLink
					href="/settings"
					Icon={SlidersHorizontal}
					label="Ustawienia"
					onclick={closeMobileMenu}
				/>
			</div>
		</div>
	{/if}

	<main class="container mx-auto p-16">
		{@render children()}
	</main>
</div>
