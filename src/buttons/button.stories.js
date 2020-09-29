import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ContactIcon from '../icons/contact-icon.component';
import CorrectIcon from '../icons/correct-icon.component';
import ErrorIcon from '../icons/error-icon.component';
import FacebookIcon from '../icons/facebook-icon.component';
import LinkedInIcon from '../icons/linkedin-icon.component';
import MenuIcon from '../icons/menu-icon.component';
import TwitterIcon from '../icons/twitter-icon.component';
import CloseIcon from '../icons/close-icon.component';

import Button from '../button/button.component';
import CloseButton from './close-button.component';
import InfoButton from './info-button.component';
import ButtonGroup from './button-group.component';
import Switch from './switch.component';

import styles from '../story-styles.module.css';

let isOn = false;
const toggleFn = () => (isOn = !isOn);

storiesOf('Buttons', module).add('Buttons', () => (
  <>

    <fieldset>
      <legend>Icon Buttons</legend>
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
      <legend>Button Group</legend>
      <div className={styles.btnGroup}>
        <ButtonGroup
          onClick={action('selected')}
          active="happy"
          options={{
            happy: 'Happy',
            sad: 'VERY SAD',
            psycho: 'PSYCHO'
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
        <InfoButton onClick={action('clicked')} />
      </div>
    </fieldset>

    <fieldset>
      <legend>Toggle Buttons</legend>
      <div className={styles.btnGroup}>
        <Switch
          name="test"
          value="option"
          label="Enabled Off"
          onClick={toggleFn}
          ariaLabel="Switch Button"
        />

        <Switch
          name="test"
          value="option"
          label="Enabled On"
          onClick={toggleFn}
          checked={true}
          ariaLabel="Switch Button"
        />

        <Switch
          name="test"
          value="option"
          label="Disabled Off"
          onClick={toggleFn}
          disabled={true}
          ariaLabel="Switch Button"
        />

        <Switch
          name="test"
          value="option"
          label="Disabled On"
          onClick={toggleFn}
          checked={true}
          disabled={true}
          ariaLabel="Switch Button"
        />
      </div>
    </fieldset>
  </>
));
