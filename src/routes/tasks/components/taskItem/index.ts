import Root from './taskItem.svelte';
type Props = {
	id: number;
	title: string;
	description: string;
	completed: boolean;
};

export { type Props as TaskItemProps, Root as TaskItem };
