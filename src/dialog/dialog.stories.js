import React, { useState, useRef } from 'react';

import { default as Button } from '../button/button.component';

import { default as Dialog } from './dialog.component';
import { default as DialogTitle } from './dialog-title.component';
import { default as DialogContent } from './dialog-content.component';
import { default as DialogActions } from './dialog-actions.component';

import styles from './dialog.module.css';

export default { title: 'Dialog' };

const useStoryComponents = () => {
  const [dialog, setDialog] = useState(null);
  const closeButton = <Button onClick={() => setDialog(null)}>Close</Button>;
  const ref = useRef();

  return { dialog, setDialog, closeButton, ref };
};

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

const noHeaderContent = (
  <div className={styles.container}>
    <h1 className={styles.text}>This dialog has no header</h1>
  </div>
);

const noActionsOrHeaderContent = (
  <div className={styles.container}>
    <h1 className={styles.text}>This dialog has no actions or header</h1>
  </div>
);

export const TallContent = () => {
  const { dialog, setDialog, closeButton, ref } = useStoryComponents();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: tallContent,
              ACTIONS: closeButton,
              TITLE: 'Tall Content'
            })
          }
        >
          Open Dialog
        </Button>
      </div>

      <Dialog open={dialog} onBackdropClick={() => setDialog(null)} ref={ref}>
        <DialogTitle>{dialog?.TITLE}</DialogTitle>
        <DialogContent>{dialog?.CONTENT}</DialogContent>
        <DialogActions>{dialog?.ACTIONS}</DialogActions>
      </Dialog>
    </>
  );
};

export const WideContent = () => {
  const { dialog, setDialog, closeButton, ref } = useStoryComponents();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: wideContent,
              ACTIONS: closeButton,
              TITLE: 'Wide Content'
            })
          }
        >
          Open Dialog
        </Button>
      </div>

      <Dialog open={dialog} onBackdropClick={() => setDialog(null)} ref={ref}>
        <DialogTitle>{dialog?.TITLE}</DialogTitle>
        <DialogContent>{dialog?.CONTENT}</DialogContent>
        <DialogActions>{dialog?.ACTIONS}</DialogActions>
      </Dialog>
    </>
  );
};

export const TallAndWideContent = () => {
  const { dialog, setDialog, closeButton, ref } = useStoryComponents();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: tallAndWideContent,
              ACTIONS: closeButton,
              TITLE: 'Tall and Wide Content'
            })
          }
        >
          Open Dialog
        </Button>
      </div>

      <Dialog open={dialog} onBackdropClick={() => setDialog(null)} ref={ref}>
        <DialogTitle>{dialog?.TITLE}</DialogTitle>
        <DialogContent>{dialog?.CONTENT}</DialogContent>
        <DialogActions>{dialog?.ACTIONS}</DialogActions>
      </Dialog>
    </>
  );
};

export const NoActions = () => {
  const { dialog, setDialog, ref } = useStoryComponents();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: noActionContent,
              ACTIONS: null,
              TITLE: 'No Actions'
            })
          }
        >
          Open Dialog
        </Button>
      </div>

      <Dialog open={dialog} onBackdropClick={() => setDialog(null)} ref={ref}>
        <DialogTitle>{dialog?.TITLE}</DialogTitle>
        <DialogContent>{dialog?.CONTENT}</DialogContent>
      </Dialog>
    </>
  );
};

export const NoHeader = () => {
  const { dialog, setDialog, closeButton, ref } = useStoryComponents();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: noHeaderContent,
              ACTIONS: closeButton
            })
          }
        >
          Open Dialog
        </Button>
      </div>

      <Dialog open={dialog} onBackdropClick={() => setDialog(null)} ref={ref}>
        <DialogContent>{dialog?.CONTENT}</DialogContent>
        <DialogActions>{dialog?.ACTIONS}</DialogActions>
      </Dialog>
    </>
  );
};
export const NoActionsOrHeader = () => {
  const { dialog, setDialog, ref } = useStoryComponents();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          onClick={() =>
            setDialog({
              CONTENT: noActionsOrHeaderContent
            })
          }
        >
          Open Dialog
        </Button>
      </div>

      <Dialog open={dialog} onBackdropClick={() => setDialog(null)} ref={ref}>
        <DialogContent>{dialog?.CONTENT}</DialogContent>
      </Dialog>
    </>
  );
};
