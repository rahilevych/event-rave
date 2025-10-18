import styles from './AuthForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../../../../shared/ui/Button/Button';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { FormField } from '../../../../shared/ui/form-field/FormField';
import { RegisterData, registerSchema } from '../../schemas/registerSchema';
import { useAuthStore } from '../../model/AuthStore';
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const registration = useAuthStore((state) => state.registration);

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterData) => {
    try {
      await registration(data.yourName, data.email, data.password);
      navigate('/profile', { replace: true });
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <form
      data-testid="register-form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
    >
      <FormField
        label="Name:"
        register={register('yourName')}
        placeholder="Your Name"
        error={errors.yourName}
      />
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
      <FormField
        label="Confirm Password"
        register={register('confirmPassword')}
        type="password"
        placeholder="Confirm Password"
        error={errors.confirmPassword}
      />
      <div className={styles.buttons}>
        <Button type="submit" className={styles.button} disabled={isSubmitting}>
          Sign Up
        </Button>

        <Button type="submit" className={styles.button} disabled={isSubmitting}>
          <FcGoogle /> Sign Up with Google
        </Button>

        <p>or</p>

        <p>
          Already have an account?{' '}
          <Link to="/login" className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
