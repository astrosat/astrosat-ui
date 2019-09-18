import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Welcome } from '@storybook/react/demo';

import Button from '../src/buttons/button.component';
import CloseButton from '../src/buttons/close-button.component';
import InfoButton from '../src/buttons/info-button.component';
import LoadMask from '../src/load-mask/load-mask.component';

import styles from '../src/index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Buttons', module)
  // .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Button onClick={action('clicked')}>Text Button</Button>
    </div>
  ))
  .add('with some emoji', () => (
    <div className={select('theme', themes, styles.dark)}>
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          👍
        </span>
      </Button>
    </div>
  ))
  .add('Close Button', () => (
    <div className={select('theme', themes, styles.dark)}>
      <CloseButton onClick={action('clicked')} />
    </div>
  ))
  .add('Info Button', () => (
    <div className={select('theme', themes, styles.dark)}>
      <InfoButton onClick={action('clicked')} />
    </div>
  ));

storiesOf('Load Mask', module)
  // .addDecorator(withInfo)
  .add('Load Mask', () => (
    <div className={select('theme', themes, styles.dark)}>
      <LoadMask />
    </div>
  ));
