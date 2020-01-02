import React from 'react';
import { cleanup, render } from '@testing-library/react';

import TextArea from './text-area.component';

describe('Text Area Component', () => {
  afterEach(cleanup);

  it('should render a basic Text area', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const { container } = render(
      <TextArea name="test" value={value} onChange={onChange} />
    );

    expect(container.querySelector('.textarea')).toBeInTheDocument();
    expect(container.querySelector('.textarea')).toHaveValue(value);
  });

  it('should set the placeholder text', () => {
    const onChange = jest.fn();
    const value = 'Test Value';
    const placeholder = 'Test Placeholder';

    const { getByPlaceholderText } = render(
      <TextArea
        name="test"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );

    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});
