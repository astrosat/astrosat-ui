import React from 'react';
import { cleanup, render } from '@testing-library/react';

import LoadMask from './load-mask.component';

describe('Load Mask', () => {
  afterEach(cleanup);

  it('should render the Load Mask', () => {
    const { container } = render(<LoadMask />);

    expect(container.querySelector('.load-mask')).toBeInTheDocument();
  });
});
