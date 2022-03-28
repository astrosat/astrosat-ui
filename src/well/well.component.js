import React from 'react';

import { styled } from '@mui/material/styles';

import { Box, alpha } from '@mui/material';
import Alert from '@mui/material/Alert';

import ErrorIcon from '../icons/error-icon.component';
import { darken } from '@mui/material/styles';

import SuccessIcon from '../icons/correct-icon.component';

import WarningIcon from '../icons/warning-icon.component';

const PREFIX = 'well';

const classes = {
  root: `${PREFIX}-root`,
  message: `${PREFIX}-message`,
  filledError: `${PREFIX}-filledError`,
  filledSuccess: `${PREFIX}-filledSuccess`,
  filledInfo: `${PREFIX}-filledInfo`,
  outlinedInfo: `${PREFIX}-outlinedInfo`,
  standardError: `${PREFIX}-standardError`,
  standardSuccess: `${PREFIX}-standardSuccess`,
  standardInfo: `${PREFIX}-standardInfo`,
  icon: `${PREFIX}-icon`,
};

const StyledWarningIcon = styled(WarningIcon)(({ theme }) => ({
  [`& .${classes.root}`]: {
    padding: theme.spacing(2),
  },

  [`& .${classes.message}`]: {
    color: theme.palette.text.primary,
  },

  [`& .${classes.filledError}`]: {
    backgroundColor: alpha(theme.palette.error.main, 0.3),
    color: theme.palette.error.main,
  },

  [`& .${classes.filledSuccess}`]: {
    backgroundColor: alpha(theme.palette.success.main, 0.3),
    color: theme.palette.success.main,
  },

  [`& .${classes.filledInfo}`]: {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? darken(theme.palette.background.default, 0.3)
        : theme.palette.background.paper,
    color: theme.palette.info.main,
  },

  [`& .${classes.outlinedInfo}`]: {
    border: `0.0625rem solid ${theme.palette.text.primary}`,
  },

  [`& .${classes.standardError}`]: {
    backgroundColor: alpha(theme.palette.error.main, 0.3),
    border: `0.0625rem solid ${theme.palette.error.main}`,
  },

  [`& .${classes.standardSuccess}`]: {
    backgroundColor: alpha(theme.palette.success.main, 0.3),
    border: `0.0625rem solid ${theme.palette.success.main}`,
  },

  [`& .${classes.standardInfo}`]: {
    border: `0.0625rem solid ${theme.palette.text.primary}`,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? darken(theme.palette.background.default, 0.3)
        : theme.palette.background.paper,
  },

  [`& .${classes.icon}`]: {
    marginRight: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

/**
 * @param {import('@mui/lab').AlertProps} props
 * @param {React.Ref<HTMLDivElement>} ref
 */

const Well = ({ severity = 'info', ...rest }, ref) => {
  return (
    <Alert
      classes={classes}
      severity={severity}
      iconMapping={{
        error: <ErrorIcon />,
        success: <SuccessIcon />,
        info: <Box mr={3} />,
        warning: <StyledWarningIcon />,
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Well);
