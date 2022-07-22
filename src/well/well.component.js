import React from 'react';

import { Alert, Box } from '@mui/material';

import ErrorIcon from '../icons/error-icon.component';

import SuccessIcon from '../icons/correct-icon.component';

import WarningIcon from '../icons/warning-icon.component';

/**
 * @param {import('@mui/lab').AlertProps} props
 * @param {React.Ref<HTMLDivElement>} ref
 */

const Well = ({ severity = 'info', ...rest }, ref) => {
  return (
    <Alert
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
