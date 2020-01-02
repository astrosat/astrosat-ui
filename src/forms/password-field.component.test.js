import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import PasswordField from './password-field.component';

describe('Password Field Component', () => {
  afterEach(cleanup);

  it('should render a basic Password field', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const { container, getByText } = render(
      <PasswordField name="test" value={value} onChange={onChange} />
    );

    expect(container.querySelector('.textfield')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveAttribute(
      'type',
      'password'
    );
    expect(container.querySelector('input')).toHaveValue(value);
    expect(getByText('Show')).toBeInTheDocument();
  });

  it('should set the placeholder text', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const placeholder = 'Test Placeholder';

    const { getByPlaceholderText } = render(
      <PasswordField
        name="test"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('should toggle button text to `Hide` when `Show` clicked', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const { container, getByText } = render(
      <PasswordField name="test" value={value} onChange={onChange} />
    );

    fireEvent.click(getByText('Show'));

    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
    expect(getByText('Hide')).toBeInTheDocument();
  });
});
