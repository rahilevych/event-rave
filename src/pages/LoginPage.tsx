import { LoginContainer } from '../features/auth/login/components/login-container/LoginContainer';
import styles from '../features/auth/login/styles/LoginPage.module.css';
export const LoginPage = () => {
  return (
    <div className="container">
      <main className={styles.content}>
        <LoginContainer />
      </main>
    </div>
  );
};
