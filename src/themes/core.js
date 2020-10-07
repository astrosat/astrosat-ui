import { fade } from '@material-ui/core';
import { palette } from './palette';

/** @type {import('@material-ui/core').ThemeOptions} */
export const core = {
  overrides: {
    MuiButton: {
      textSecondary: {
        color: palette.info.main,
        '&:hover': {
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      containedSecondary: {
        backgroundColor: palette.info.main,
        '&:hover': {
          backgroundColor: palette.info.main,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: palette.info.main
          }
        }
      },
      outlinedSecondary: {
        color: palette.info.main,
        borderColor: fade(palette.info.main, 0.5),
        '&:hover': {
          borderColor: palette.info.main,
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&$disabled': {
          borderColor: palette.action.disabled
        }
      }
    },
    MuiLink: {
      root: {
        fontWeight: 600
      }
    },
    MuiCssBaseline: {
      '@global': {
        html: { fontSize: '1rem' },
        body: {
          fontSize: '1rem'
        }
      }
    }
  },
  palette,
  props: {
    MuiButton: {
      disableRipple: true
    },
    MuiCheckbox: {
      disableRipple: true
    },
    MuiRadio: {
      disableRipple: true
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    button: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 'normal',
      textTransform: 'none'
    },
    h4: {
      color: palette.secondary.main,
      fontSize: '1.5rem',
      fontWeight: 'bold'
    }
  }
};
