import type { Tasks } from '$lib/stores/tasks';
import Root from './task-item.svelte';
type Props = Tasks;

export { type Props as TaskItemProps, Root as TaskItem };
