import React, { useState } from 'react';

import { IconButton, InputAdornment, makeStyles } from '@material-ui/core';

import { default as Input } from '../input/input.component';

import { EyeIcon, EyeSlashIcon } from '../icons';

const INPUT_TYPE = {
  text: 'text',
  password: 'password'
};

const iconStyles = makeStyles(theme => ({
  root: {
    /**
     * @param {import('../input/input.component.js').InputProps} props
     */
    color: props => {
      if (props.error) return theme.palette.error.main;
      if (props.valid) return theme.palette.success.main;
      return 'inherit';
    }
  }
}));

/**
 * @param {import('../input/input.component.js').InputProps} props
 */
const PasswordInput = ({ type = INPUT_TYPE.password, ...rest }) => {
  const [_type, setType] = useState(type);

  const iconClasses = iconStyles({ type: _type, ...rest });

  const handleClick = () =>
    _type === INPUT_TYPE.password
      ? setType(INPUT_TYPE.text)
      : setType(INPUT_TYPE.password);

  const adornment = (
    <InputAdornment position="end">
      <IconButton onClick={handleClick}>
        {_type === INPUT_TYPE.text ? (
          <EyeIcon classes={iconClasses} />
        ) : (
          <EyeSlashIcon classes={iconClasses} />
        )}
      </IconButton>
    </InputAdornment>
  );

  return <Input type={_type} endAdornment={adornment} {...rest} />;
};

export default PasswordInput;
