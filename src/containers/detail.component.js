import React from 'react';
import PropTypes from 'prop-types';

import styles from './detail.module.css';

const Detail = ({ title, isOpen = false, children }) => (
  <details className={styles.details} open={isOpen}>
    <summary className={styles.header}>{title}</summary>
    {children}
  </details>
);

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  children: PropTypes.object.isRequired
};

export default Detail;
