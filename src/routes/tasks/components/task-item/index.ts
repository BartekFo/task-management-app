import Root from './task-item.svelte';
type Props = {
	id: number;
	title: string;
	description: string;
	completed: boolean;
};

export { type Props as TaskItemProps, Root as TaskItem };
