import React from 'react';
import { ToggleButtonGroup } from './toggle-button-group.component';
import ToggleButton from './toggle-button.component';

const twoButtons = ['Percentage', 'Number'];

const unevenButtons = ['I am short', 'Iamverylongandunbrokentext'];

const renderButtons = ({ array, ...rest }) => {
  return (
    <ToggleButtonGroup>
      {array.map((text, i) => (
        <ToggleButton key={text} value={text} selected={i === 0} {...rest}>
          {text}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default {
  title: 'ToggleButtons',
  component: ToggleButton
};

export const Default = () => renderButtons({ array: twoButtons });

export const ThreeButtons = () =>
  renderButtons({ array: [...twoButtons, 'Button 3'] });

export const SevenButtons = () =>
  renderButtons({
    array: new Array(7).fill(undefined).map((_, i) => `Button ${i + 1}`)
  });

export const UnevenButtons = () => renderButtons({ array: unevenButtons });

export const Disabled = () =>
  renderButtons({
    array: ['Button 1', 'Button 2'],
    disabled: true
  });
