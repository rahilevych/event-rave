import React from 'react';
import styles from './AuthLayout.module.css';
import { Logo } from '../../../../shared/ui/logo/Logo';
type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  text: string;
};
export const AuthLayout = ({ children, text, title }: AuthLayoutProps) => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          {' '}
          <div className={styles.container}>
            <Logo text="Event Rave" className={styles.logo} />
            <h2>{title}</h2>
            <p>{text}</p>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};
