import React from 'react';

import { render, screen, userEvent } from 'test/test-utils';

import Button from './button.component';

describe('Button Component', () => {
  it('should render a button tag with text under normal circumstances', () => {
    const { container } = render(<Button>Some Text</Button>);

    expect(container.querySelector('button')).toBeInTheDocument();
    expect(screen.getByText('Some Text')).toBeInTheDocument();
  });

  it('should render an `a` tag if passed a `href` attribute', () => {
    const { container } = render(<Button href="foo">Some Text</Button>);

    expect(container.querySelector('a')).toBeInTheDocument();
    expect(screen.getByText('Some Text')).toBeInTheDocument();
  });

  xit('should propagates the click event properly', () => {
    const user = userEvent.setup();

    const handler = jest.fn();
    render(<Button onClick={handler}>Some Text</Button>);

    user.click(screen.getByRole('button', { name: 'Some Text' }));
    expect(handler).toHaveBeenCalled();
  });

  describe('disabled', () => {
    it('should not propagate the click event', async () => {
      const handler = jest.fn();
      render(
        <Button onClick={handler} disabled={true}>
          Some Text
        </Button>
      );

      expect(screen.getByRole('button', { name: 'Some Text' })).toBeDisabled();
    });
  });
});
