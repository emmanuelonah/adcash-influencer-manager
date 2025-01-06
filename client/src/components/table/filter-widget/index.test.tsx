import React from 'react';

import { renderWithOptions, screen, fireEvent } from 'utils';

import { FilterWidget } from '.';

describe('<FilterWidget/>', () => {
  it('renders input fields and submit button', () => {
    renderWithOptions(<FilterWidget onFilter={jest.fn()} onReset={jest.fn()} />);

    expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('calls onFilter when form is submitted', () => {
    const onFilter = jest.fn();
    renderWithOptions(<FilterWidget onFilter={onFilter} onReset={jest.fn()} />);

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));
    expect(onFilter).toHaveBeenCalled();
  });

  it('calls onReset when form is reset', () => {
    const onReset = jest.fn();
    renderWithOptions(<FilterWidget onFilter={jest.fn()} onReset={onReset} />);

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));
    expect(onReset).toHaveBeenCalled();
  });

  it('renders SelectManager component', () => {
    renderWithOptions(<FilterWidget onFilter={jest.fn()} onReset={jest.fn()} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('passes correct props to SelectManager', () => {
    renderWithOptions(<FilterWidget onFilter={jest.fn()} onReset={jest.fn()} />);

    const selectManager = screen.getByRole('combobox');
    expect(selectManager).toHaveAttribute('name', 'managerId');
  });
});
