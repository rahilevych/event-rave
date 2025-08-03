import { zodResolver } from '@hookform/resolvers/zod';
import styles from './LoginForm.module.css';
import { LoginData, loginSchema } from './schema/loginSchema';
import { useForm } from 'react-hook-form';
import { Button } from '../../../../../shared/ui/Button/Button';
import { FcGoogle } from 'react-icons/fc';

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
      <label>
        <p>Email:</p>
        <input
          {...register('email')}
          placeholder="Email"
          className={styles.input}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <label>
        <p>Password:</p>
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>
      <div className={styles.buttons}>
        <Button className={styles.button} type="submit" disabled={isSubmitting}>
          Sign in
        </Button>
        <Button className={styles.button} type="submit" disabled={isSubmitting}>
          <FcGoogle /> Sign in with Google
        </Button>
      </div>
    </form>
  );
};
