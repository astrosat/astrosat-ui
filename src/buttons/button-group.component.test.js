import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import ButtonGroup from './button-group.component';
import expectExport from 'expect';
// import { ReactComponent as CloseIcon } from './close.svg';

describe('Button Group', () => {
  it('should render a Group of mutually exclusive buttons', () => {
    const handler = jest.fn();
    const { getByText } = render(
      <ButtonGroup
        onClick={handler}
        active="happy"
        options={{
          happy: 'Happy',
          sad: 'VERY SAD',
          psycho: 'PSYCHO'
        }}
      />
    );

    expect(getByText('Happy')).toBeInTheDocument();
    expect(getByText('VERY SAD')).toBeInTheDocument();
    expect(getByText('PSYCHO')).toBeInTheDocument();
  });

  xit('should have the correct class(es) for styling', () => {});

  xit('should propagates the click event', () => {});

  describe('disabled', () => {
    xit('should disable the button', () => {});

    xit('should not propagate the click event', () => {});
  });
});
