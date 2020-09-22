import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox as MuiCheckbox } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    '& .MuiSvgIcon-root': {
      fill: `${theme.palette.background.default} !important`
    }
  },
  checked: {
    color: `${theme.palette.primary.main} !important`
  },
  disabled: {
    color: '#008000 !important'
  },
  transition: theme.transitions.create(
    ['background-color', 'box-shadow', 'border', 'opacity'],
    {
      duration: theme.transitions.duration.short
    }
  )
}));

const Checkbox = ({ name, label = '', disabled = false }, ref) => {
  const classes = styles({});
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          name={name}
          classes={classes}
          disabled={disabled}
          ref={ref}
        />
      }
      label={label}
    />
  );
};

export default React.forwardRef(Checkbox);
