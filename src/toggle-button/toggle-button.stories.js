import React from 'react';
import { makeStyles } from '@material-ui/core';
import ToggleButtonGroup from './toggle-button-group.component';
import ToggleButton from './toggle-button.component';

const useStyles = makeStyles({
  root: { backgroundColor: 'hotpink' }
});

const twoButtons = ['Percentage', 'Number'];

const unevenButtons = ['I am short', 'Iamverylongandunbrokentext'];

const renderButtons = ({
  array,
  orientation,
  disabled,
  size = 'medium',
  ...rest
}) => {
  return (
    <ToggleButtonGroup orientation={orientation} size={size}>
      {array.map((text, i) => (
        <ToggleButton
          key={text}
          value={text}
          selected={i === 0}
          disabled={disabled && i !== 0 ? true : false}
          {...rest}
        >
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

export const Default = () =>
  // @ts-ignore
  renderButtons({ array: twoButtons });

export const ThreeButtons = () =>
  // @ts-ignore
  renderButtons({
    array: [...twoButtons, 'Button 3'],
    orientation: 'vertical'
  });

export const SevenButtons = () =>
  // @ts-ignore
  renderButtons({
    array: new Array(7).fill(undefined).map((_, i) => `Button ${i + 1}`),
    orientation: 'vertical'
  });

export const UnevenButtons = () =>
  // @ts-ignore
  renderButtons({ array: unevenButtons });

export const Disabled = () =>
  // @ts-ignore
  renderButtons({ array: ['Button 1', 'Button 2'], disabled: true });

export const WithClasses = () =>
  // @ts-ignore
  renderButtons({
    array: ['Button 1', 'Button 2'],
    classes: useStyles({})
  });

export const SizeSmall = () =>
  // @ts-ignore
  renderButtons({ array: ['Button 1', 'Button 2'], size: 'small' });
