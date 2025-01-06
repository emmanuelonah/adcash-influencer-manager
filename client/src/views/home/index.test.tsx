import React from 'react';

import { renderWithOptions, screen, fireEvent, waitFor } from 'utils';

import { Home } from './index.view';
import { useUpdatePresenter } from 'models/influencer/useUpdateInfluencer.presenter';
import { useGetInfluencersPresenter } from 'models/influencer/useGetInfluencers.presenter';

jest.mock('models/influencer/useUpdateInfluencer.presenter');

jest.mock('models/influencer/useGetInfluencers.presenter');

describe('<Home/>', () => {
  const mockInfluencers = [
    {
      _id: '1',
      firstName: 'John',
      lastName: 'Doe',
      socialMediaHandles: [
        { type: 'instagram', userName: 'john_insta' },
        { type: 'tiktok', userName: 'john_tiktok' },
      ],
      manager: {
        id: '1',
        firstName: 'Alice',
        lastName: 'Smith',
        imgUrl: 'https://i.ibb.co/r5J0rVw/10491830.jpg',
      },
      createdAt: '2023-01-01',
    },
  ];

  beforeEach(() => {
    (useGetInfluencersPresenter as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockInfluencers,
      hasData: true,
      onFilter: jest.fn(),
      onReset: jest.fn(),
    });
  });

  it('renders the title', () => {
    renderWithOptions(<Home />);

    expect(document.title).toBe('🛖 Home | Adcash influencer manager');
  });

  it('renders the filter widget and add influencer button', () => {
    renderWithOptions(<Home />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /add influencer/i })).toHaveAttribute(
      'href',
      '/create-influencer'
    );
  });

  it('renders the table with influencer data', () => {
    renderWithOptions(<Home />);

    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
  });

  it('calls the filter and reset handlers', () => {
    const onFilter = jest.fn();
    const onReset = jest.fn();
    (useGetInfluencersPresenter as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: mockInfluencers,
      hasData: true,
      onFilter,
      onReset,
    });

    renderWithOptions(<Home />);

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));
    expect(onFilter).toHaveBeenCalled();

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));
    expect(onReset).toHaveBeenCalled();
  });

  it('edits an influencer', async () => {
    const mockMutate = jest.fn();
    (useUpdatePresenter as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isPending: false,
      isSuccess: false,
      isError: false,
      error: null,
    });

    renderWithOptions(<Home />);

    fireEvent.click(screen.getByRole('button', { name: /edit/i }));
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: /save/i }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        influencerId: '1',
        manager: {
          id: '2',
          email: 'bob.johnson@example.com',
          firstName: 'Bob',
          imgUrl: null,
          lastName: 'Johnson',
        },
      });
    });
  });
});
