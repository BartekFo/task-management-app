<script lang="ts">
	import { type Icon as IconType } from 'lucide-svelte';
	import { page } from '$app/stores';

	interface Props {
		Icon: typeof IconType;
		href: string;
		label: string;
	}

	let { Icon, href, label }: Props = $props();
</script>

<a
	{href}
	class="flex gap-4 whitespace-nowrap rounded p-4"
	class:nav-link-active={$page.url.pathname === href}><Icon /> {label}</a
>
