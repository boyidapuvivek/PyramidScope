import { z } from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
