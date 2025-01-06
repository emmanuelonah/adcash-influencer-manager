import React from 'react';

import { renderWithOptions, screen } from 'utils';

import { PageWrapper } from './index.layout';

describe('<PageWrapper/>', () => {
  it('renders the header with logo link', () => {
    renderWithOptions(<PageWrapper>Content</PageWrapper>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('renders the body with children', () => {
    renderWithOptions(
      <PageWrapper>
        <div>Test Content</div>
      </PageWrapper>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders the footer with text', () => {
    renderWithOptions(<PageWrapper>Content</PageWrapper>);

    expect(screen.getByText('Where Influencers Thrive and Brands Shine.')).toBeInTheDocument();
  });
});
