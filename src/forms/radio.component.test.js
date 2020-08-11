import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Radio from './radio.component';

describe('Radio Component', () => {
  afterEach(cleanup);

  it('should render an unchecked radio button', () => {
    const { container } = render(<Radio name="test" value="Test Value" />);

    expect(container.querySelector('.radio')).toBeInTheDocument();
    expect(container.querySelector('input')).not.toHaveAttribute('checked', '');
  });

  it('should render a checked radio button', () => {
    const { container } = render(
      <Radio name="test" value="Test Value" checked={true} />
    );

    expect(container.querySelector('.radio')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveAttribute('checked', '');
  });

  it('should toggle from unchecked to checked when clicked', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Radio name="test" value="Test Value" onChange={onChange} />
    );

    userEvent.click(container.querySelector('input'));
    expect(onChange).toHaveBeenCalled();
  });

  describe('Disabled', () => {
    afterEach(cleanup);

    it('should render a disabled radio button', () => {
      const { container } = render(
        <Radio name="test" value="Test Value" checked={true} disabled={true} />
      );

      expect(container.querySelector('input')).toHaveAttribute('disabled', '');
    });

    it('should not toggle from unchecked to checked when clicked', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Radio
          name="test"
          value="Test Value"
          disabled={true}
          onChange={onChange}
        />
      );

      userEvent.click(container.querySelector('input'));
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
