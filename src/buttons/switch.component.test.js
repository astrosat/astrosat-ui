import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import Switch from './switch.component';

describe('Switch Component', () => {
  afterEach(cleanup);

  it('should toggle from off to on', async () => {
    const onClick = jest.fn();

    const { container, rerender } = render(
      <Switch on={false} onClick={onClick} />
    );

    expect(container.querySelector('.toggle-btn-off')).toBeInTheDocument();
    fireEvent.click(container.querySelector('.toggle-btn'));
    expect(onClick).toHaveBeenCalled();

    rerender(<Switch on={true} onClick={onClick} />);
    expect(container.querySelector('.toggle-btn-on')).toBeInTheDocument();
  });
});
