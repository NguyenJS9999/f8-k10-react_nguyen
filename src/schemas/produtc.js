import * as z from 'zod';

export const schemaProduct = z.object({
	title: z.string().min(6).max(255),
	price: z.number().positive(),
	description: z.string().optional(),
});
