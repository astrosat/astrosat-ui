import React from 'react';

import { default as Button } from '../button/button.component';

import { default as Dialog } from './dialog.component';
import { default as DialogTitle } from './dialog-title.component';
import { default as DialogContent } from './dialog-content.component';
import { default as DialogActions } from './dialog-actions.component';

import {
  tallContent,
  wideContent,
  tallAndWideContent,
  noActionContent,
  noHeaderContent,
  noActionsOrHeaderContent
} from './story-data';

import useStoryComponents from './useStoryComponents';

import styles from './dialog.module.css';

export default { title: 'Dialog' };

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
