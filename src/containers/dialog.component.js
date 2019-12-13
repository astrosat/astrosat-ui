import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import CloseButton from '../buttons/close-button.component';

import styles from './dialog.module.css';

const Dialog = ({ isVisible, close, title, children }, ref) => {
  const overlayRef = useRef(null);

  return isVisible && ref.current
    ? ReactDOM.createPortal(
        <div
          className={styles.modal}
          onClick={event => {
            if (overlayRef.current === event.target) {
              close();
            }
          }}
          ref={overlayRef}
        >
          <div
            className={styles.dialog}
            tabIndex={-1}
            role="dialog"
            aria-label="dialog"
          >
            <div className={styles.header}>
              <h3 className={styles.title}>{title}</h3>
              <CloseButton onClick={close} ariaLabel="Close" />
            </div>

            <div className={styles.content}>{children}</div>
          </div>
        </div>,
        ref.current
      )
    : null;
};

export default React.memo(React.forwardRef(Dialog));
