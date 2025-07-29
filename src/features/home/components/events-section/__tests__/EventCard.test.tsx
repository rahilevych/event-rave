import { render, screen } from '@testing-library/react';
import { EventCard } from '../EventCard';

describe('EventCard', () => {
  test('should render correctly event card', () => {
    const event = {
      title: 'AI & Future Workshop',
      location: 'Berlin, Germany',
      image:
        'https://i.pinimg.com/736x/56/72/15/567215b40136b5b89bc6d3c6a84e6284.jpg',
      description:
        'Dive deep into artificial intelligence and its future impact.',
      date: '2025-08-11',
      day: 'Monday',
      type: 'Workshop',
      category: 'Tech',
    };
    render(<EventCard card={event} />);
    expect(screen.getByText(/AI & Future Workshop/i)).toBeInTheDocument();
    expect(screen.getByText(/Berlin, Germany/i)).toBeInTheDocument();
    expect(screen.getByText(/2025-08-11/i)).toBeInTheDocument();
    expect(screen.getByAltText(/event/i)).toBeInTheDocument();
  });
});
