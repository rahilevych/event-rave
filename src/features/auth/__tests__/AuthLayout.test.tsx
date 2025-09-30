import { render, screen } from '@testing-library/react';
import { AuthLayout } from '../components/auth-layout/AuthLayout';
import { LoginForm } from '../components/form/LoginForm';
import { MemoryRouter } from 'react-router-dom';

describe('AuthLayout', () => {
  test('should render Login form', () => {
    const text = 'Welcome back! Please enter your details';
    const title = 'Sign in';
    render(
      <MemoryRouter>
        <AuthLayout title={title} text={text}>
          <LoginForm />
        </AuthLayout>
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /sign in/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Welcome back! Please enter your details/i),
    ).toBeInTheDocument();
  });
  test('should render Sign up form', () => {
    const text = 'Create your account! Please enter your details';
    const title = 'Sign up';
    render(
      <MemoryRouter>
        <AuthLayout title={title} text={text}>
          <LoginForm />
        </AuthLayout>
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { name: /sign up/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Create your account! Please enter your details/i),
    ).toBeInTheDocument();
  });
});
