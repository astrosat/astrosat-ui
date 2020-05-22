import React from 'react';
import PropTypes from 'prop-types';

const VisualisationIcon = ({ classes }) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
  >
    <path
      d="M25.415 28.349H4.928a.276.276 0 01-.276-.275V1.929c0-.153.124-.276.276-.276h15.166l.053.056v4.96c0 .627.508 1.136 1.135 1.136h4.408v20.269a.277.277 0 01-.275.275zm1.71-21.47L21.067.268A.826.826 0 0020.458 0H4.928A1.93 1.93 0 003 1.929v26.145A1.93 1.93 0 004.928 30h20.487a1.93 1.93 0 001.927-1.926V7.436a.825.825 0 00-.218-.558"
      fill="currentColor"
    />
    <path
      d="M18.976 18.034a.786.786 0 01-.771.684.769.769 0 01-.68-.43.782.782 0 01-.09-.37.79.79 0 01.629-.784h.037a.591.591 0 01.11 0 .788.788 0 01.78.796v.001a.641.641 0 01-.022.103h.007zm-6.856-2.401h-.012a.856.856 0 01-.134 0 .788.788 0 01-.78-.795v-.003a.665.665 0 010-.096.78.78 0 01.88-.678c.424.06.72.465.66.901a.789.789 0 01-.614.67zm-4.59 4.955a.779.779 0 01-.917.623.798.798 0 01-.606-.941.785.785 0 01.687-.635h.075a.789.789 0 01.76.946v.007zm16.665-9.306l-2.587-.1a.434.434 0 00-.445.427.452.452 0 00.123.325l.936.961-3.1 3.175a1.98 1.98 0 00-2.39.417l-2.76-1.361c.012-.092.018-.184.018-.277.038-1.148-.838-2.11-1.957-2.149-1.118-.038-2.055.862-2.093 2.01a2.375 2.375 0 000 .14c0 .347.085.688.248.993l-2.515 2.722a1.96 1.96 0 00-.905-.234c-1.119 0-2.026.93-2.028 2.079-.001 1.148.905 2.08 2.024 2.081 1.119.002 2.027-.929 2.028-2.077v-.004a2.096 2.096 0 00-.226-.959l2.531-2.739a1.984 1.984 0 002.335-.437l2.767 1.363a2.308 2.308 0 00-.018.28c-.038 1.148.839 2.11 1.958 2.148 1.118.038 2.055-.861 2.092-2.01a2.019 2.019 0 000-.139 2.083 2.083 0 00-.226-.93l3.105-3.176.906.931a.42.42 0 00.606.003.447.447 0 00.127-.335l-.128-2.686a.432.432 0 00-.421-.442h-.005z"
      fill="currentColor"
    />
  </svg>
);

VisualisationIcon.propTypes = {
  classes: PropTypes.string.isRequired
};

export default VisualisationIcon;
