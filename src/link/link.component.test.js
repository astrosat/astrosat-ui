import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Link from './link.component';
import { Typography, rgbToHex } from '@material-ui/core';

describe('Link Component', () => {
  afterEach(cleanup);

  it('should render an `a` tag if passed a `href` attribute', () => {
    const { container, getByText } = render(<Link href="foo">Some Text</Link>);

    expect(container.querySelector('a')).toBeInTheDocument();
    expect(getByText('Some Text')).toBeInTheDocument();
  });

  it('should render a proper link text colour under normal circumstances', () => {
    const { container, getByText } = render(
      <Typography color="textPrimary">
        <Link href="#" color="inherit">
          Actual Link
        </Link>
      </Typography>
    );

    expect(container.querySelector('a')).toHaveStyle({
      color: 'rgb(51, 63, 72)'
    });
    expect(getByText('Actual Link')).toBeInTheDocument();
  });
});
