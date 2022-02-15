import React from 'react';
import clsx from 'clsx';

import { darken, ToggleButton as MuiToggleButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const PREFIX = 'ToggleButton';
const classes = {
  root: `${PREFIX}-root`,
  selected: `${PREFIX}-selected`,
  disabled: `${PREFIX}-disabled`,
  sizeSmall: `${PREFIX}-sizeSmall`,
  sizeLarge: `${PREFIX}-sizeLarge`,
};
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexBasis: '100%',
    border: 'none',
    padding: '0.65em',
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.3),
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.3),
      opacity: 0.5,
    },
    '&$disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700,
    },
    '&$selected': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5,
      },
    },
    '&$sizeSmall': {
      padding: '0.57em',
      fontSize: theme.typography.pxToRem(14),
    },
    '&$sizeLarge': {
      padding: '0.73em',
      fontSize: theme.typography.pxToRem(22),
    },
  },
  [`&.${classes.selected}`]: {},
  [`&.${classes.disabled}`]: {},
  [`&.${classes.sizeSmall}`]: {},
  [`&.${classes.sizeLarge}`]: {},
}));

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: '100%',
    border: 'none',
    padding: '0.65em',
    color: theme.palette.common.white,
    backgroundColor: darken(theme.palette.secondary.main, 0.3),
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short,
      }
    ),
    '&:hover': {
      backgroundColor: darken(theme.palette.secondary.main, 0.3),
      opacity: 0.5,
    },
    '&$disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700,
    },
    '&$selected': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.5,
      },
    },
    '&$sizeSmall': {
      padding: '0.57em',
      fontSize: theme.typography.pxToRem(14),
    },
    '&$sizeLarge': {
      padding: '0.73em',
      fontSize: theme.typography.pxToRem(22),
    },
  },
  selected: {},
  disabled: {},
  sizeSmall: {},
  sizeLarge: {},
}));

/**
 * @param {import('@mui/lab').ToggleButtonProps} props
 */
const ToggleButton = ({ classes = {}, ...props }) => {
  const styles = useStyles({});
  const { root, selected, disabled, sizeSmall, sizeLarge, ...rest } = classes;

  const combinedStyles = {
    root: clsx(styles.root, root),
    selected: clsx(styles.selected, selected),
    disabled: clsx(styles.disabled, disabled),
    sizeSmall: clsx(styles.sizeSmall, sizeSmall),
    sizeLarge: clsx(styles.sizeLarge, sizeLarge),
    ...rest,
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
