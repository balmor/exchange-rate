import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { DefaultTheme } from '../theme/dark';

export const darkMuiTheme = createTheme({
  typography: {
    fontSize: 22,
  },
  spacing: 4,
  palette: {
    mode: 'dark',
    primary: {
      main: DefaultTheme.secondary,
    },
    secondary: {
      main: '#bbb',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: DefaultTheme.primary,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginRight: 40,
        },
      },
    },
    MuiDayPicker: {
      styleOverrides: {
        header: {
          backgroundColor: DefaultTheme.primaryDarken,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiDayPicker-weekDayLabel': {
            color: 'lightslategrey',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiPickersDay-root': {
            background: 'transparent',
          },
          '&.MuiPickersDay-today': {
            border: '0 !important',
            color: DefaultTheme.secondary,
          },
          '&.MuiPickersDay-root.Mui-selected': {
            background: DefaultTheme.secondary,
          },
        },
      },
    },
  },
});
