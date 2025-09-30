import { render, screen } from '@testing-library/react';
import { EventsSection } from '../components/events-section/EventsSection';

describe('EventSection', () => {
  test('should render component with list of events if they exist', () => {
    const title = 'Upcoming event';
    render(<EventsSection title={title} />);

    const events = screen.getAllByTestId('event-card');
    expect(events).toHaveLength(6);
  });
});
