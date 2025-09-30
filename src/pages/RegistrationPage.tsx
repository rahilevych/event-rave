import { AuthLayout } from '../features/auth/components/auth-layout/AuthLayout';
import RegisterForm from '../features/auth/components/form/RegisterForm';
import styles from '../features/auth/styles/AuthPages.module.css';

export const RegistrationPage = () => {
  const text = 'Create your account! Please enter your details';
  const title = 'Sign up';
  return (
    <div className={styles.auth}>
      <div className="container">
        <main className={styles.content}>
          <AuthLayout title={title} text={text}>
            <RegisterForm />
          </AuthLayout>
        </main>
      </div>
    </div>
  );
};
