import React from 'react';
import PropTypes from 'prop-types';

import styles from './detail.module.css';

const Detail = ({ title, children }) => (
  <details className={styles.details}>
    <summary className={styles.header}>
      <strong>{title}</strong>
    </summary>
    {children}
  </details>
);

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default Detail;
