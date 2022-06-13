import React, { useState } from 'react';

import { InputAdornment } from '@mui/material';

import { makeStyles, styled } from '@mui/styles';

import { default as IconButton } from '../icon-button/icon-button.component';
import { default as Input } from '../input/input.component';

import { EyeIcon, EyeSlashIcon } from '../icons';
import { baseTheme } from '../themes/palette';

const INPUT_TYPE = {
  text: 'text',
  password: 'password',
};

// const iconStyles = makeStyles({
//   root: {
//     /**
//      * @param {import('../input/input.component.js').InputProps} props
//      */
//     color: props => {
//       if (props.error) return baseTheme.palette.error.main;
//       if (props.valid) return baseTheme.palette.success.main;
//       return 'inherit';
//     },
//   },
// });

/**
 * @param {import('../input/input.component.js').InputProps & {visibilityToggleButtonLabel?: string}} props
 */
const PasswordInput = ({
  type = INPUT_TYPE.password,
  visibilityToggleButtonLabel = 'Password Visibility Toggle',
  ...rest
}) => {
  const [_type, setType] = useState(type);

  // const iconClasses = iconStyles({ type: _type, ...rest });
  // console.log('iconClasses', iconClasses);

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
              color: (props, theme) => {
                if (props.error) return theme.palette.error.main;
                if (props.valid) return theme.palette.success.main;
                return 'inherit';
              },
            }}
            // classes={iconClasses}
          />
        ) : (
          <EyeSlashIcon
            sx={{
              color: (props, theme) => {
                if (props.error) return theme.palette.error.main;
                if (props.valid) return theme.palette.success.main;
                return 'inherit';
              },
            }}
            // classes={iconClasses}
          />
        )}
      </IconButton>
    </InputAdornment>
  );

  return <Input type={_type} endAdornment={adornment} {...rest} />;
};

export default PasswordInput;
