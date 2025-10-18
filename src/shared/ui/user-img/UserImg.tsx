import styles from './UserImg.module.css';

type UserImg = {
  img?: string;
  className?: string;
};
export const UserImg = ({ img, className }: UserImg) => {
  return (
    <div className={`${styles.image} ${className || ''} `}>
      {img ? (
        <img src={img} alt="user-image" />
      ) : (
        <img
          src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg"
          alt="user-img"
        />
      )}
    </div>
  );
};
