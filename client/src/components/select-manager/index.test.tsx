import React from 'react';

import { render, screen } from 'utils';

import managers from 'models/influencer/managers.json';

import { SelectManager } from './index.component';

describe('<SelectManager/>', () => {
  it('renders with placeholder', () => {
    render(<SelectManager placeholder="Choose a manager" />);
    expect(screen.getByText('Choose a manager')).toBeInTheDocument();
  });

  it('renders with default placeholder when none is provided', () => {
    render(<SelectManager />);
    expect(screen.getByText('Select manager')).toBeInTheDocument();
  });

  it('renders all manager options', () => {
    render(<SelectManager />);
    managers.forEach((manager) => {
      expect(screen.getByText(`${manager.firstName} ${manager.lastName}`)).toBeInTheDocument();
    });
  });

  it('forwards ref to the select element', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<SelectManager ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it('passes additional props to the select element', () => {
    render(<SelectManager data-testid="select-manager" />);
    expect(screen.getByTestId('select-manager')).toBeInTheDocument();
  });
});
