import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import PasswordStrengthMeter from './password-strength-meter.component';

describe('Password Strength Meter Component', () => {
  afterEach(cleanup);

  it('should render a `Weak` Password Strength Meter with recommendations', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="test" />
    );

    expect(getByText('Password Strength:')).toBeInTheDocument();
    expect(getByText('Weak')).toBeInTheDocument();
    expect(
      getByText('Add another word or two. Uncommon words are better.')
    ).toBeInTheDocument();
    expect(container.querySelector('progress')).toHaveClass(
      'passwordMeter Weak'
    );
    expect(container.querySelector('progress')).toHaveAttribute('value', '1');
    expect(container.querySelector('progress')).toHaveAttribute('max', '4');
  });

  it('should render a `Fair` Password Strength Meter with recommendations', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcrete" />
    );

    expect(getByText('Fair')).toBeInTheDocument();
    expect(
      getByText('Add another word or two. Uncommon words are better.')
    ).toBeInTheDocument();
    expect(container.querySelector('progress')).toHaveClass(
      'passwordMeter Fair'
    );
    expect(container.querySelector('progress')).toHaveAttribute('value', '2');
  });

  it('should render a `Good` Password Strength Meter', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="9anDAc0nt" />
    );

    expect(getByText('Good')).toBeInTheDocument();
    expect(container.querySelector('progress')).toHaveClass(
      'passwordMeter Good'
    );
    expect(container.querySelector('progress')).toHaveAttribute('value', '3');
  });

  it('should render a `Strong` Password Strength Meter with recommendations', () => {
    const { container, getByText } = render(
      <PasswordStrengthMeter password="pandaconcretespoon" />
    );

    expect(getByText('Strong')).toBeInTheDocument();
    expect(container.querySelector('progress')).toHaveClass(
      'passwordMeter Strong'
    );
    expect(container.querySelector('progress')).toHaveAttribute('value', '4');
  });
});
