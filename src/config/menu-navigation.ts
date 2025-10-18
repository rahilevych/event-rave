export const getMenuItems = (isAuth: boolean, logout?: () => void) => {
  return isAuth
    ? [
        { label: 'Profile', path: '/profile' },
        { label: 'Logout', onClick: logout },
      ]
    : [
        { label: 'Sign in', path: '/login' },
        { label: 'Sign up', path: '/registration' },
      ];
};
