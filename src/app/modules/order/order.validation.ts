import { z } from 'zod';

export const orderValidationSchema = z.object({
    email: z.string().email({
        message: 'Must be a valid email address',
    }).min(1, {
        message: 'Email is required',
    }),

    price: z.number().positive({
        message: 'Price must be a positive number',
    }),
    quantity: z.number().int().positive({
        message: 'Quantity must be a positive integer',
    }),
});

export const partialOrderValidationSchema = orderValidationSchema.partial();
