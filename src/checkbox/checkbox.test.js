import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import Checkbox from './checkbox.component';

describe('Checkbox Component', () => {
  afterEach(cleanup);

  it('should render a checkbox tag with text under normal circumstances', () => {
    const { container, getByText } = render(<Checkbox />);

    expect(container.querySelector('checkbox')).toBeInTheDocument();
    expect(getByText('Some Text')).toBeInTheDocument();
  });
});
