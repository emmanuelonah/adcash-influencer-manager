import React from 'react';

import { renderWithOptions, screen } from 'utils';

import { PrimaryButton, LinkButton } from './index.component';

describe('<Button/>', () => {
  it('renders PrimaryButton with correct styles', () => {
    renderWithOptions(<PrimaryButton>Primary Button</PrimaryButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Primary Button');
  });

  it('renders LinkButton with correct styles', () => {
    renderWithOptions(<LinkButton>Link Button</LinkButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Link Button');
  });
});
