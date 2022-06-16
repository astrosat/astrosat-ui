import { createTheme, alpha } from '@mui/material/styles';
import { baseTheme } from './palette';

const spacing = factor => `${0.5 * factor}rem`;

const core = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: baseTheme.spacing(2),
        },
        standard: {
          border: `0.0625rem solid`,
        },
        icon: {
          marginRight: baseTheme.spacing(4),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        groupedContainedInherit: {
          backgroundColor: baseTheme.palette.action.disabledBackground,
          '&:hover': {
            backgroundColor: baseTheme.palette.action.disabledBackground,
            opacity: 0.5,
          },
        },
        groupedOutlined: {
          backgroundColor: 'transparent',
          border: '0.0625rem solid rgba(246, 190, 0, .5)',
          color: baseTheme.palette.primary.main,
          '&:hover': {
            borderColor: baseTheme.palette.primary.main,
            backgroundColor: alpha(
              baseTheme.palette.primary.main,
              baseTheme.palette.action.hoverOpacity
            ),
          },
        },
        groupedText: {
          backgroundColor: 'transparent',
          color: baseTheme.palette.primary.main,
          border: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: alpha(
              baseTheme.palette.primary.main,
              baseTheme.palette.action.hoverOpacity
            ),
          },
        },
        groupedContainedSecondary: {
          backgroundColor: baseTheme.palette.info.main,
          '&:hover': {
            backgroundColor: baseTheme.palette.info.main,
            opacity: 0.5,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: baseTheme.palette.secondary.main,
        },
        sizeSmall: {
          fontSize: baseTheme.typography.pxToRem(14),
        },
        sizeLarge: {
          fontSize: baseTheme.typography.pxToRem(22),
        },
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
            opacity: 0.5,
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
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 9,
        },
        label: { paddingTop: '0.125rem' },
        colorPrimary: {
          backgroundColor: baseTheme.palette.primary.main,
        },
        colorSecondary: {
          color: baseTheme.palette.common.white,
          backgroundColor: baseTheme.palette.info.main,
          '&.MuiChip-filled': {
            '.MuiChip-deleteIcon': {
              color: baseTheme.palette.common.white,
              opacity: 0.7,
            },
          },
        },
        clickableColorSecondary: {
          '&:hover, &:focus': {
            backgroundColor: baseTheme.palette.info.dark,
          },
        },
        outlinedPrimary: {
          color: baseTheme.palette.primary.main,
          borderColor: baseTheme.palette.primary.main,
        },
        outlinedSecondary: {
          borderColor: baseTheme.palette.info.main,
          color: baseTheme.palette.info.main,
        },
        deleteIconColorSecondary: {
          '&:hover': {
            color: baseTheme.palette.info.dark,
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
          backgroundColor: baseTheme.palette.secondary.main,
          borderRadius: 10,
        },
        paperFullScreen: {
          borderRadius: 0,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: '2.5rem !important',
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
    MuiDialogContentText: {
      styleOverrides: {
        root: { paddingBottom: `${spacing(2)}` },
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
        edgeStart: {
          padding: '0.188rem',
          marginLeft: 0,
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
          borderBottom: `0.0625em solid ${baseTheme.palette.primary.main}`,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
            borderBottomColor: 'transparent',
          },
          '&:visited': {
            color: baseTheme.palette.primary.main,
          },
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
          '&.Mui-disabled': {
            opacity: baseTheme.palette.action.disabledOpacity,
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
          '& input:disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
          '&.MuiFormControlLabel-disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
          },
        },

        label: {
          marginLeft: spacing(2),
        },

        labelPlacementBottom: {
          '& .MuiFormControlLabel-label': {
            marginBottom: 0,
            marginTop: spacing(1),
            marginLeft: spacing(4),
            marginRight: spacing(4),
          },
        },
        labelPlacementStart: {
          '& .MuiFormControlLabel-label': {
            margin: 0,
            marginRight: spacing(2),
          },
        },
        labelPlacementTop: {
          '& .MuiFormControlLabel-label': {
            marginTop: 0,
            marginBottom: spacing(1),
            marginLeft: spacing(1),
            marginRight: spacing(1),
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
    MuiTabs: {
      defaultProps: {
        indicatorColor: 'primary',
        textColor: 'primary',
      },
      styleOverrides: {
        flexContainer: {
          borderBottom: `1px solid`,
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
          width: '10rem',
        },
        textColorInherit: {},
        textColorPrimary: {},
        textColorSecondary: {},
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
    MuiSelect: {
      styleOverrides: {
        outlined: {
          paddingTop: '1.5rem',
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
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
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          '&.Mui-disabled': {
            '&.Mui-selected': {
              borderColor: alpha(baseTheme.palette.secondary.dark, 0.4),
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        checked: {},
        disabled: {},
        root: {
          height: '1rem',
          width: '1.875rem',
          padding: 0,
          display: 'flex',
        },
        track: {
          backgroundColor: baseTheme.palette.grey[300],
          opacity: 1,
        },
        thumb: {
          backgroundColor: baseTheme.palette.common.white,
          height: '0.875rem',
          width: '0.875rem',
          boxShadow: 'none',
        },
        switchBase: {
          padding: '0.0675rem',
          '&.Mui-checked': {
            transform: 'translateX(0.875rem)',
            '& + .MuiSwitch-track': {
              backgroundColor: baseTheme.palette.success.main,
              opacity: 1,
            },
            '&.Mui-disabled': {
              '& + .MuiSwitch-track': {
                backgroundColor: baseTheme.palette.success.main,
                opacity: 0.3,
              },
            },
          },
        },
        colorPrimary: {
          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              backgroundColor: baseTheme.palette.primary.main,
            },
          },
        },
        colorSecondary: {
          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              backgroundColor: baseTheme.palette.secondary.main,
            },
          },
        },
        sizeSmall: {
          width: '1.4375rem',
          height: '0.75rem',
          padding: 0,
          '& .MuiSwitch-thumb': {
            width: '0.625rem',
            height: '0.625rem',
            boxShadow: 'none',
          },
          '& .MuiSwitch-switchBase': {
            padding: '0.0675rem',
            '&.Mui-checked': {
              transform: 'translateX(0.6875rem)',
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: '0.3125rem',
  },
  spacing,
  typography: {
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
