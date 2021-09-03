import React from 'react';
import clsx from 'clsx';
import { ToggleButton as MuiToggleButton } from '@material-ui/lab';
import { darken, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.3),
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
    },
    '&$disabled': {
      cursor: 'not-allowed',
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700
    },
    '&$selected': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main
    }
  },
  selected: {},
  disabled: {}
}));

/**
 * @param {import('@material-ui/lab').ToggleButtonProps} props
 */
const ToggleButton = ({ children, classes = {}, ...props }) => {
  const styles = useStyles({});
  const { root, selected, disabled, ...rest } = classes;

  const combinedStyles = {
    root: clsx(styles.root, root),
    selected: clsx(styles.selected, selected),
    disabled: clsx(styles.disabled, disabled),
    ...rest
  };

  return (
    <MuiToggleButton
      disableRipple
      disableFocusRipple
      classes={combinedStyles}
      {...props}
    >
      {children}
    </MuiToggleButton>
  );
};

export default ToggleButton;
