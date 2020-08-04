import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Textfield from './text-field.component';

describe('Text Field Component', () => {
  afterEach(cleanup);

  it('should render a basic Text field', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const { container } = render(
      <Textfield name="test" value={value} onChange={onChange} />
    );

    expect(container.querySelector('.textfield')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
    expect(container.querySelector('input')).toHaveValue(value);
  });

  it('should set the placeholder text', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const placeholder = 'Test Placeholder';

    const { getByPlaceholderText } = render(
      <Textfield
        name="test"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});
