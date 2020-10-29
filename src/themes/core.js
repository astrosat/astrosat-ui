import { createMuiTheme, fade } from '@material-ui/core';

import { palette } from './palette';

/** @type {import('@material-ui/core').ThemeOptions} */
export const core = createMuiTheme({
  overrides: {
    MuiButton: {
      textSecondary: {
        color: palette.info.main,
        '&:hover': {
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      containedSecondary: {
        backgroundColor: palette.info.main,
        '&:hover': {
          backgroundColor: palette.info.main,
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
    MuiIconButton: {
      root: {
        '&:focus': {
          backgroundColor: fade(
            palette.action.active,
            palette.action.hoverOpacity
          )
        }
      },
      colorPrimary: {
        '&:focus': {
          backgroundColor: fade(
            palette.primary.main,
            palette.action.hoverOpacity
          )
        }
      },
      colorSecondary: {
        color: palette.info.main,
        '&:hover': {
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        },
        '&:focus': {
          backgroundColor: fade(palette.info.main, palette.action.hoverOpacity)
        }
      }
    },
    MuiLink: {
      root: {
        fontWeight: 600
      }
    },
    MuiFormHelperText: {
      root: {
        fontStyle: 'italic'
      }
    },
    MuiInputLabel: {
      root: {
        zIndex: 1,
        '&$error': {
          color: palette.text.secondary,
          '&$focused': {
            color: palette.primary.main
          }
        }
      },
      formControl: {
        transform: 'translate(16px, 32px) scale(1)'
      },
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.75)'
      },
      error: {},
      focused: {}
    },
    MuiFormLabel: {
      root: {
        fontSize: '14px'
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
    MuiButtonBase: {
      disableRipple: true
    },
    MuiFormControl: {
      fullWidth: true
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
});
