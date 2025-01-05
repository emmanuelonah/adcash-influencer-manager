import React from 'react';

import { render, screen, fireEvent } from 'utils';

import { Tooltip } from './index.component';

describe('<Tooltip/>', () => {
  it('renders children when open is true', () => {
    render(
      <Tooltip open onClose={jest.fn()}>
        <div>Tooltip Content</div>
      </Tooltip>
    );

    expect(screen.getByText('Tooltip Content')).toBeInTheDocument();
  });

  it('does not render children when open is false', () => {
    render(
      <Tooltip open={false} onClose={jest.fn()}>
        <div>Tooltip Content</div>
      </Tooltip>
    );

    expect(screen.queryByText('Tooltip Content')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking outside the tooltip', () => {
    const onClose = jest.fn();
    render(
      <div>
        <Tooltip open onClose={onClose}>
          <div>Tooltip Content</div>
        </Tooltip>
        <div data-testid="outside">Outside</div>
      </div>
    );

    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(onClose).toHaveBeenCalled();
  });

  it('does not call onClose when clicking inside the tooltip', () => {
    const onClose = jest.fn();
    render(
      <Tooltip open onClose={onClose}>
        <div>Tooltip Content</div>
      </Tooltip>
    );

    fireEvent.mouseDown(screen.getByText('Tooltip Content'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose when clicking inside an excluded ref', () => {
    const onClose = jest.fn();
    const excludedRef = React.createRef<HTMLDivElement>();

    render(
      <div>
        <Tooltip open onClose={onClose} excludedRefs={[excludedRef]}>
          <div>Tooltip Content</div>
        </Tooltip>
        <div ref={excludedRef} data-testid="excluded">
          Excluded
        </div>
      </div>
    );

    fireEvent.mouseDown(screen.getByTestId('excluded'));
    expect(onClose).not.toHaveBeenCalled();
  });
});
