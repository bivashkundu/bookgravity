import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email address is required').pipe(z.email('Invalid email address')),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

export type TLoginSchemaType = z.infer<typeof loginSchema>;
