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
          borderColor: '#757575',
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
              backgroundColor: '#2a6e82',
            },
          },
        },
        outlined: {
          color: 'unset',
          backgroundColor: 'transparent',
          '.MuiChip-deleteIconOutlinedColorPrimary': {
            color: '#f6be00',
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
          backgroundColor: '#757575',
        },
        avatarColorPrimary: { backgroundColor: '#ac8500' },
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: coreTheme.palette.background.default,
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
          borderBottomColor: coreTheme.palette.divider,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&$textColorPrimary': {
            color: coreTheme.palette.text.primary,
          },
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
  },
};

const darkTheme = createTheme(coreTheme, dark);
export default darkTheme;
