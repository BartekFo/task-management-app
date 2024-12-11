import { z } from 'zod';

export const formSchema = z.object({
	title: z.string().min(3, { message: 'Tytuł musi zawierać przynajmniej 3 znaki' }),
	description: z.string()
});

export type FormSchema = typeof formSchema;
