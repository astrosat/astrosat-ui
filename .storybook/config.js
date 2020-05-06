import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import styles from '../src/index.module.css';

addDecorator(withKnobs);
addDecorator(storyFn => (
  <div
    className={select(
      'theme',
      { Dark: styles.dark, Light: styles.light },
      styles.dark
    )}
  >
    {storyFn()}
  </div>
));

configure(require.context('../src', true, /\.stories\.js$/), module);
