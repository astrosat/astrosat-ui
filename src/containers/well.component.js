import React from 'react';
import PropTypes from 'prop-types';

import ErrorIcon from './error.svg';
import SuccessIcon from './success.svg';

import styles from './well.module.css';

const Well = ({ type = 'default', children }) => (
  <section className={`${styles.well} ${styles[type]}`}>
    {type === 'error' && <ErrorIcon className={styles.icon} />}
    {type === 'success' && <SuccessIcon className={styles.icon} />}
    {children}
  </section>
);

Well.propTypes = {
  type: PropTypes.string,
  children: PropTypes.object.isRequired
};

export default Well;
