import { createTheme, alpha } from '@mui/material/styles';
import { palette } from './palette';

const borderRadius = 5;
const spacing = factor => `${0.5 * factor}rem`;

/** @type {import('@mui/material').ThemeOptions} */
export const core = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
        color: 'primary',
      },
    },
    MuiButton: {
      styleOverrides: {
        textSecondary: {
          color: palette.palette.info.main,
          '&:hover': {
            backgroundColor: alpha(
              palette.palette.info.main,
              palette.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
        },
        containedSecondary: {
          backgroundColor: palette.palette.info.main,
          '&:hover': {
            backgroundColor: palette.palette.info.main,
            '@media (hover: none)': {
              backgroundColor: palette.palette.info.main,
            },
          },
        },
        outlinedSecondary: {
          color: palette.palette.info.main,
          borderColor: alpha(palette.palette.info.main, 0.5),
          '&:hover': {
            borderColor: palette.palette.info.main,
            backgroundColor: alpha(
              palette.palette.info.main,
              palette.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&$disabled': {
            borderColor: palette.palette.action.disabled,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9,
        },
        colorSecondary: {
          backgroundColor: palette.palette.info.main,
        },
        clickableColorSecondary: {
          '&:hover, &:focus': {
            backgroundColor: palette.palette.info.dark,
          },
        },
        outlinedSecondary: {
          borderColor: palette.palette.info.main,
          color: palette.palette.info.main,
        },
        deleteIconColorSecondary: {
          '&:hover': {
            color: palette.palette.info.dark,
          },
        },
        deleteIconOutlinedColorSecondary: {
          color: palette.palette.info.main,
          '&:hover': {
            color: palette.palette.info.dark,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.palette.background.default,
          borderRadius: 10,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: `${spacing(5)} ${spacing(3)} ${spacing(2)}`,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          padding: `${spacing(2)} ${spacing(3)} ${spacing(4)}`,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            backgroundColor: alpha(
              palette.palette.action.active,
              palette.palette.action.hoverOpacity
            ),
          },
        },
        colorPrimary: {
          '&:focus': {
            backgroundColor: alpha(
              palette.palette.primary.main,
              palette.palette.action.hoverOpacity
            ),
          },
        },
        colorSecondary: {
          color: palette.palette.info.main,
          '&:hover': {
            backgroundColor: alpha(
              palette.palette.info.main,
              palette.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&:focus': {
            backgroundColor: alpha(
              palette.palette.info.main,
              palette.palette.action.hoverOpacity
            ),
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        variant: 'body1',
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          marginLeft: 0,
          '& .Mui-disabled': {
            opacity: palette.palette.action.disabledOpacity,
          },
          '&$disabled': {
            cursor: 'not-allowed',
          },
        },
        label: {
          marginLeft: spacing(2),
        },
        labelPlacementBottom: {
          '& $label': {
            margin: 0,
            marginTop: spacing(1),
          },
        },
        labelPlacementStart: {
          '& $label': {
            margin: 0,
            marginRight: spacing(2),
          },
        },
        labelPlacementTop: {
          '& $label': {
            margin: 0,
            marginBottom: spacing(1),
          },
        },
        disabled: {},
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontStyle: 'italic',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 1,
          '&.Mui-error': {
            color: palette.palette.text.secondary,
            '&.Mui-focused': {
              color: palette.palette.primary.main,
            },
          },
        },
        formControl: {
          transform: 'translate(16px, 32px) scale(1)',
        },
        shrink: {
          transform: 'translate(0, 1.5px) scale(0.75)',
        },
        error: {},
        focused: {},
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'primary',
        textColor: 'primary',
      },
      styleOverrides: {
        flexContainer: {
          borderBottom: `1px solid ${palette.palette.divider}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // FIXME: I've change the likes of &$selected to &.Mui-selected, but
          // I don't know what to change these to.
          [`&$textColorInherit,
            &$textColorPrimary,
            &$textColorSecondary`]: {
            opacity: 1,
          },
        },
        textColorInherit: {},
        textColorPrimary: {},
        textColorSecondary: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: palette.palette.primary.main,
        },
        tooltip: {
          color: palette.palette.secondary.main,
          backgroundColor: palette.palette.primary.main,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          html: { fontSize: '1rem' },
          body: {
            fontSize: '1rem',
          },
        },
      },
    },
  },
  palette: palette.palette,
  shape: {
    borderRadius,
  },
  spacing,
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    h1: {
      fontSize: '26px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '18px',
      fontWeight: 600,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '14px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '12px',
      fontWeight: 600,
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
    button: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: 'normal',
      textTransform: 'none',
    },
  },
});
