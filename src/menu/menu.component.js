import React from 'react';

import { Menu as MuiMenu } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& li': {
      padding: '0.3em'
    },
    '& li:nth-child(2)': {
      borderBottom: `1px solid ${theme.palette.text.secondary}`,
      borderTop: `1px solid ${theme.palette.text.secondary}`
    }
  },
  paper: {
    width: '100%'
  }
}));

/**
 * @param {import('@material-ui/core').MenuProps} props
 * @param {React.Ref<any>} ref
 */

const Menu = (props, ref) => {
  const classes = useStyles({});
  return (
    <div>
      <MuiMenu classes={classes} {...props} ref={ref} />
    </div>
  );
};

export default React.forwardRef(Menu);
