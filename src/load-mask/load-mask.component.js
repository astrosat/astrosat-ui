import React from 'react';

import { Backdrop } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

// const useClasses = makeStyles(theme => ({
//   sun: {
//     fill: theme.palette.getContrastText(theme.palette.background.default),
//   },
//   orbit: {
//     fill: 'none',
//     strokeWidth: '10',
//     stroke: theme.palette.getContrastText(theme.palette.background.default),
//   },
//   spinner: {
//     fill: theme.palette.getContrastText(theme.palette.background.default),
//     animation: '$spin 4s linear infinite',
//   },
//   spinner1: {
//     transformOrigin: '50% 57%',
//   },
//   spinner2: {
//     transformOrigin: '50% 66.6%',
//   },
//   spinner3: {
//     animationDuration: '5s',
//     transformOrigin: '50% 50%',
//   },
//   '@keyframes spin': {
//     '0%': {
//       transform: 'rotate(0deg)',
//     },
//     '100%': {
//       transform: 'rotate(360deg)',
//     },
//   },
// }));

/**
 * @param {import('@mui/material').BackdropProps} props
 */
const LoadMask = props => {
  // const { orbit, spinner, spinner1, spinner2, spinner3, sun } = useClasses();

  return (
    <Backdrop
      {...props}
      sx={{
        sun: {
          fill: theme =>
            theme.palette.getContrastText(theme.palette.background.default),
        },
        orbit: {
          fill: 'none',
          strokeWidth: '10',
          stroke: theme =>
            theme.palette.getContrastText(theme.palette.background.default),
        },
        spinner: {
          fill: theme =>
            theme.palette.getContrastText(theme.palette.background.default),
          animation: '$spin 4s linear infinite',
        },
        spinner1: {
          transformOrigin: '50% 57%',
        },
        spinner2: {
          transformOrigin: '50% 66.6%',
        },
        spinner3: {
          animationDuration: '5s',
          transformOrigin: '50% 50%',
        },
        '@keyframes spin': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      }}
    >
      <svg width="100px" height="100px" viewBox="0 0 1000 1000">
        <circle
          cx="500"
          cy="570"
          r="80"
          sx={{
            fill: theme =>
              theme.palette.getContrastText(theme.palette.background.default),
          }}
        />
        <circle
          cx="500"
          cy="570"
          r="200"
          // className={orbit}
          sx={{
            fill: 'none',
            strokeWidth: '10',
            stroke: theme =>
              theme.palette.getContrastText(theme.palette.background.default),
          }}
        />
        <circle
          cx="500"
          cy="666"
          r="300"
          // className={orbit}
          sx={{
            fill: 'none',
            strokeWidth: '10',
            stroke: theme =>
              theme.palette.getContrastText(theme.palette.background.default),
          }}
        />
        <circle
          cx="500"
          cy="500"
          r="470"
          // className={orbit}
          sx={{
            fill: 'none',
            strokeWidth: '10',
            stroke: theme =>
              theme.palette.getContrastText(theme.palette.background.default),
          }}
        />
        <g className={clsx(spinner, spinner1)}>
          <circle cx="300" cy="570" r="40" />
        </g>
        <g className={clsx(spinner, spinner2)}>
          <circle cx="500" cy="366" r="40" />
        </g>
        <g className={clsx(spinner, spinner3)}>
          <circle cx="500" cy="30" r="40" />
        </g>
      </svg>
    </Backdrop>
  );
};

export default LoadMask;
