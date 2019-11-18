import React from 'react';

import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Well from './well.component';

describe('Well Component', () => {
  afterEach(cleanup);

  it('should render a Well element that displays content when header clicked', () => {
    const content = 'Some Textual Content';

    const { container, getByText } = render(
      <Well>
        <p>{content}</p>
      </Well>
    );

    expect(container.querySelector('section')).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });
});
