import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../components/form/LoginForm';
import { MemoryRouter } from 'react-router-dom';

describe('LoginForm component', () => {
  const user = userEvent.setup();
  test('should render from with correct inputs', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });
  test('user can type in both inputs', async () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(
      /email/i,
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      /password/i,
    ) as HTMLInputElement;

    await user.type(emailInput, 'user@gmail.com');
    await user.type(passwordInput, 'passsword');

    expect(emailInput.value).toBe('user@gmail.com');
    expect(passwordInput.value).toBe('passsword');
  });
  test('render 2 buttons', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
