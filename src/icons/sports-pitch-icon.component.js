import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const SportsPitchIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.75 4H.77C.338 4 0 4.325 0 4.741v3.266h2.087v8.014H0v2.264c0 .416.338.74.769.74H11.75v-4.013c-1.9-.124-3.402-1.643-3.402-3.498 0-1.856 1.502-3.375 3.402-3.498V4zM0 15.541h1.587V8.487H0v7.054zm12.25-7.525V4h10.981c.432 0 .769.326.768.741v3.266h-2.086v8.014h2.086v2.264c0 .416-.338.74-.769.74H12.25v-4.013c1.9-.124 3.402-1.643 3.402-3.498 0-1.856-1.502-3.375-3.402-3.498zm10.163.471h1.586v7.054h-1.586V8.487zM8.848 11.514c0-1.59 1.278-2.894 2.902-3.017v6.034c-1.624-.123-2.902-1.427-2.902-3.017zm6.304 0c0 1.59-1.278 2.894-2.902 3.017V8.497c1.624.123 2.902 1.427 2.902 3.017z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default SportsPitchIcon;
