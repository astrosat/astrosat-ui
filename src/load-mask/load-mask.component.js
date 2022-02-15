import React from 'react';

import { Backdrop } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import clsx from 'clsx';

const PREFIX = 'LoadMask';

const classes = {
  sun: `${PREFIX}-sun`,
  orbit: `${PREFIX}-orbit`,
  spinner: `${PREFIX}-spinner`,
  spinner1: `${PREFIX}-spinner1`,
  spinner2: `${PREFIX}-spinner2`,
  spinner3: `${PREFIX}-spinner3`,
};

const spin = keyframes`
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
`;

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  [`& .${classes.sun}`]: {
    fill: theme.palette.getContrastText(theme.palette.background.default),
  },
  [`& .${classes.orbit}`]: {
    fill: 'none',
    strokeWidth: '10',
    stroke: theme.palette.getContrastText(theme.palette.background.default),
  },
  [`& .${classes.spinner}`]: {
    fill: theme.palette.getContrastText(theme.palette.background.default),
    // animation: '$spin 4s linear infinite',
    animation: `${spin} 4s linear infinite`,
  },
  [`& .${classes.spinner1}`]: {
    transformOrigin: '50% 57%',
  },
  [`& .${classes.spinner2}`]: {
    transformOrigin: '50% 66.6%',
  },
  [`& .${classes.spinner3}`]: {
    animationDuration: '5s',
    transformOrigin: '50% 50%',
  },
}));

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
    <StyledBackdrop {...props}>
      <svg width="100px" height="100px" viewBox="0 0 1000 1000">
        <circle cx="500" cy="570" r="80" className={classes.sun} />
        <circle cx="500" cy="570" r="200" className={classes.orbit} />
        <circle cx="500" cy="666" r="300" className={classes.orbit} />
        <circle cx="500" cy="500" r="470" className={classes.orbit} />
        <g className={clsx(classes.spinner, classes.spinner1)}>
          <circle cx="300" cy="570" r="40" />
        </g>
        <g className={clsx(classes.spinner, classes.spinner2)}>
          <circle cx="500" cy="366" r="40" />
        </g>
        <g className={clsx(classes.spinner, classes.spinner3)}>
          <circle cx="500" cy="30" r="40" />
        </g>
      </svg>
    </StyledBackdrop>
  );
};

export default LoadMask;
