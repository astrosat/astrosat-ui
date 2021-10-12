import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const ExtensionIcon = props => (
  <SvgIcon {...props}>
    <g fill="currentColor">
      <path d="M17.73 11.375l-2.437-2.454V5.699c0-.513-.412-.542-.922-.542-.509 0-.921.029-.921.542v1.365l-1.815-1.828c-.897-.903-2.457-.901-3.352.002L2.19 11.375a.933.933 0 000 1.313.917.917 0 001.304 0L9.587 6.55a.541.541 0 01.745 0l6.094 6.137a.916.916 0 001.304 0 .933.933 0 000-1.313z" />
      <path d="M9.523 8.292a.448.448 0 01.635 0l5.31 5.31c.063.063 3.611 0 5.546 0 1.063 0 1.306.318 1.306 1.21v4.628H11.325v-4.073h-2.97v4.073H5.408c-1.23-.007-1.32-.098-1.327-1.328L4.08 13.92a.45.45 0 01.131-.317zm9.831 6.59h-.907v1.237h-1.255v.904h1.255v1.218h.907v-1.218h1.255v-.904h-1.255v-1.238z" />
    </g>
  </SvgIcon>
);

export default ExtensionIcon;
