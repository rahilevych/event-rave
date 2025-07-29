import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { Dropdown } from '../dropdown/Dropdown';

describe('Dropdown', () => {
  const user = userEvent.setup();
  const testItems = ['First', 'Second', 'Third'];
  const onSelect = jest.fn();
  test('should render dropdown correctly', () => {
    render(
      <Dropdown items={testItems} label="Select item" onSelect={onSelect} />,
    );
    expect(
      screen.getByRole('button', { name: /select item/i }),
    ).toBeInTheDocument();
  });

  test('should display list with variants in dropdown', async () => {
    render(
      <Dropdown items={testItems} label="Select item" onSelect={onSelect} />,
    );
    const dropdownBtn = screen.getByRole('button', { name: /select item/i });
    await user.click(dropdownBtn);
    expect(screen.getByRole('list')).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
    expect(screen.getByText(/first/i)).toBeInTheDocument();
    expect(screen.getByText(/second/i)).toBeInTheDocument();
    expect(screen.getByText(/third/i)).toBeInTheDocument();
  });
});
