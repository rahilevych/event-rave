// import { render, screen } from '@testing-library/react';
// import { LoginForm } from '../components/LoginForm';
// import userEvent from '@testing-library/user-event';

// describe('LoginForm component', () => {
//   const user = userEvent.setup();
//   test('should render from with correct inputs', () => {
//     render(<LoginForm />);
//     expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
//   });
//   test('user can type in both inputs', async () => {
//     render(<LoginForm />);
//     const emailInput = screen.getByPlaceholderText(
//       /email/i,
//     ) as HTMLInputElement;
//     const passwordInput = screen.getByPlaceholderText(
//       /password/i,
//     ) as HTMLInputElement;

//     await user.type(emailInput, 'user@gmail.com');
//     await user.type(passwordInput, 'passsword');

//     expect(emailInput.value).toBe('user@gmail.com');
//     expect(passwordInput.value).toBe('passsword');
//   });
//   test('render 2 buttons', () => {
//     render(<LoginForm />);
//     const buttons = screen.getAllByRole('button');
//     expect(buttons).toHaveLength(3);
//   });
// });
