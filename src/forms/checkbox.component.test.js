import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Checkbox from './checkbox.component';

describe('Checkbox Component', () => {
  afterEach(cleanup);

  it('should render an unchecked checkbox', () => {
    const { container } = render(<Checkbox name="test" value="Test Value" />);

    expect(container.querySelector('.checkbox')).toBeInTheDocument();
    expect(container.querySelector('input')).not.toHaveAttribute('checked', '');
    expect(container.querySelector('.checkmark')).toBeInTheDocument();
  });

  it('should render a checked checkbox', () => {
    const { container } = render(
      <Checkbox name="test" value="Test Value" checked={true} />
    );

    expect(container.querySelector('.checkbox')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveAttribute('checked', '');
    expect(container.querySelector('.checkmark')).toBeInTheDocument();
  });

  it('should toggle from unchecked to checked when clicked', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Checkbox name="test" value="Test Value" onChange={onChange} />
    );

    fireEvent.click(container.querySelector('input'));
    expect(onChange).toHaveBeenCalled();
  });

  describe('Disabled', () => {
    afterEach(cleanup);

    it('should render a disabled checkbox', () => {
      const { container } = render(
        <Checkbox
          name="test"
          value="Test Value"
          checked={true}
          disabled={true}
        />
      );

      expect(container.querySelector('input')).toHaveAttribute('disabled', '');
    });

    it('should not toggle from unchecked to checked when clicked', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Checkbox
          name="test"
          value="Test Value"
          disabled={true}
          onChange={onChange}
        />
      );

      fireEvent.click(container.querySelector('input'));
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
