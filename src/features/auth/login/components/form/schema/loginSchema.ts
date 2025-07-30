import z from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required.' })
    .email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required.' })
    .min(6, { message: 'Password must be at least 6 characters.' }),
});
export type LoginData = z.infer<typeof loginSchema>;
