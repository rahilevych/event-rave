import { LoginForm } from '../form/LoginForm';
import styles from './LoginContainer.module.css';
import { Logo } from '../../../../../shared/ui/logo/Logo';

export const LoginContainer = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <div className={styles.container}>
          <LoginForm />
        </div>
      </main>
    </>
  );
};
