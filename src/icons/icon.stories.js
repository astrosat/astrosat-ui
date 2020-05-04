import React from 'react';

import { storiesOf } from '@storybook/react';

import * as Icons from '.';

import styles from '../story-styles.module.css';

storiesOf('Icons', module).add('All', () => (
  <>
    <div className={styles.btnGroup}>
      <fieldset>
        <legend>Monochrome</legend>
        {Object.values(Icons).map(Icon => (
          <Icon classes={styles.icon} />
        ))}
      </fieldset>
    </div>

    <div className={styles.btnGroup}>
      <fieldset>
        <legend>Styled by color</legend>
        {Object.values(Icons).map(Icon => (
          <Icon classes={`${styles.icon} ${styles.color}`} />
        ))}
      </fieldset>
    </div>
  </>
));
