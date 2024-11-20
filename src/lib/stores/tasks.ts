import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Tasks = {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	createdAt: string;
};

const defaultTasks: Tasks[] = [];

function createTaskStore() {
	const storedTasks = browser ? localStorage.getItem('tasks') : null;
	const { subscribe, update } = writable<Tasks[]>(
		storedTasks ? JSON.parse(storedTasks) : defaultTasks
	);

	return {
		subscribe,
		addTask: (title: string, description: string) => {
			update(tasks => {
				const newTask = {
					id: Date.now(),
					title,
					description,
					completed: false,
					createdAt: new Date().toISOString()
				};
				const updatedTasks = [...tasks, newTask];
				if (browser) {
					localStorage.setItem('tasks', JSON.stringify(updatedTasks));
				}
				return updatedTasks;
			});
		},
		toggleTask: (id: number) => {
			update(tasks => {
				const updatedTasks = tasks.map(task =>
					task.id === id ? { ...task, completed: !task.completed } : task
				);
				if (browser) {
					localStorage.setItem('tasks', JSON.stringify(updatedTasks));
				}
				return updatedTasks;
			});
		},
		deleteTask: (id: number) => {
			update(tasks => {
				const updatedTasks = tasks.filter(task => task.id !== id);
				if (browser) {
					localStorage.setItem('tasks', JSON.stringify(updatedTasks));
				}
				return updatedTasks;
			});
		}
	};
}

export const taskStore = createTaskStore();
