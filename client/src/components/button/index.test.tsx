import React from 'react';

import { renderWithOptions, screen } from 'utils';

import { PrimaryButton, SecondaryButton, DangerButton, LinkButton } from './index.component';

describe('<Button/>', () => {
  it('renders PrimaryButton with correct styles', () => {
    renderWithOptions(<PrimaryButton>Primary Button</PrimaryButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Primary Button');
  });

  it('renders SecondaryButton with correct styles', () => {
    renderWithOptions(<SecondaryButton>Secondary Button</SecondaryButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Secondary Button');
  });

  it('renders DangerButton with correct styles', () => {
    renderWithOptions(<DangerButton>Danger Button</DangerButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Danger Button');
  });

  it('renders LinkButton with correct styles', () => {
    renderWithOptions(<LinkButton type="button">Link Button</LinkButton>);

    expect(screen.getByRole('button')).toHaveTextContent('Link Button');
  });
});
