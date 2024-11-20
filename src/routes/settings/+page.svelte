<script lang="ts">
	import { settingsStore } from '$lib/stores/settings';
</script>

<div class="max-w-2xl mx-auto">
	<h2 class="text-2xl font-bold mb-4">Ustawienia</h2>

	<div class="space-y-6">
		<div>
			<h3 class="text-lg font-semibold mb-2">Motyw</h3>
			<div class="flex space-x-4">
				<button
					class={`px-4 py-2 rounded-lg ${
            $settingsStore.theme === 'light'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
					on:click={() => settingsStore.updateSettings({ theme: 'light' })}
				>
					Jasny
				</button>
				<button
					class={`px-4 py-2 rounded-lg ${
            $settingsStore.theme === 'dark'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
					on:click={() => settingsStore.updateSettings({ theme: 'dark' })}
				>
					Ciemny
				</button>
			</div>
		</div>

		<div>
			<h3 class="text-lg font-semibold mb-2">Powiadomienia</h3>
			<label class="flex items-center space-x-2">
				<input
					type="checkbox"
					checked={$settingsStore.enableNotifications}
					on:change={(e) => settingsStore.updateSettings({
            enableNotifications: e.currentTarget.checked
          })}
					class="h-4 w-4 text-blue-600"
				/>
				<span>Włącz powiadomienia</span>
			</label>
		</div>
	</div>
</div>
