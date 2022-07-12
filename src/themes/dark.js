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
            borderColor: coreTheme.palette.action.disabled,
          },
        },
        disabled: {},
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
          color: coreTheme.palette.secondary.main,
        },
        outlined: { color: 'unset' },
        clickable: {
          '&:hover': {
            backgroundColor: coreTheme.palette.grey[400],
          },
        },
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
          '& .Mui-disabled': {
            color: coreTheme.palette.action.disabled,
          },
        },
        disabled: {},
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            color: coreTheme.palette.text.primary,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          // color: coreTheme.palette.text.primary,
        },
      },
    },
    // MuiLButtonBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-selected': {
    //         backgroundColor: alpha(coreTheme.palette.secondary.main, 0.08),
    //       },
    //     },
    //   },
    // },
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#5d666e',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#5d666e',
          '&:hover': {
            // backgroundColor: lighten(coreTheme.palette.background.default, 0.1),
            backgroundColor: 'rgb(71, 82, 90)',
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
          '&.MuiTab-textColorPrimary': {
            // '&$textColorPrimary': {
            color: coreTheme.palette.text.primary,
          },
        },
        textColorPrimary: {},
      },
    },
  },
};

const darkTheme = createTheme(coreTheme, dark);
export default darkTheme;

console.log('DARK THEME: ', darkTheme);
