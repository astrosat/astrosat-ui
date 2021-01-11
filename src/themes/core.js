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
    MuiDialogActions: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
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
    MuiFormControlLabel: {
      root: {
        margin: 0,
        marginLeft: 0,
        minHeight: '1.4375rem',
        '& .Mui-disabled': {
          opacity: palette.action.disabledOpacity
        },
        '&$disabled': {
          cursor: 'not-allowed'
        }
      },
      disabled: {}
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
    MuiTooltip: {
      arrow: {
        color: palette.primary.main
      },
      tooltip: {
        color: palette.secondary.main,
        backgroundColor: palette.primary.main
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
    MuiButtonGroup: {
      variant: 'contained',
      color: 'primary'
    },
    MuiLink: {
      variant: 'body1'
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
});
