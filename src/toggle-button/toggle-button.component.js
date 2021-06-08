import React from 'react';
import { ToggleButton as MuiToggleButton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0.65em 4em',
    color: theme.palette.common.white,
    backgroundColor: '#171819',
    '&:hover': {
      backgroundColor: '#171819'
    }
  },
  selected: {
    color: `${theme.palette.common.black} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`
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
