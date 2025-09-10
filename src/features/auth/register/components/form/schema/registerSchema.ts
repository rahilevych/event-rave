import { z } from 'zod';

export const registerSchema = z
  .object({
    yourName: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters.' })
      .nonempty({ message: 'Name is required.' }),
    email: z
      .string()
      .nonempty({ message: 'Email is required.' })
      .email({ message: 'Please enter a valid email.' }),
    password: z
      .string()
      .nonempty({ message: 'Password is required.' })
      .min(6, { message: 'Password must be at least 6 characters.' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'Please confirm your password.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export type RegisterData = z.infer<typeof registerSchema>;
