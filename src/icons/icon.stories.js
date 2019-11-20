import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import ContactIcon from './contact-icon.component';
import CorrectIcon from './correct-icon.component';
import ErrorIcon from './error-icon.component';
import FacebookIcon from './facebook-icon.component';
import LinkedInIcon from './linked-in-icon.component';
import MenuIcon from './menu-icon.component';
import TwitterIcon from './twitter-icon.component';
import CloseIcon from './close-icon.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('All', () => (
    <div className={select('theme', themes, styles.dark)}>
      <div className={styles.btnGroup}>
        <fieldset>
          <legend>Monochrome</legend>
          <ContactIcon classes={styles.icon} />
          <MenuIcon classes={styles.icon} />
          <ErrorIcon classes={styles.icon} />
          <CorrectIcon classes={styles.icon} />
          <CloseIcon classes={styles.icon} />
          <TwitterIcon classes={styles.icon} />
          <FacebookIcon classes={styles.icon} />
          <LinkedInIcon classes={styles.icon} />
        </fieldset>
      </div>

      <div className={styles.btnGroup}>
        <fieldset>
          <legend>Styled</legend>
          <ContactIcon classes={`${styles.icon} ${styles.red}`} />
          <MenuIcon classes={`${styles.icon} ${styles.grey}`} />
          <ErrorIcon classes={`${styles.icon} ${styles.blue}`} />
          <CorrectIcon classes={`${styles.icon} ${styles.green}`} />
          <CloseIcon classes={`${styles.icon} ${styles.teal}`} />
          <TwitterIcon classes={`${styles.icon} ${styles.yellow}`} />
          <FacebookIcon classes={`${styles.icon} ${styles.orange}`} />
          <LinkedInIcon classes={`${styles.icon} ${styles.violet}`} />
        </fieldset>
      </div>
    </div>
  ));
