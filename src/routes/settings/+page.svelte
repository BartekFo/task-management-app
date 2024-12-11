<script lang="ts">
	import Label from '$lib/components/ui/label/label.svelte';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import { settingsStore } from '$lib/stores/settings';
</script>

<div class="flex flex-col gap-6">
	<h1>Ustawienia</h1>
	<div class="h-px w-full bg-black"></div>

	<div class="space-y-6">
		<div>
			<Switch
				onCheckedChange={(v) =>
					v
						? settingsStore.updateSettings({ theme: 'dark' })
						: settingsStore.updateSettings({ theme: 'light' })}
				id="darkmode"
			/>
			<Label for="darkmode">Tryb ciemny “Darkmode”</Label>
		</div>
	</div>
</div>
