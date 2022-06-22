import { createTheme, alpha, lighten } from '@mui/material/styles';

import { coreTheme } from './core';

const dark = {
  palette: {
    mode: 'dark',
    text: {
      primary: coreTheme.palette.grey[100],
      secondary: coreTheme.palette.grey.A100,
      disabled: alpha(coreTheme.palette.grey[100], 0.5),
    },
    background: {
      default: coreTheme.palette.secondary.main,
      paper: '#5d666e',
    },
    action: {
      active: coreTheme.palette.grey[300],
      hover: alpha(
        coreTheme.palette.grey[300],
        coreTheme.palette.action.hoverOpacity
      ),
      disabled: coreTheme.palette.grey[500],
    },
    divider: alpha(coreTheme.palette.grey[100], 0.12),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { color: coreTheme.palette.common.black },
        colorPrimary: {
          backgroundColor: coreTheme.palette.primary.main,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          color: coreTheme.palette.common.white,
        },
        filledError: {
          backgroundColor: alpha(coreTheme.palette.error.main, 0.3),
          color: coreTheme.palette.error.main,
        },
        filledSuccess: {
          backgroundColor: alpha(coreTheme.palette.success.main, 0.3),
          color: coreTheme.palette.success.main,
        },
        filledInfo: {
          backgroundColor: alpha(coreTheme.palette.common.black, 0.3),
          color: coreTheme.palette.info.main,
        },
        outlinedInfo: {
          borderColor: coreTheme.palette.common.white,
        },
        outlinedSuccess: { borderColor: coreTheme.palette.success.main },
        outlinedError: {
          borderColor: coreTheme.palette.error.main,
        },
        standardError: {
          backgroundColor: alpha(coreTheme.palette.error.main, 0.3),
          borderColor: coreTheme.palette.error.main,
        },
        standardSuccess: {
          backgroundColor: alpha(coreTheme.palette.success.main, 0.3),
          borderColor: coreTheme.palette.success.main,
        },
        standardInfo: {
          borderColor: coreTheme.palette.common.white,
          backgroundColor: alpha(coreTheme.palette.common.black, 0.3),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          '&.Mui-disabled': {
            borderColor: coreTheme.palette.grey[500],
          },
        },
        disabled: {},
        contained: {
          '&.Mui-disabled': {
            backgroundColor: coreTheme.palette.action.disabledBackground,
            color: coreTheme.palette.text.disabled,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: coreTheme.palette.action.disabledBackground,
          color: coreTheme.palette.secondary.main,
          borderColor: coreTheme.palette.grey[600],
        },
        filled: {
          '&.Mui-disabled': {
            backgroundColor: coreTheme.palette.action.disabledBackground,
            opacity: 0.5,
          },
          '&:focus': {
            backgroundColor: coreTheme.palette.grey[600],
          },
          '&.MuiChip-colorPrimary': {
            '&:hover': {
              backgroundColor: coreTheme.palette.primary.main,
              opacity: 0.9,
            },
            '&:focus': {
              backgroundColor: coreTheme.palette.primary.main,
              opacity: 0.7,
            },
          },
          '&.MuiChip-clickableColorSecondary': {
            '&:hover': {
              backgroundColor: coreTheme.palette.info.dark,
            },
          },
        },
        outlined: {
          color: 'unset',
          backgroundColor: 'transparent',
          '.MuiChip-deleteIconOutlinedColorPrimary': {
            color: coreTheme.palette.primary.main,
            opacity: 0.7,
            '&.MuiChip-deleteIcon': {
              '&:hover': {
                color: coreTheme.palette.primary.main,
                opacity: 1,
              },
            },
          },
          '&.Mui-disabled': {
            color: coreTheme.palette.action.disabledBackground,
            opacity: 0.6,
          },
        },
        clickable: {
          '&:hover': {
            backgroundColor: coreTheme.palette.grey[400],
          },
        },
        avatar: {
          backgroundColor: coreTheme.palette.grey[600],
        },
        avatarColorPrimary: { backgroundColor: coreTheme.palette.primary.dark },
        icon: {
          color: 'inherit',
        },
        deleteIcon: {
          color: 'inherit',
          '&:hover': {
            color: coreTheme.palette.secondary.light,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            backgroundColor: coreTheme.palette.action.hover,
          },
          '&$disabled': {
            color: coreTheme.palette.action.disabled,
          },
        },
        disabled: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: coreTheme.palette.common.white,
          '&.Mui-error': {
            color: coreTheme.palette.common.white,
            '&.Mui-focused': {
              color: coreTheme.palette.primary.main,
            },
          },
          '&$error': {
            color: coreTheme.palette.text.primary,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: coreTheme.palette.text.primary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: coreTheme.palette.action.disabled,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          borderBottomColor: alpha(coreTheme.palette.grey[700], 0.6),
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&$textColorPrimary': {
            color: coreTheme.palette.text.primary,
          },
          opacity: 1,
        },
        textColorPrimary: {},
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation: {
          background: coreTheme.palette.background.paper,
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        sticky: { backgroundColor: 'transparent', opacity: 0.8 },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: alpha(coreTheme.palette.grey[900], 0.2),
            '&:hover': {
              backgroundColor: alpha(coreTheme.palette.grey[900], 0.2),
            },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: { opacity: 0.8 },
      },
    },
  },
};

const darkTheme = createTheme(coreTheme, dark);
export default darkTheme;
