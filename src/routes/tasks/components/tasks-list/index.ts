import type { Tasks } from '$lib/stores/tasks';
import Root from './tasks-list.svelte';

type Props = {
	tasks: Tasks[];
};

export { Root as TasksList, type Props as TasksListProps };
