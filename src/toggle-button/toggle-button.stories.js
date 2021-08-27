import React from 'react';
import { ToggleButtonGroup } from '../proxies';
import ToggleButton from './toggle-button.component';

const twoButtons = ['Button 1', 'Button 2'];

const renderButtons = ({ array, ...rest }) => {
  return (
    <div style={{ maxWidth: '19rem' }}>
      <ToggleButtonGroup exclusive>
        {array.map((text, i) => (
          <ToggleButton key={text} value={text} selected={i === 0} {...rest}>
            {text}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default {
  title: 'ToggleButton',
  component: ToggleButton
};

export const Default = () => renderButtons({ array: twoButtons });

export const ThreeButtons = () =>
  renderButtons({ array: [...twoButtons, 'Button 3'] });

export const SevenButtons = () =>
  renderButtons({
    array: new Array(7).fill(undefined).map((_, i) => `Button ${i + 1}`)
  });

export const UnevenButtons = () =>
  renderButtons({
    array: [
      'I am short',
      'I am very very very long',
      'Iamverylongandunbrokentext'
    ]
  });

export const Disabled = () =>
  renderButtons({
    array: ['Button 1', 'Button 2'],
    disabled: true
  });
