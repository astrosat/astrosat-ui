import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';

import ProgressBar from './progress-bar.component';
import IndeterminateProgressBar from './indeterminate-progress-bar.component';

storiesOf('Progress Bar', module).add('Default', () => {
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
      <ProgressBar percentage={percentage} />
      <button onClick={incrementBar}>Increment</button>
      <button onClick={decrementBar}>Decrement</button>
      <IndeterminateProgressBar percentage={percentage} />
    </>
  );
});
