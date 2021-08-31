import React from 'react';

import { makeStyles } from '@material-ui/core';

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButton
} from '@material-ui/lab';

const BUTTON_FIXED_WIDTH = 136;

const useGroupStyles = makeStyles(theme => ({
  buttonWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: theme.typography.pxToRem(BUTTON_FIXED_WIDTH * 2),
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden'
  }
}));

const useButtonStyles = makeStyles(theme => ({
  root: {
    minWidth: theme.typography.pxToRem(BUTTON_FIXED_WIDTH),
    maxWidth: theme.typography.pxToRem(BUTTON_FIXED_WIDTH),
    padding: theme.spacing(1),
    margin: '0',
    borderRadius: '0',
    cursor: 'pointer',
    wordBreak: 'break-all',
    color: theme.palette.common.white,
    backgroundColor: '#171819',
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short
      }
    ),
    '&:hover': {
      opacity: 0.5
    },
    '&:last-child': {
      /** @param {{isOdd: boolean}} props */
      borderBottomRightRadius: ({ isOdd }) =>
        isOdd ? `${theme.shape.borderRadius}px` : '0'
    },
    '&:nth-last-child(2)': {
      /** @param {{isOdd: boolean}} props */
      borderBottomRightRadius: ({ isOdd }) =>
        isOdd ? `${theme.shape.borderRadius}px` : '0'
    }
  },
  selected: {
    cursor: 'not-allowed',
    color: `${theme.palette.secondary.main} !important`,
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  disabled: {
    backgroundColor: theme.palette.grey['300'],
    color: `${theme.palette.grey.A700} !important`
  }
}));

/**
 * @param {{
 *  buttons: { textContent: string, props: object }[],
 *  rest: import('@material-ui/lab').ToggleButtonGroupProps
 * }} props
 */
const ToggleButtonGroup = ({ buttons, ...rest }) => {
  const isOdd = buttons.length % 2 !== 0;

  const groupStyles = useGroupStyles({});
  const buttonStyles = useButtonStyles({ isOdd });
  return (
    <MuiToggleButtonGroup exclusive {...rest}>
      <div className={groupStyles.buttonWrapper}>
        {buttons.map(({ textContent, props }) => {
          return (
            <ToggleButton
              disableRipple
              disableFocusRipple
              classes={buttonStyles}
              {...props}
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
