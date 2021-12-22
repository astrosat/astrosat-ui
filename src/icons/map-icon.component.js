import React from 'react';
import { SvgIcon } from '@material-ui/core';

/**
 * @param {import('@material-ui/core').SvgIconProps} props
 */
const MapIcon = props => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.853 5.613a.5.5 0 0 1 .223 0l5.905 1.36a.5.5 0 0 1 .388.487v15.827a.5.5 0 0 1-.597.49l-5.902-1.166-5.79 1.288a.501.501 0 0 1-.219 0L3.09 22.587a.5.5 0 0 1-.39-.488V6.36a.5.5 0 0 1 .501-.5h.448a.5.5 0 0 1 .101.01l5.218 1.078 5.886-1.335ZM8.421 7.857 3.7 6.88v14.82l4.72 1.072V7.857Zm1 14.942V7.871l5.157-1.17v14.95L9.421 22.8Zm6.157-1.067V6.755l4.79 1.103v14.82l-4.79-.946Z"
      fill="currentColor"
    />
    <path
      d="M18.767 8.186c.112-.107 2.723-2.644 2.723-5.278C21.49 1.304 20.13 0 18.462 0c-1.67 0-3.028 1.304-3.028 2.908 0 2.634 2.61 5.171 2.722 5.278a.44.44 0 0 0 .611 0ZM16.3 2.908c0-1.146.97-2.078 2.163-2.078 1.192 0 2.162.932 2.162 2.078 0 1.793-1.502 3.642-2.162 4.37-.661-.728-2.163-2.576-2.163-4.37Z"
      fill="currentColor"
    />
    <path
      d="M19.76 3.23c0-.763-.583-1.384-1.298-1.384-.716 0-1.298.621-1.298 1.384 0 .764.582 1.385 1.298 1.385.715 0 1.297-.62 1.297-1.384Zm-1.73 0c0-.253.193-.46.432-.46.238 0 .432.207.432.46 0 .255-.194.462-.432.462-.239 0-.432-.207-.432-.462Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default MapIcon;
