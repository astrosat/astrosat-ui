import React from 'react';

import { InputAdornment, makeStyles } from '@material-ui/core';

import { default as Input } from '../input/input.component';

import { EyeIcon, EyeSlashIcon } from '../icons';

/**
 * @typedef {import('@material-ui/core/Input/Input').InputProps & {valid?: boolean}} InputProps
 */

/**
 * @param {import('@material-ui/core').Theme} theme
 * @param {InputProps} props
 */
const iconStyles = makeStyles(theme => ({
  root: {
    height: theme.typography.pxToRem(24),
    width: theme.typography.pxToRem(24),
    cursor: 'pointer',
    color: props => {
      if (props.error) return theme.palette.error.main;
      if (props.valid) return theme.palette.success.main;
      return;
    }
  }
}));

/**
 * @param { InputProps } props
 */
const PasswordInput = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const onClick = () => setIsVisible(!isVisible);

  const INPUT = {
    text: 'text',
    password: 'password'
  };

  const iconClasses = iconStyles(props);

  const adornment = (
    <InputAdornment onClick={onClick} position="end">
      {isVisible ? (
        <EyeIcon classes={iconClasses} />
      ) : (
        <EyeSlashIcon classes={iconClasses} />
      )}
    </InputAdornment>
  );

  return (
    <Input
      type={isVisible ? INPUT.text : INPUT.password}
      endAdornment={!props.disabled && adornment}
      {...props}
    />
  );
};

export default PasswordInput;
