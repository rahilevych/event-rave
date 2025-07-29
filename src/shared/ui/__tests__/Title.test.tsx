import { render, screen } from '@testing-library/react';
import { Title } from '../title/Title';

describe('Title', () => {
  test('should render title with purple last word', () => {
    const text = 'Test text';
    render(<Title text={text} />);
    const heading = screen.getByRole('heading');
    const span = screen.getByText(/text/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/test text/i);
    expect(span).toHaveClass('accent');
  });
});
