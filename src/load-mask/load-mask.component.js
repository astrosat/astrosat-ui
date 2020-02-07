import React from 'react';

import styles from './load-mask.module.css';

const LoadMask = () => (
  <div className={styles['load-mask']}>
    <svg width="100px" height="100px" viewBox="0 0 1000 1000">
      <circle
        cx="500"
        cy="570"
        r="80"
        stroke="#fff"
        fill="rgba(246, 190, 0, 0.8)"
      />
      <circle
        cx="500"
        cy="570"
        r="200"
        strokeWidth="10"
        stroke="#fff"
        fill="none"
      />
      <circle
        cx="500"
        cy="666"
        r="300"
        strokeWidth="10"
        stroke="#fff"
        fill="none"
      />
      <circle
        cx="500"
        cy="500"
        r="470"
        strokeWidth="10"
        stroke="#fff"
        fill="none"
      />
      <g className={styles.spinner3}>
        <circle
          cx="300"
          cy="570"
          r="30"
          stroke="#fff"
          fill="rgba(246, 190, 0, 0.8)"
        />
      </g>
      <g className={styles.spinner4}>
        <circle
          cx="500"
          cy="366"
          r="30"
          stroke="#fff"
          fill="rgba(246, 190, 0, 0.8)"
        />
      </g>
      <g className={styles.spinner5}>
        <circle
          cx="500"
          cy="30"
          r="30"
          stroke="#fff"
          fill="rgba(246, 190, 0, 0.8)"
        />
      </g>
    </svg>
  </div>
);

export default LoadMask;
