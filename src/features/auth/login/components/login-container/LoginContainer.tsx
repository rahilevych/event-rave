import { Logo } from '../../../../../shared/ui/logo/Logo';
import { LoginForm } from '../form/LoginForm';
import styles from './LoginContainer.module.css';

export const LoginContainer = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          {' '}
          <div className={styles.container}>
            <Logo text="Event Rave" className={styles.logo} />
            <h2>Sign in</h2>
            <p>Welcome back! Please enter your details</p>
            <LoginForm />
          </div>
        </div>
      </main>
    </>
  );
};
