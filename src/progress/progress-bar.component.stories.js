import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import ProgressBar from './progress-bar.component';
import IndeterminateProgressBar from './indeterminate-progress-bar.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Progress Bar', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const [percentage, setPercentage] = useState(0);

    const incrementBar = () => {
      if (percentage != 100) {
        setPercentage(percentage + 25);
      }
    };

    const decrementBar = () => {
      if (percentage != 0) {
        setPercentage(percentage - 25);
      }
    };

    return (
      <>
        <div>
          <div className={select('theme', themes, styles.dark)}>
            <ProgressBar percentage={percentage} />
          </div>

          <button onClick={incrementBar}>Increment</button>
          <button onClick={decrementBar}>Decrement</button>
        </div>
        <div>
          <IndeterminateProgressBar percentage={percentage} />
        </div>
      </>
    );
  });
