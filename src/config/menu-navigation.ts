export const getMenuItems = (isAuth: boolean) => {
  return isAuth
    ? [
        { label: 'Profile', path: '/profile' },
        { label: 'Logout', path: '/logout' },
      ]
    : [
        { label: 'Sign in', path: '/login' },
        { label: 'Sign up', path: '/registration' },
      ];
};
