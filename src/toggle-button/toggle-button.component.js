import React from 'react';
import clsx from 'clsx';
import { ToggleButton as MuiToggleButton } from '@material-ui/lab';
import { darken, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: 'none',
    padding: '0.65em 4em',
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.3),
    minWidth: '64px',
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.3),
      opacity: 0.5
    },
    '&$disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700
    },
    '&$selected': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5
      }
    },
    '&$sizeSmall': {
      fontSize: theme.typography.pxToRem(14)
    },
    '&$sizeLarge': {
      fontSize: theme.typography.pxToRem(22)
    }
  },
  selected: {},
  disabled: {},
  sizeSmall: {},
  sizeLarge: {}
}));

/**
 * @param {import('@material-ui/lab').ToggleButtonProps} props
 */
const ToggleButton = ({ classes = {}, ...props }) => {
  const styles = useStyles({});
  const { root, selected, disabled, ...rest } = classes;

  const combinedStyles = {
    ...styles,
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
    />
  );
};

export default ToggleButton;
