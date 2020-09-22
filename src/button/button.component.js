import { Button as MuiButton } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = makeStyles(theme => ({
  root: {
    padding: '0.75rem 4.625rem',
    transition: theme.transitions.create(
      ['background-color', 'box-shadow', 'border', 'opacity'],
      {
        duration: theme.transitions.duration.short
      }
    )
  },
  disabled: {},
  textSecondary: {
    color: theme.palette.info.main,
    '&:hover': {
      backgroundColor: fade(
        theme.palette.info.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  contained: {
    color: theme.palette.secondary.main,
    '&:hover': {
      opacity: 0.5
    },
    '&$disabled': {
      backgroundColor: theme.palette.grey['300'],
      color: theme.palette.grey.A700
    }
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  containedSecondary: {
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.info.main
      }
    }
  },
  outlinedSecondary: {
    color: theme.palette.info.main,
    borderColor: fade(theme.palette.info.main, 0.5),
    '&:hover': {
      borderColor: theme.palette.info.main,
      backgroundColor: fade(
        theme.palette.info.main,
        theme.palette.action.hoverOpacity
      ),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      borderColor: theme.palette.action.disabled
    }
  },
  textSizeSmall: {
    padding: '0.5rem 3.5rem',
    fontSize: theme.typography.pxToRem(14)
  },
  /* Styles applied to the root element if `size="large"` and `variant="text"`. */
  textSizeLarge: {
    padding: '0.9375rem 5.8125rem',
    fontSize: theme.typography.pxToRem(22)
  },
  /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
  outlinedSizeSmall: {
    padding: '0.5rem 3.5rem',
    fontSize: theme.typography.pxToRem(14)
  },
  /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
  outlinedSizeLarge: {
    padding: '0.9375rem 5.8125rem',
    fontSize: theme.typography.pxToRem(22)
  },
  /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
  containedSizeSmall: {
    padding: '0.5rem 3.5rem',
    fontSize: theme.typography.pxToRem(14)
  },
  /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
  containedSizeLarge: {
    padding: '0.9375rem 5.8125rem',
    fontSize: theme.typography.pxToRem(22)
  }
}));

/**
 * @param { import('@material-ui/core/Button/Button').ButtonProps} props
 * @param { React.Ref<HTMLButtonElement> } ref
 */
const Button = ({ variant = 'contained', color = 'primary', ...rest }, ref) => {
  const classes = styles({});
  const component = (
    <MuiButton
      ref={ref}
      classes={classes}
      variant={variant}
      color={color}
      {...rest}
    />
  );
  return rest.disabled ? (
    <span style={{ cursor: 'not-allowed' }}>{component}</span>
  ) : (
    component
  );
};

export default React.forwardRef(Button);
