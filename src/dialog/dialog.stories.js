import React, { useState, useRef } from 'react';

import { default as Button } from '../button/button.component';

import { default as Dialog } from './dialog.component';

import styles from './dialog.module.css';

export default { title: 'Dialog' };

export const Default = () => {
  const [dialog, setDialog] = useState(null);
  const ref = useRef();

  const closeButton = <Button onClick={() => setDialog(null)}>Close</Button>;

  const tallContent = (
    <div className={styles.container}>
      {[...Array(20)].map(() => (
        <h2 className={styles.text}>This is tall content</h2>
      ))}
    </div>
  );

  const wideContent = (
    <div className={styles.container}>
      <p className={styles.text}>
        This is wide content This is wide content This is wide content This is
        wide content This is wide content This is wide content This is wide
        content This is wide content This is wide content This is wide content
        This is wide content This is wide content
      </p>
    </div>
  );

  const tallAndWideContent = (
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

  const noActionContent = (
    <div className={styles.container}>
      <h1 className={styles.text}>This dialog has no action buttons</h1>
    </div>
  );

  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: tallContent,
              ACTIONS: closeButton
            })
          }
        >
          Tall Content
        </Button>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: wideContent,
              ACTIONS: closeButton
            })
          }
        >
          Wide Content
        </Button>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: tallAndWideContent,
              ACTIONS: closeButton
            })
          }
        >
          Tall and Wide Content
        </Button>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: noActionContent,
              ACTIONS: null
            })
          }
        >
          No Actions
        </Button>
      </div>

      <Dialog
        open={dialog}
        onBackdropClick={() => setDialog(null)}
        title="Dialog Title"
        ref={ref}
        actions={dialog?.ACTIONS}
      >
        {dialog?.CONTENT}
      </Dialog>
    </>
  );
};
