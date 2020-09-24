import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Link from './link.component';

describe('Link Component', () => {
  afterEach(cleanup);

  it('should render an anchor tag with text under normal circumstances', () => {
    const { container, getByText } = render(<Link>Some Text</Link>);

    expect(container.querySelector('a')).toBeInTheDocument();
    expect(getByText('Some Text')).toBeInTheDocument();
  });

  it('should render an `a` tag if passed a `href` attribute', () => {
    const { container, getByText } = render(<Link href="foo">Some Text</Link>);

    expect(container.querySelector('a')).toBeInTheDocument();
    expect(getByText('Some Text')).toBeInTheDocument();
  });
});
