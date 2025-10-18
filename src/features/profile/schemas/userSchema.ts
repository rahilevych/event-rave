import z from 'zod';

export const userSchema = z.object({
  fullName: z
    .string()
    .nonempty({ message: 'Full name is required.' })
    .min(3, { message: 'Full name must be at least 3 characters.' }),

  email: z
    .string()
    .nonempty({ message: 'Email is required.' })
    .email({ message: 'Please enter a valid email' }),
});

export type UserForm = z.infer<typeof userSchema>;
