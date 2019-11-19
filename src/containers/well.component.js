import React from 'react';
import PropTypes from 'prop-types';

import ErrorIcon from './error.component';
import SuccessIcon from './error.component';

import styles from './well.module.css';

const Well = ({ type = 'default', children }) => (
  <section className={`${styles.well} ${styles[type]}`}>
    {type === 'error' && <ErrorIcon classes={styles.icon} />}
    {type === 'success' && <SuccessIcon classes={styles.icon} />}
    {children}
  </section>
);

Well.propTypes = {
  type: PropTypes.string,
  children: PropTypes.object.isRequired
};

export default Well;
