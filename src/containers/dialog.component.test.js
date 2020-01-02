import React, { useRef } from 'react';

import {
  cleanup,
  render,
  fireEvent,
  waitForElement
} from '@testing-library/react';

import Dialog from './dialog.component';

describe('Dialog Component', () => {
  afterEach(cleanup);

  it('should render a hidden Dialog portal', () => {
    const title = 'Test Title';
    const content = 'Test Content';
    const close = jest.fn();
    const ref = {
      current: document.body
    };

    const { container, queryByText } = render(
      <Dialog isVisible={false} title={title} close={close} ref={ref}>
        <p>{content}</p>
      </Dialog>
    );

    expect(container.querySelector('.modal')).not.toBeInTheDocument();
    expect(queryByText(/Test Title/i)).not.toBeInTheDocument();
    expect(queryByText(/Test Content/i)).not.toBeInTheDocument();
  });

  it('should render a visible Dialog portal', () => {
    const title = 'Test Title';
    const content = 'Test Content';
    const close = jest.fn();
    const ref = {
      current: document.body
    };

    const { getByText } = render(
      <Dialog isVisible={true} title={title} close={close} ref={ref}>
        <p>{content}</p>
      </Dialog>
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });

  it('should hide the Dialog when close button clicked', async () => {
    const title = 'Test Title';
    const content = 'Test Content';
    const close = jest.fn();
    const ref = {
      current: document.body
    };

    const { container } = render(
      <Dialog isVisible={true} title={title} close={close} ref={ref}>
        <p>{content}</p>
      </Dialog>,
      {
        container: document.body
      }
    );

    expect(container.querySelector('.modal')).toBeInTheDocument();

    fireEvent.click(container.querySelector('.close'));
    expect(close).toHaveBeenCalled();
  });
});
