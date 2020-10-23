import React from 'react';
import { InputLabel as MuiInputLabel, makeStyles } from '@material-ui/core';

const inputLabelStyles = makeStyles({
  shrink: {},
  filled: {
    transform: 'translate(0, 33px) scale(1)',
    '&$shrink': {
      transform: 'translate(0, 0) scale(0.75)',
      '&$marginDense': {
        transform: 'translate(12px, 7px) scale(0.75)'
      }
    }
  }
});

/**
 * @param {import('@material-ui/core').InputLabelProps} props
 */
const InputLabel = props => {
  const inputLabelClasses = inputLabelStyles(props);
  return <MuiInputLabel classes={inputLabelClasses} {...props} />;
};

export default InputLabel;

// 250, 41, 276, 245, 526, 286
