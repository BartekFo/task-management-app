// src/lib/stores/settings.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Settings = {
	theme: 'light' | 'dark';
	enableNotifications: boolean;
};

const defaultSettings: Settings = {
	theme: 'light',
	enableNotifications: true
};

function createSettingsStore() {
	const storedSettings = browser ? localStorage.getItem('settings') : null;
	const initialSettings = storedSettings ? JSON.parse(storedSettings) : defaultSettings;

	const { subscribe, update } = writable<Settings>(initialSettings);

	return {
		subscribe,
		updateSettings: (newSettings: Partial<Settings>) => {
			update(settings => {
				const updatedSettings = { ...settings, ...newSettings };
				if (browser) {
					localStorage.setItem('settings', JSON.stringify(updatedSettings));

					// Synchronizuj klasę 'dark' z HTML
					if (updatedSettings.theme === 'dark') {
						document.documentElement.classList.add('dark');
					} else {
						document.documentElement.classList.remove('dark');
					}
				}
				return updatedSettings;
			});
		}
	};
}

export const settingsStore = createSettingsStore();

if (browser) {
	const storedSettings = localStorage.getItem('settings');
	if (storedSettings) {
		const settings = JSON.parse(storedSettings);
		if (settings.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
}
