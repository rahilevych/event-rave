import { Logo } from '../../../../../shared/ui/logo/Logo';
import RegisterForm from '../form/RegisterForm';
import styles from './RegisterContainer.module.css';

export const RegisterContainer = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.container}>
            <h2>Sign up</h2>
            <p>Create your account! Please enter your details</p>
            <RegisterForm />
          </div>
          <div className={styles.img}>
            <img
              src="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="signup-img"
            />
          </div>
        </div>
      </main>
    </>
  );
};
