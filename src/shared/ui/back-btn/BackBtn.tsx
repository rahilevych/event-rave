import React from 'react';
import styles from './BackBtn.module.css';
import { MdChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
export const BackBtn = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className={styles.btn}
      {...props}
    >
      <MdChevronLeft />
    </button>
  );
};
