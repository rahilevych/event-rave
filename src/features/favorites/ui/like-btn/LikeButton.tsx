import React from 'react';
import { MdFavorite } from 'react-icons/md';
import styles from './LikeButton.module.css';

import { useToggleLike } from '../../../event/hooks/useEvents';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../auth/model/AuthStore';

interface LikeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  eventId: number;
  likedByUser: boolean;
}
export const LikeButton = ({
  eventId,
  likedByUser,
  ...props
}: LikeButtonProps) => {
  const navigate = useNavigate();
  const { isAuth } = useAuthStore.getState();
  const { mutate: toggleLike } = useToggleLike(eventId);

  const handleLikeClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isAuth) {
      toggleLike();
    } else {
      navigate('/login');
    }
  };
  return (
    <button
      {...props}
      onClick={handleLikeClick}
      className={`${styles.button} ${likedByUser ? styles.liked : ''}`}
    >
      <MdFavorite
        className={`${styles.icon} ${likedByUser ? styles.liked : ''}`}
      />
    </button>
  );
};
