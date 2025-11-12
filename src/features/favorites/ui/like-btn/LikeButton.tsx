import React from 'react';
import { MdFavorite } from 'react-icons/md';
import styles from './LikeButton.module.css';

import { useToggleLike } from '../../../event/hooks/useEvents';

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
  const toggleLike = useToggleLike();
  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleLike.mutate(eventId);
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
