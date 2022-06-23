import React, { useState } from 'react';

import { InputAdornment } from '@mui/material';

import { default as IconButton } from '../icon-button/icon-button.component';
import { default as Input } from '../input/input.component';

import { EyeIcon, EyeSlashIcon } from '../icons';

const INPUT_TYPE = {
  text: 'text',
  password: 'password',
};

const getColors = props => theme => {
  if (props.valid) {
    return theme.palette.success.main;
  } else if (props.error) {
    return theme.palette.error.main;
  } else {
    return 'inherit';
  }
};

/**
 * @param {import('../input/input.component.js').InputProps & {visibilityToggleButtonLabel?: string}} props
 */
const PasswordInput = ({
  type = INPUT_TYPE.password,
  visibilityToggleButtonLabel = 'Password Visibility Toggle',
  ...rest
}) => {
  const [_type, setType] = useState(type);

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
          <EyeIcon
            sx={{
              '&': {
                color: getColors({ type: _type, ...rest }),
              },
            }}
          />
        ) : (
          <EyeSlashIcon
            sx={{
              '&': {
                color: getColors({ type: _type, ...rest }),
              },
            }}
          />
        )}
      </IconButton>
    </InputAdornment>
  );

  return <Input type={_type} endAdornment={adornment} {...rest} />;
};

export default PasswordInput;
