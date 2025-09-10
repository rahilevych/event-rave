import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterData, registerSchema } from './schema/registerSchema';
import { Button } from '../../../../../shared/ui/Button/Button';
import { FcGoogle } from 'react-icons/fc';

import styles from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { FormField } from '../../../../../shared/ui/form-field/FormField';
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data: RegisterData) => {
    try {
      console.log('Register data:', data);
    } catch (error) {
      console.error('Registration error:', error);
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
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
