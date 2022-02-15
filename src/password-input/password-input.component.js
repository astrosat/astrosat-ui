import React, { useState } from 'react';

import { styled } from '@mui/material/styles';

import { InputAdornment } from '@mui/material';

import { default as IconButton } from '../icon-button/icon-button.component';
import { default as Input } from '../input/input.component';

import { EyeIcon, EyeSlashIcon } from '../icons';

const PREFIX = 'PasswordInput';

const classes = {
  root: `${PREFIX}-root`,
};

const StyledInput = styled(Input)(({ theme }) => ({
  [`& .${classes.root}`]: {
    color: props => {
      console.log('PROPS: ', props);
      if (props.error) return theme.palette.error.main;
      if (props.valid) return theme.palette.success.main;
      return 'inherit';
    },
  },
}));

const INPUT_TYPE = {
  text: 'text',
  password: 'password',
};

const PasswordInput = ({
  type = INPUT_TYPE.password,
  visibilityToggleButtonLabel = 'Password Visibility Toggle',
  ...rest
}) => {
  const [_type, setType] = useState(type);

  console.log('ICON CLASSES: ', rest);

  const handleClick = () =>
    _type === INPUT_TYPE.password
      ? setType(INPUT_TYPE.text)
      : setType(INPUT_TYPE.password);

  const adornment = (
    <InputAdornment position="end">
      <IconButton
        onClick={handleClick}
        size="small"
        aria-label={visibilityToggleButtonLabel}
      >
        {_type === INPUT_TYPE.text ? (
          <EyeIcon className={classes.root} />
        ) : (
          <EyeSlashIcon className={classes.root} />
        )}
      </IconButton>
    </InputAdornment>
  );

  return <StyledInput type={_type} endAdornment={adornment} {...rest} />;
};

export default PasswordInput;
