import React from 'react';

import { storiesOf } from '@storybook/react';

import AnnotationsIcon from './annotations-icon.component';
import CloseIcon from './close-icon.component';
import CogIcon from './cog-icon.component';
import ContactIcon from './contact-icon.component';
import CorrectIcon from './correct-icon.component';
import ErrorIcon from './error-icon.component';
import FacebookIcon from './facebook-icon.component';
import FaqIcon from './faq-icon.component';
import InfoIcon from './info-icon.component';
import LinkedInIcon from './linked-in-icon.component';
import MenuIcon from './menu-icon.component';
import ProfileIcon from './profile-icon.component';
import SatelliteIcon from './satellite-icon.component';
import ShareIcon from './share-icon.component';
import TwitterIcon from './twitter-icon.component';

import styles from '../story-styles.module.css';

storiesOf('Icons', module).add('All', () => (
  <>
    <div className={styles.btnGroup}>
      <fieldset>
        <legend>Monochrome</legend>
        <AnnotationsIcon classes={styles.icon} />
        <CloseIcon classes={styles.icon} />
        <CogIcon classes={styles.icon} />
        <ContactIcon classes={styles.icon} />
        <CorrectIcon classes={styles.icon} />
        <ErrorIcon classes={styles.icon} />
        <FacebookIcon classes={styles.icon} />
        <FaqIcon classes={styles.icon} />
        <InfoIcon classes={styles.icon} />
        <LinkedInIcon classes={styles.icon} />
        <MenuIcon classes={styles.icon} />
        <ProfileIcon classes={styles.icon} />
        <SatelliteIcon classes={styles.icon} />
        <ShareIcon classes={styles.icon} />
        <TwitterIcon classes={styles.icon} />
      </fieldset>
    </div>

    <div className={styles.btnGroup}>
      <fieldset>
        <legend>Styled by color</legend>
        <AnnotationsIcon classes={`${styles.icon} ${styles.color}`} />
        <CloseIcon classes={`${styles.icon} ${styles.color}`} />
        <CogIcon classes={`${styles.icon} ${styles.color}`} />
        <ContactIcon classes={`${styles.icon} ${styles.color}`} />
        <CorrectIcon classes={`${styles.icon} ${styles.color}`} />
        <ErrorIcon classes={`${styles.icon} ${styles.color}`} />
        <FacebookIcon classes={`${styles.icon} ${styles.color}`} />
        <FaqIcon classes={`${styles.icon} ${styles.color}`} />
        <InfoIcon classes={`${styles.icon} ${styles.color}`} />
        <LinkedInIcon classes={`${styles.icon} ${styles.color}`} />
        <MenuIcon classes={`${styles.icon} ${styles.color}`} />
        <ProfileIcon classes={`${styles.icon} ${styles.color}`} />
        <SatelliteIcon classes={`${styles.icon} ${styles.color}`} />
        <ShareIcon classes={`${styles.icon} ${styles.color}`} />
        <TwitterIcon classes={`${styles.icon} ${styles.color}`} />
      </fieldset>
    </div>
  </>
));
