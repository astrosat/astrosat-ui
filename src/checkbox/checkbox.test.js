import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import { default as FormControlLabel } from '../FormControlLabel/form-control-label.component';

import Checkbox from './checkbox.component';

describe('Checkbox Component', () => {
  let onChange = jest.fn();

  afterEach(cleanup);

  it('should render checkbox', () => {
    const { container } = render(
      <Checkbox name="Test Name" onChange={onChange} />
    );

    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should render a checkbox with label text if passed to `FormControlLabel`', () => {
    const { container, getByText } = render(
      <FormControlLabel
        label="Test Label"
        control={<Checkbox name="Test Name" onChange={onChange} />}
      />
    );

    expect(container.querySelector('input')).toBeInTheDocument();
    expect(getByText('Test Label')).toBeInTheDocument();
  });

  it('should render a checked checkbox if `checked` prop is present', () => {
    const { container } = render(
      <Checkbox name="Test Name" onChange={onChange} checked />
    );

    expect(container.querySelector('input')).toHaveAttribute('checked');
  });

  it('should call `onChange` function when checked/unchecked', () => {
    const { container } = render(
      <Checkbox name="Test Name" onChange={onChange} />
    );

    fireEvent.click(container.querySelector('input'));

    expect(onChange).toHaveBeenCalled();
  });

  it('should also call `onChange` function when label is clicked', () => {
    const { getByText } = render(
      <FormControlLabel
        label="Test Label"
        control={<Checkbox name="Test Name" onChange={onChange} />}
      />
    );

    fireEvent.click(getByText('Test Label'));

    expect(onChange).toHaveBeenCalled();
  });

  it('should disable checkbox when `disabled` prop is present', () => {
    const { container } = render(
      <Checkbox name="Test Name" onChange={onChange} disabled />
    );

    expect(container.querySelector('input')).toHaveAttribute('disabled');
  });
});
