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
    },
    MuiInput: {
      disableUnderline: true
    },
    MuiLink: {
      variant: 'body1'
    }
  },
  shape: {
    borderRadius: 5
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: '26px',
      fontWeight: 700
    },
    h2: {
      fontSize: '18px',
      fontWeight: 600
    },
    h3: {
      fontSize: '16px',
      fontWeight: 600
    },
    h4: {
      fontSize: '14px',
      fontWeight: 600
    },
    h5: {
      fontSize: '12px',
      fontWeight: 600
    },
    body1: {
      fontSize: '14px'
    },
    body2: {
      fontSize: '12px'
    },
    button: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 'normal',
      textTransform: 'none'
    }
  }
};
