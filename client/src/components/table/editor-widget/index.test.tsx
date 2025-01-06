import React from 'react';

import { renderWithOptions, screen, fireEvent } from 'utils';

import { EditorWidget } from '.';

describe('<EditorWidget/>', () => {
  it('renders Edit button', () => {
    renderWithOptions(<EditorWidget>Content</EditorWidget>);
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('toggles open state when Edit button is clicked', () => {
    renderWithOptions(<EditorWidget title="Edit content">Content</EditorWidget>);
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    expect(screen.queryByText('Edit content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('renders children inside Portal when open', () => {
    renderWithOptions(<EditorWidget>Content</EditorWidget>);
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders Cancel button when open', () => {
    renderWithOptions(<EditorWidget>Content</EditorWidget>);
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('toggles close state when Cancel button is clicked', () => {
    renderWithOptions(<EditorWidget>Content</EditorWidget>);
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  });
});
