import React from 'react';

import { renderWithOptions, screen } from 'utils';

import { NotFound } from './index.view';

describe('<NotFound/>', () => {
  it('renders the 404 heading', () => {
    renderWithOptions(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders the not found message', () => {
    renderWithOptions(<NotFound />);

    expect(screen.getByText('This page could not be found.')).toBeInTheDocument();
  });

  it('renders the Go home link', () => {
    renderWithOptions(<NotFound />);

    const link = screen.getByRole('link', { name: /go home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
