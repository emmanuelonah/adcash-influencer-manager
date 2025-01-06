import React from 'react';

import { HttpService } from 'services';
import { renderWithOptions, screen, fireEvent, waitFor } from 'utils';

import { CreateInfluencer } from './index.view';

jest.mock('services', () => ({
  HttpService: {
    post: jest.fn(),
  },
}));

describe('<CreateInfluencer/>', () => {
  it('renders the title', () => {
    renderWithOptions(<CreateInfluencer />);

    expect(document.title).toBe('📸 Create influencer | Adcash influencer manager');
  });

  it('renders the form with input fields and buttons', () => {
    renderWithOptions(<CreateInfluencer />);

    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Instagram username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tiktok username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add more instagram handle/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add more tiktok handle/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('adds more instagram handles when button is clicked', () => {
    renderWithOptions(<CreateInfluencer />);

    fireEvent.click(screen.getByRole('button', { name: /add more instagram handle/i }));
    expect(screen.getAllByPlaceholderText('Instagram username').length).toBeGreaterThan(1);
  });

  it('adds more tiktok handles when button is clicked', () => {
    renderWithOptions(<CreateInfluencer />);

    fireEvent.click(screen.getByRole('button', { name: /add more tiktok handle/i }));
    expect(screen.getAllByPlaceholderText('Tiktok username').length).toBeGreaterThan(1);
  });

  it('fills the form and calls the form submit handler', async () => {
    const mockResponse = { success: true, data: {} };
    (HttpService.post as jest.Mock).mockResolvedValue(mockResponse);

    renderWithOptions(<CreateInfluencer />);

    fireEvent.change(screen.getByPlaceholderText('First name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    fireEvent.change(screen.getByPlaceholderText('Instagram username'), {
      target: { value: 'john_insta' },
    });
    fireEvent.change(screen.getByPlaceholderText('Tiktok username'), {
      target: { value: 'john_tiktok' },
    });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(HttpService.post).toHaveBeenCalledWith('/influencers', {
        firstName: 'John',
        lastName: 'Doe',
        manager: {
          id: '1',
          firstName: 'Alice',
          lastName: 'Smith',
          imgUrl: 'https://i.ibb.co/r5J0rVw/10491830.jpg',
          email: 'alice.smith@example.com',
        },
        socialMediaHandles: [
          { type: 'tiktok', userName: 'john_tiktok' },
          { type: 'instagram', userName: 'john_insta' },
        ],
      });
    });
  });
});
