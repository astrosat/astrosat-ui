import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../src/buttons/button.component';
import CloseButton from '../src/buttons/close-button.component';
import InfoButton from '../src/buttons/info-button.component';
import LoadMask from '../src/load-mask/load-mask.component';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Buttons', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Text Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        👍
      </span>
    </Button>
  ))
  .add('Close Button', () => <CloseButton onClick={action('clicked')} />)
  .add('Info Button', () => <InfoButton onClick={action('clicked')} />);

storiesOf('Load Mask', module).add('Load Mask', () => <LoadMask />);
