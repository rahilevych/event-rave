import { zodResolver } from '@hookform/resolvers/zod';
import styles from './AuthForm.module.css';

import { useForm } from 'react-hook-form';

import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

import { FormField } from '../../../../shared/ui/form-field/FormField';
import { Button } from '../../../../shared/ui/Button/Button';
import { LoginData, loginSchema } from '../../schemas/loginSchema';
import { useAuthStore } from '../../model/AuthStore';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({ resolver: zodResolver(loginSchema) });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginData) => {
    try {
      await login(data.email, data.password);
      navigate('/profile', { replace: true });
    } catch (error) {
      console.error('Login error', error);
    }
  };
  return (
    <form
      data-testid="signin-form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <FormField
        label="Email:"
        register={register('email')}
        placeholder="Email"
        error={errors.email}
      />
      <FormField
        label="Password:"
        register={register('password')}
        type="password"
        placeholder="Password"
        error={errors.password}
      />

      <div className={styles.buttons}>
        <Button className={styles.button} type="submit" disabled={isSubmitting}>
          Sign in
        </Button>
        <Button className={styles.button} type="button" disabled={isSubmitting}>
          <FcGoogle /> Sign in with Google
        </Button>
        <p>or</p>
        <p>
          Don't have an account?{' '}
          <Link to="/registration" className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};
