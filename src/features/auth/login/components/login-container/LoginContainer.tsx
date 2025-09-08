import { LoginForm } from '../form/LoginForm';
import styles from './LoginContainer.module.css';
import { Logo } from '../../../../../shared/ui/logo/Logo';

export const LoginContainer = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          {' '}
          <div className={styles.container}>
            <h2>Sign in</h2>
            <p>Welcome back! Please enter your details</p>
            <LoginForm />
          </div>
          <div className={styles.img}>
            <img
              src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="signin-img"
            />
          </div>
        </div>
      </main>
    </>
  );
};
