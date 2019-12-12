import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CloseButton from '../buttons/close-button.component';

import styles from './dialog.module.css';

const Dialog = ({ isVisible, close, children }) =>
  isVisible
    ? ReactDOM.createPortal(
        <>
          <div className={styles.modal} onClick={() => close()}>
            <div className={styles.dialog} tabIndex={-1} role="dialog">
              <div className={styles.header}>
                <CloseButton onClick={close} ariaLabel="Close" />
              </div>

              <div className={styles.content}>{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

Dialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};

export default Dialog;
