import React from 'react';

import { cleanup, render } from '@testing-library/react';

import Well from './well.component';

describe('Well Component', () => {
  afterEach(cleanup);

  it('should render a default Well', () => {
    const content = 'Some Textual Content';

    const { container, getByText } = render(
      <Well>
        <p>{content}</p>
      </Well>
    );

    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('section')).toHaveClass('well default');
    expect(getByText(content)).toBeInTheDocument();
  });

  it('should render a success Well', () => {
    const content = 'Some Textual Content';

    const { container, getByText } = render(
      <Well type="success">
        <p>{content}</p>
      </Well>
    );

    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('section')).toHaveClass('well success');
    expect(getByText(content)).toBeInTheDocument();
  });

  it('should render a error Well', () => {
    const content = 'Some Textual Content';

    const { container, getByText } = render(
      <Well type="error">
        <p>{content}</p>
      </Well>
    );

    expect(container.querySelector('section')).toBeInTheDocument();
    expect(container.querySelector('section')).toHaveClass('well error');
    expect(getByText(content)).toBeInTheDocument();
  });
});
