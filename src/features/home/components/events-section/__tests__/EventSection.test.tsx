import { render, screen } from '@testing-library/react';
import { EventsSection } from '../EventsSection';

describe('EventSection', () => {
  test('should render component with list of events if they exist', () => {
    render(<EventsSection />);
    const dropdowns = screen.getAllByTestId('dropdown');
    expect(dropdowns).toHaveLength(3);
    expect(screen.getByRole('heading')).toHaveTextContent(/upcoming events/i);
    const events = screen.getAllByTestId('event-card');
    expect(events).toHaveLength(6);
  });

  //   test('should return message when events array is empty', () => {
  //     render(<EventsSection />);
  //     expect(screen.getByText(/There are no events/i)).toBeInTheDocument();
  //   });
});
