import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import Slider from './slider.component';

describe('Slider Component', () => {
  afterEach(cleanup);

  it('should render a select button', () => {
    const { container, getByText } = render(
      <Slider min={0} max={10} values={[1, 7]} />
    );

    expect(container.querySelector('.track')).toBeInTheDocument();
    // Do tick increments exist
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    // Do min/max values exist
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
  });

  xit('should call action when slider dragged', () => {
    const onChange = jest.fn();
    const { debug, container, getByText } = render(
      <Slider min={0} max={10} values={[1, 7]} onChange={onChange} />
    );
    // debug();

    fireEvent.click(getByText('1').parentNode);
    // debug();
    // expect(onChange).toHaveBeenCalled();
  });
});
