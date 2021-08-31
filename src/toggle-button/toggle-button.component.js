import React from 'react';
import { ToggleButton as MuiToggleButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(1.25),
    cursor: 'pointer',
    color: theme.palette.common.white,
    backgroundColor: '#171819',
    fontSize: theme.typography.pxToRem(14),
    fontWeight: 400,
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    '&:hover': {
      opacity: 0.5
    }
  },
  selected: {
    cursor: 'not-allowed',
    color: `${theme.palette.secondary.main} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  disabled: {
    backgroundColor: theme.palette.grey['300'],
    color: `${theme.palette.grey.A700} !important`
  }
}));

const ToggleButton = ({ children, ...props }) => {
  const styles = useStyles({});
  return (
    <MuiToggleButton
      disableRipple
      disableFocusRipple
      classes={styles}
      {...props}
    >
      {children}
    </MuiToggleButton>
  );
};

export default ToggleButton;
