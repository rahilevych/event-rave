import { render, screen } from '@testing-library/react';
import { LoginContainer } from '../components/login-container/LoginContainer';

describe('LoginComponent', () => {
  test('should show heading', () => {
    render(<LoginContainer />);
    expect(
      screen.getByRole('heading', { name: /sign in/i }),
    ).toBeInTheDocument();
  });
  test('should show paragraph text', () => {
    render(<LoginContainer />);

    expect(
      screen.getByText(/Welcome back! Please enter your details/i),
    ).toBeInTheDocument();
  });
  test('should render img', () => {
    render(<LoginContainer />);

    expect(screen.getByAltText('signin-img')).toBeInTheDocument();
  });
  test('should render form', () => {
    render(<LoginContainer />);
    expect(screen.getByTestId('signin-form')).toBeInTheDocument();
  });
});
