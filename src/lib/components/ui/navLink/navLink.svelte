<script lang="ts">
	import { type Icon as IconType } from 'lucide-svelte';
	import { page } from '$app/stores';

	interface Props {
		Icon: typeof IconType;
		href: string;
		label: string;
	}

	let { Icon, href, label }: Props = $props();
	const active = $page.url.pathname.startsWith(href);
</script>

<a {href} class={`flex gap-4 ${active ? 'bg-[#E9E9E9]' : ''}`}><Icon /> {label}</a>
