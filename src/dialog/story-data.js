import React from 'react';
import styles from './dialog.module.css';

export const tallContent = (
  <div className={styles.container}>
    {[...Array(20)].map(() => (
      <h2 className={styles.text}>This is tall content</h2>
    ))}
  </div>
);

export const wideContent = (
  <div className={styles.container}>
    <p className={styles.text}>
      This is wide content This is wide content This is wide content This is
      wide content This is wide content This is wide content This is wide
      content This is wide content This is wide content This is wide content
      This is wide content This is wide content
    </p>
  </div>
);

export const tallAndWideContent = (
  <>
    <div className={styles.boxContainer}>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
    </div>
    <div className={styles.boxContainer}>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
    </div>
    <div className={styles.boxContainer}>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
      <div className={styles.box}>Box</div>
    </div>
  </>
);

export const noActionContent = (
  <div className={styles.container}>
    <h1 className={styles.text}>This dialog has no action buttons</h1>
  </div>
);

export const noHeaderContent = (
  <div className={styles.container}>
    <h1 className={styles.text}>This dialog has no header</h1>
  </div>
);

export const noActionsOrHeaderContent = (
  <div className={styles.container}>
    <h1 className={styles.text}>This dialog has no actions or header</h1>
  </div>
);
