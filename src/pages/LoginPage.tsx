import { AuthLayout } from '../features/auth/components/auth-layout/AuthLayout';
import { LoginForm } from '../features/auth/components/form/LoginForm';
import styles from '../features/auth/styles/AuthPages.module.css';
export const LoginPage = () => {
  const text = 'Welcome back! Please enter your details';
  const title = 'Sign in';
  return (
    <div className={styles.auth}>
      <div className="container">
        <main className={styles.content}>
          <AuthLayout title={title} text={text}>
            <LoginForm />
          </AuthLayout>
        </main>
      </div>
    </div>
  );
};
