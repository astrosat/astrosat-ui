import React from 'react';

import { IconButton, InputAdornment, makeStyles } from '@material-ui/core';

import { default as Input } from '../input/input.component';

import { EyeIcon, EyeSlashIcon } from '../icons';

const INPUT = {
  text: 'text',
  password: 'password'
};

/**
 * @param {import('@material-ui/core').Theme} theme
 * @typedef {import('../input/input.component.js').InputProps} InputProps
 */
const iconStyles = makeStyles(theme => ({
  root: {
    /**
     * @param {InputProps} props
     */
    color: props => {
      if (props.error) return theme.palette.error.main;
      if (props.valid) return theme.palette.success.main;
      return;
    }
  }
}));

const iconButtonStyles = makeStyles(() => ({
  root: {
    padding: '0'
  }
}));

/**
 * @param {InputProps} props
 */
const PasswordInput = props => {
  const [isVisible, setIsVisible] = React.useState(false);
  const onClick = () => setIsVisible(!isVisible);

  const iconClasses = iconStyles(props);
  const iconButtonClasses = iconButtonStyles(props);

  const adornment = (
    <InputAdornment onClick={onClick} position="end">
      <IconButton classes={iconButtonClasses}>
        {isVisible ? (
          <EyeIcon classes={iconClasses} />
        ) : (
          <EyeSlashIcon classes={iconClasses} />
        )}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Input
      type={isVisible ? INPUT.text : INPUT.password}
      endAdornment={adornment}
      {...props}
    />
  );
};

export default PasswordInput;
