import { Logo } from '../../../../../shared/ui/logo/Logo';
import RegisterForm from '../form/RegisterForm';
import styles from './RegisterContainer.module.css';

export const RegisterContainer = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.container}>
            <Logo text="Event Rave" className={styles.logo} />
            <h2>Sign up</h2>
            <p>Create your account! Please enter your details</p>
            <RegisterForm />
          </div>
        </div>
      </main>
    </>
  );
};
