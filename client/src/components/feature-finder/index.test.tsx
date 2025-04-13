import { renderWithOptions, screen, fireEvent } from 'utils';

import { FeatureFinder } from './index.component';

import allFeatures from './index.data.json';

jest.mock('./index.data.json', () => [
  {
    id: '1',
    name: 'Dashboard',
    path: '/dashboard',
    keywords: ['home', 'main'],
  },
  {
    id: '2',
    name: 'Settings',
    path: '/settings',
    keywords: ['preferences', 'options'],
  },
  {
    id: '3',
    name: 'Profile',
    path: '/profile',
    keywords: ['account', 'user'],
  },
]);

describe('<FeatureFinder/>', () => {
  it('renders the input and no tooltip by default', () => {
    renderWithOptions(<FeatureFinder />);

    expect(screen.getByPlaceholderText(/find feature/i)).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('shows tooltip on input focus', () => {
    renderWithOptions(<FeatureFinder />);

    const input = screen.getByPlaceholderText(/find feature/i);
    fireEvent.focus(input);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('filters features based on user input', () => {
    renderWithOptions(<FeatureFinder />);

    const input = screen.getByPlaceholderText(/find feature/i);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'set' } });

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveTextContent('Settings');
  });

  it('shows all features when input is cleared', () => {
    renderWithOptions(<FeatureFinder />);

    const input = screen.getByPlaceholderText(/find feature/i);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '' } });

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(allFeatures.length);
  });
});
