import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.css';
import { LoginData, loginSchema } from './schema/loginSchema';
import { useForm } from 'react-hook-form';
import { Button } from '../../../../../shared/ui/Button/Button';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async () => {
    try {
      console.log('try to login');
    } catch (error) {
      console.error('err', error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {' '}
      <input {...register('email')} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}
      <Button className={styles.button} type="submit" disabled={isSubmitting}>
        Sign in
      </Button>
    </form>
  );
};
