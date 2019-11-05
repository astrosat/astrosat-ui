import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import LoadMask from './load-mask.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Load Mask', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div className={select('theme', themes, styles.dark)}>
      <LoadMask />
    </div>
  ));
