import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';
import RegisterForm from '../components/form/RegisterForm';

describe('RegisterForm component', () => {
  const user = userEvent.setup();
  test('should render from with correct inputs', () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>,
    );

    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^Password$/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Confirm Password/i),
    ).toBeInTheDocument();
  });
  test('user can type in both inputs', async () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>,
    );
    const emailInput = screen.getByPlaceholderText(
      /email/i,
    ) as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText(
      /^Password$/i,
    ) as HTMLInputElement;
    const nameInput = screen.getByPlaceholderText(
      /Your Name/i,
    ) as HTMLInputElement;
    const confirmPasswordInput = screen.getByPlaceholderText(
      /Confirm Password/i,
    ) as HTMLInputElement;

    await user.type(nameInput, 'user');
    await user.type(emailInput, 'user@gmail.com');
    await user.type(passwordInput, 'passsword');
    await user.type(confirmPasswordInput, 'passsword');

    expect(nameInput.value).toBe('user');
    expect(emailInput.value).toBe('user@gmail.com');
    expect(passwordInput.value).toBe('passsword');
    expect(confirmPasswordInput.value).toBe('passsword');
  });
  test('render 2 buttons', () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>,
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
