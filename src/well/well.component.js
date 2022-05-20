import React from 'react';

import { Alert, Box, alpha } from '@mui/material';

import { darken } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import ErrorIcon from '../icons/error-icon.component';

import SuccessIcon from '../icons/correct-icon.component';

import WarningIcon from '../icons/warning-icon.component';

const AstrosatAlert = ({ severity = 'info', ...rest }, ref) => {
  return (
    <Alert
      sx={{
        root: {
          padding: theme => theme.spacing(2),
        },
        message: {
          color: theme => theme.palette.text.primary,
        },
        filledError: {
          backgroundColor: theme => alpha(theme.palette.error.main, 0.3),
          color: theme => theme.palette.error.main,
        },
        filledSuccess: {
          backgroundColor: theme => alpha(theme.palette.success.main, 0.3),
          color: theme => theme.palette.success.main,
        },
        filledInfo: {
          backgroundColor: theme =>
            theme.palette.mode === 'dark'
              ? darken(theme.palette.background.default, 0.3)
              : theme.palette.background.paper,
          color: theme => theme.palette.info.main,
        },
        outlinedInfo: {
          border: theme => `0.0625rem solid ${theme.palette.text.primary}`,
        },
        standardError: {
          backgroundColor: theme => alpha(theme.palette.error.main, 0.3),
          border: theme => `0.0625rem solid ${theme.palette.error.main}`,
        },
        standardSuccess: {
          backgroundColor: theme => alpha(theme.palette.success.main, 0.3),
          border: theme => `0.0625rem solid ${theme.palette.success.main}`,
        },
        standardInfo: {
          border: theme => `0.0625rem solid ${theme.palette.text.primary}`,
          backgroundColor: theme =>
            theme.palette.mode === 'dark'
              ? darken(theme.palette.background.default, 0.3)
              : theme.palette.background.paper,
        },
        icon: {
          marginRight: theme => theme.spacing(4),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    />
  );
};
// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(2),
//   },
//   message: {
//     color: theme.palette.text.primary,
//   },
//   filledError: {
//     backgroundColor: alpha(theme.palette.error.main, 0.3),
//     color: theme.palette.error.main,
//   },
//   filledSuccess: {
//     backgroundColor: alpha(theme.palette.success.main, 0.3),
//     color: theme.palette.success.main,
//   },
//   filledInfo: {
//     backgroundColor:
//       theme.palette.mode === 'dark'
//         ? darken(theme.palette.background.default, 0.3)
//         : theme.palette.background.paper,
//     color: theme.palette.info.main,
//   },
//   outlinedInfo: {
//     border: `0.0625rem solid ${theme.palette.text.primary}`,
//   },
//   standardError: {
//     backgroundColor: alpha(theme.palette.error.main, 0.3),
//     border: `0.0625rem solid ${theme.palette.error.main}`,
//   },
//   standardSuccess: {
//     backgroundColor: alpha(theme.palette.success.main, 0.3),
//     border: `0.0625rem solid ${theme.palette.success.main}`,
//   },
//   standardInfo: {
//     border: `0.0625rem solid ${theme.palette.text.primary}`,
//     backgroundColor:
//       theme.palette.mode === 'dark'
//         ? darken(theme.palette.background.default, 0.3)
//         : theme.palette.background.paper,
//   },
//   icon: {
//     marginRight: theme.spacing(4),
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// }));

/**
 * @param {import('@mui/lab').AlertProps} props
 * @param {React.Ref<HTMLDivElement>} ref
 */

const Well = ({ severity = 'info', ...rest }, ref) => {
  // const classes = useStyles({});
  return (
    <AstrosatAlert
      // classes={classes}
      severity={severity}
      iconMapping={{
        error: <ErrorIcon />,
        success: <SuccessIcon />,
        info: <Box mr={3} />,
        warning: <WarningIcon />,
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Well);
