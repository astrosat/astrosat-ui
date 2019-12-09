import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';

import ContactIcon from '../icons/contact-icon.component';
import CorrectIcon from '../icons/correct-icon.component';
import ErrorIcon from '../icons/error-icon.component';
import FacebookIcon from '../icons/facebook-icon.component';
import LinkedInIcon from '../icons/linked-in-icon.component';
import MenuIcon from '../icons/menu-icon.component';
import TwitterIcon from '../icons/twitter-icon.component';
import CloseIcon from '../icons/close-icon.component';

import Button from './button.component';
import CloseButton from './close-button.component';
import InfoButton from './info-button.component';
import ButtonGroup from './button-group.component';

import styles from '../index.module.css';

const themes = { Dark: styles.dark, Light: styles.light };

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Buttons', () => (
    <div className={select('theme', themes, styles.dark)}>
      <fieldset>
        <legend>Text Buttons</legend>

        <div className={styles.btnGroup}>
          <Button theme="primary" onClick={action('clicked')}>
            Primary
          </Button>
          <Button theme="secondary" onClick={action('clicked')}>
            Secondary
          </Button>
          <Button theme="tertiary" onClick={action('clicked')}>
            Tertiary
          </Button>
          <Button theme="primary" onClick={action('clicked')} disabled={true}>
            Disabled
          </Button>
          <Button href={action('clicked')}>Link</Button>
          <Button theme="link" href={action('clicked')}>
            Link
          </Button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Emoji Buttons</legend>
        <div className={styles.btnGroup}>
          <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
              😀
            </span>
          </Button>
          <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
              😎
            </span>
          </Button>
          <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
              👍
            </span>
          </Button>
          <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
              💯
            </span>
          </Button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Monochrome Icon Buttons</legend>
        <div className={styles.btnGroup}>
          <Button onClick={action('clicked')}>
            <ContactIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <MenuIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <ErrorIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <CorrectIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <CloseIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <TwitterIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <FacebookIcon classes={styles.btnIcon} />
          </Button>
          <Button onClick={action('clicked')}>
            <LinkedInIcon classes={styles.btnIcon} />
          </Button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Styled Icon Buttons</legend>
        <div className={styles.btnGroup}>
          <Button onClick={action('clicked')}>
            <ContactIcon classes={`${styles.btnIcon} ${styles.red}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <MenuIcon classes={`${styles.btnIcon} ${styles.grey}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <ErrorIcon classes={`${styles.btnIcon} ${styles.blue}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <CorrectIcon classes={`${styles.btnIcon} ${styles.green}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <CloseIcon classes={`${styles.btnIcon} ${styles.teal}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <TwitterIcon classes={`${styles.btnIcon} ${styles.yellow}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <FacebookIcon classes={`${styles.btnIcon} ${styles.orange}`} />
          </Button>
          <Button onClick={action('clicked')}>
            <LinkedInIcon classes={`${styles.btnIcon} ${styles.violet}`} />
          </Button>
        </div>
      </fieldset>

      <fieldset>
        <legend>Button Group</legend>
        <div className={styles.btnGroup}>
          <ButtonGroup
            onSelect={action('selected')}
            selected="happy"
            options={{
              happy: 'Happy',
              sad: 'VERY SAD'
            }}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Miscellaneous Buttons</legend>
        <div className={styles.btnGroup}>
          <CloseButton onClick={action('clicked')} />
        </div>
        <div className={styles.btnGroup}>
          <InfoButton onClick={action('clicked')} />
        </div>
      </fieldset>
    </div>
  ));
