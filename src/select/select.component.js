import React from 'react';

import { Select as MuiSelect } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2.2),
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '&:focus': {
      backgroundColor: theme.palette.background.paper
    }
  },
  icon: {
    color: theme.palette.secondary.main,
    transform: 'rotate(-90deg)',
    marginRight: theme.spacing(1)
  },
  iconOpen: {
    transform: 'rotate(0deg)'
  },
  disabled: {
    backgroundColor: theme.palette.grey[300],
    '&:hover': {
      cursor: 'not-allowed'
    },
    '&:active': {
      border: '2px solid black'
    }
  }
}));
const menuStyles = makeStyles({
  paper: {
    marginTop: '2.9em'
  },
  list: {
    marginLeft: '0.5em',
    marginRight: '0.5em',
    '& li:active': {
      border: `2px solid black`
    }
  }
});
/**
 * @param {import('@material-ui/core').SelectProps} props
 * @param {React.Ref<any>} ref
 */

const Select = (
  { MenuProps, fullWidth = true, disableUnderline = true, ...rest },
  ref
) => {
  const classes = useStyle({
    fullWidth,
    disableUnderline,
    MenuProps,
    ...rest
  });
  const menuClasses = menuStyles({
    fullWidth,
    disableUnderline,
    MenuProps,
    ...rest
  });

  return (
    <MuiSelect
      classes={classes}
      fullWidth={fullWidth}
      disableUnderline={disableUnderline}
      MenuProps={{ classes: menuClasses, ...MenuProps }}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Select);
