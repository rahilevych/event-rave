import { RegisterContainer } from '../features/auth/register/components/register-container/RegisterContainer';
import styles from '../features/auth/register/styles/RegisterPage.module.css';
export const RegistrationPage = () => {
  return (
    <div className="container">
      <main className={styles.content}>
        <RegisterContainer />
      </main>
    </div>
  );
};
