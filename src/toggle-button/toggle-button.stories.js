import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ToggleButtonGroup } from './toggle-button-group.component';
import ToggleButton from './toggle-button.component';

const useStyles = makeStyles({
  root: { backgroundColor: 'hotpink' }
});

const twoButtons = ['Percentage', 'Number'];

const unevenButtons = ['I am short', 'Iamverylongandunbrokentext'];

const renderButtons = ({ array, orientation, ...rest }) => {
  return (
    <ToggleButtonGroup orientation={orientation}>
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
  renderButtons({
    array: [...twoButtons, 'Button 3'],
    orientation: 'vertical'
  });

export const SevenButtons = () =>
  renderButtons({
    array: new Array(7).fill(undefined).map((_, i) => `Button ${i + 1}`),
    orientation: 'vertical'
  });

export const UnevenButtons = () => renderButtons({ array: unevenButtons });

export const Disabled = () =>
  renderButtons({ array: ['Button 1', 'Button 2'], disabled: true });

export const WithClasses = () =>
  renderButtons({
    array: ['Button 1', 'Button 2'],
    classes: useStyles({})
  });
