import { createTheme, alpha } from '@mui/material/styles';
import { baseTheme } from './palette';

const borderRadius = 5;
const spacing = factor => `${0.5 * factor}rem`;

const core = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      // styleOverrides: {
      //   root: {
      //     '& .Mui-disabled': {
      //       cursor: 'not-allowed',
      //       pointerEvents: 'auto',
      //     },
      //   },
      // },
    },
    // MuiToggleButton: {
    //   styleOverrides: {
    //     root: {
    //       '& .Mui-disabled': {
    //         cursor: 'not-allowed',
    //         pointerEvents: 'auto',
    //       },
    //     },
    //   },
    // },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
        color: 'primary',
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          color: baseTheme.palette.primary.main,
        },
        textSecondary: {
          color: baseTheme.palette.info.main,
          '&:hover': {
            backgroundColor: alpha(
              baseTheme.palette.info.main,
              baseTheme.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
        },
        containedSecondary: {
          backgroundColor: baseTheme.palette.info.main,
          '&:hover': {
            backgroundColor: baseTheme.palette.info.main,
            '@media (hover: none)': {
              backgroundColor: baseTheme.palette.info.main,
            },
          },
        },
        outlinedSecondary: {
          color: baseTheme.palette.info.main,
          borderColor: alpha(baseTheme.palette.info.main, 0.5),
          '&:hover': {
            borderColor: baseTheme.palette.info.main,
            backgroundColor: alpha(
              baseTheme.palette.info.main,
              baseTheme.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&.Mui-disabled': {
            borderColor: baseTheme.palette.action.disabled,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 'unset',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9,
          // backgroundColor: '#e0e0e0',
        },
        colorPrimary: {
          backgroundColor: baseTheme.palette.primary.main,
        },
        colorSecondary: {
          backgroundColor: baseTheme.palette.info.main,
          color: '#fff',
        },
        clickableColorSecondary: {
          '&:hover, &:focus': {
            backgroundColor: baseTheme.palette.info.dark,
          },
        },
        outlinedSecondary: {
          borderColor: baseTheme.palette.info.main,
          color: baseTheme.palette.info.main,
        },
        deleteIconColorSecondary: {
          '&:hover': {
            // color: '#fff',
            color: baseTheme.palette.info.dark,
          },
          '&.MuiChip-deleteIcon': {
            color: '#fff',
          },
        },
        deleteIconOutlinedColorSecondary: {
          color: baseTheme.palette.info.main,
          '&:hover': {
            color: baseTheme.palette.info.dark,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: baseTheme.palette.background.default,
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
              baseTheme.palette.action.active,
              baseTheme.palette.action.hoverOpacity
            ),
          },
        },
        colorPrimary: {
          '&:focus': {
            backgroundColor: alpha(
              baseTheme.palette.primary.main,
              baseTheme.palette.action.hoverOpacity
            ),
          },
        },
        colorSecondary: {
          color: baseTheme.palette.info.main,
          '&:hover': {
            backgroundColor: alpha(
              baseTheme.palette.info.main,
              baseTheme.palette.action.hoverOpacity
            ),
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
          '&:focus': {
            backgroundColor: alpha(
              baseTheme.palette.info.main,
              baseTheme.palette.action.hoverOpacity
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
        variant: 'standard',
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          marginLeft: 0,
          '&.Mui-disabled': {
            opacity: baseTheme.palette.action.disabledOpacity,
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
          '&$disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
        },
        label: {
          marginLeft: spacing(1),
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
            color: baseTheme.palette.text.secondary,
            '&.Mui-focused': {
              color: baseTheme.palette.primary.main,
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
    MuiSelect: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'primary',
        textColor: 'primary',
      },
      styleOverrides: {
        flexContainer: {
          borderBottom: `1px solid ${baseTheme.palette.divider}`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // FIXME: I've change the likes of &$selected to &.Mui-selected, but
          // I don't know what to change these to.
          [`&.MuiTab-textColorInherit,
            &.MuiTab-textColorPrimary,
            &.MuiTab-textColorSecondary`]: {
            opacity: 1,
          },
          // [`&$textColorInherit,
          //   &$textColorPrimary,
          //   &$textColorSecondary`]: {
          //   opacity: 1,
          // },
        },
        textColorInherit: {},
        textColorPrimary: {},
        textColorSecondary: {},
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: baseTheme.palette.primary.main,
        },
        tooltip: {
          color: baseTheme.palette.secondary.main,
          backgroundColor: baseTheme.palette.primary.main,
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
};

export const coreTheme = createTheme(baseTheme, core);

console.log('CORE THEME: ', baseTheme);
