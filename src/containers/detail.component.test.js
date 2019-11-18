import React from 'react';

import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Detail from './detail.component';

describe('Detail Component', () => {
  afterEach(cleanup);

  it('should render a detail element that displays content when header clicked', () => {
    const title = 'Test Title';
    const content = 'Some Textual Content';

    const { container, getByText } = render(
      <Detail title={title}>
        <p>{content}</p>
      </Detail>
    );

    expect(container.querySelector('details')).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });
});
