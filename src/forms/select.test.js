import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Select from './select.component';

const options = [
  { name: 'Option 1', value: { id: '1', title: 'Mr' } },
  {
    name: 'Option 2',
    value: [
      { id: '1', title: 'Mr' },
      { id: '2', title: 'Mrs' }
    ]
  },
  { name: 'Option 3', value: 'Mr' }
];

describe('Select Component', () => {
  afterEach(cleanup);

  it('should render a select button', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Select name="test" options={options} onChange={onChange} />
    );

    expect(container.querySelector('.select')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
    expect(container.querySelector('.textfield')).toBeInTheDocument();
    expect(container.querySelector('.textfield')).toHaveValue('');
  });

  it('should display options', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Select name="test" options={options} onChange={onChange} />
    );

    fireEvent.click(container.querySelector('.textfield'));

    expect(container.querySelector('.options')).toBeInTheDocument();
    expect(container.querySelectorAll('li').length).toEqual(3);
  });

  it('should select an option', () => {
    const option = 'Option 2';
    const onChange = jest.fn();
    const { container, getByText } = render(
      <Select options={options} onChange={onChange} value={options[1].value} />
    );

    fireEvent.click(container.querySelector('.textfield'));
    fireEvent.click(getByText(option));

    expect(container.querySelector('.textfield')).toHaveValue(option);
  });
});
