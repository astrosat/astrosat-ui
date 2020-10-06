import React from 'react';

import { storiesOf } from '@storybook/react';

import * as Icons from '.';

import styles from '../story-styles.module.css';

storiesOf('Icons', module).add('All', () => (
  <>
    <div className={styles.btnGroup}>
      <fieldset>
        <legend>Monochrome</legend>
        <div className={styles.iconSet}>
          {Object.values(Icons).map((Icon, i) => (
            <div className={styles.iconGroup}>
              <Icon key={`icon-${i}`} />
              <p>{Icon.name}</p>
            </div>
          ))}
        </div>
      </fieldset>
    </div>

    <div className={styles.btnGroup}>
      <fieldset>
        <legend>Styled by color</legend>
        <div className={styles.iconSet}>
          {Object.values(Icons).map((Icon, i) => (
            <div className={styles.iconGroup}>
              <Icon
                key={`icon-${i}`}
                classes={`${styles.icon} ${styles.color}`}
              />
              <p>{Icon.name}</p>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  </>
));
