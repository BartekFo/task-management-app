import { z } from 'zod';
import { type DateValue } from '@internationalized/date';

export const formSchema = z.object({
	title: z.string().min(3, { message: 'Tytuł musi zawierać przynajmniej 3 znaki' }),
	description: z.string(),
	date: z.custom<DateValue>().optional()
});

export type FormSchema = typeof formSchema;
