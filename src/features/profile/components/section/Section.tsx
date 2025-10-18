import React from 'react';
import styles from './Section.module.css';

interface ContentProps {
  component: React.ReactNode;
  title: string;
}
export const Section = ({ component, title }: ContentProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.component}> {component}</div>
    </div>
  );
};
