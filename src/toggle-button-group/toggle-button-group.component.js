import React from 'react';
import ToggleButton from '../toggle-button/toggle-button.component';

import { makeStyles } from '@material-ui/core';

import clsx from 'clsx';

import { ToggleButtonGroup as MuiToggleButtonGroup } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {},
  groupedHorizontal: {},
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    border: '1px solid red'
  },
  button: {
    margin: '0 !important',
    borderRadius: '0 !important'
  },
  isOdd: {
    '&:last-child': {
      borderBottomRightRadius: '5px !important',
      borderBottomLeftRadius: '5px !important'
    },
    '&:nth-last-child(2)': {
      borderBottomRightRadius: '5px !important'
    },
    '&:nth-last-child(3)': {
      borderBottomLeftRadius: '5px !important'
    }
  }
}));

const ToggleButtonGroup = ({ buttons, ...rest }) => {
  const styles = useStyles({ n: buttons.length });
  const isOdd = buttons.length % 2 !== 0;
  return (
    <MuiToggleButtonGroup classes={styles} exclusive {...rest}>
      <div className={styles.buttonContainer}>
        {buttons.map(({ textContent, props }) => {
          return (
            <ToggleButton
              {...props}
              className={clsx(styles.button, isOdd && styles.isOdd)}
            >
              {textContent}
            </ToggleButton>
          );
        })}
      </div>
    </MuiToggleButtonGroup>
  );
};

export default ToggleButtonGroup;
