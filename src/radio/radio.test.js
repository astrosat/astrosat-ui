import React from 'react';

import { cleanup, render } from '@testing-library/react';

import { default as FormControlLabel } from '../form-control-label/form-control-label.component';

import Radio from './radio.component';

describe('Radio Component', () => {
  afterEach(cleanup);

  it('should render radio', () => {
    const { container } = render(<Radio name="Test Name" value={'Radio 1'} />);

    expect(container.querySelector('input')).toBeInTheDocument();
  });

  it('should render a radio with label text if passed to `FormControlLabel`', () => {
    const { container, getByText } = render(
      <FormControlLabel
        label="Radio 1"
        control={<Radio name="Radio 1" value="Radio 1" />}
      />
    );

    expect(container.querySelector('input')).toBeInTheDocument();
    expect(getByText('Radio 1')).toBeInTheDocument();
  });

  it('should render a checked radio if `checked` prop is present', () => {
    const { container } = render(
      <Radio name="Radio 2" value="Radio 2" checked />
    );

    expect(container.querySelector('input')).toHaveAttribute('checked');
  });

  it('should disable radio when `disabled` prop is present', () => {
    const { container } = render(
      <Radio name="Test Name" value="Radio 4" disabled />
    );

    expect(container.querySelector('input')).toHaveAttribute('disabled');
  });
});
