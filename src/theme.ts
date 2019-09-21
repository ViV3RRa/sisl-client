import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    warning: {
      good: PaletteColor;
      medium: PaletteColor;
      bad: PaletteColor;
    };
    warmGrey: PaletteColor;
  }
  interface PaletteOptions {
    warning?: {
      good: PaletteColorOptions;
      medium: PaletteColorOptions;
      bad: PaletteColorOptions;
    };
    warmGrey?: PaletteColorOptions;
  }
}

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#403f44'
    },
    secondary: {
      main: '#216c2a'
    },
    warmGrey: {
      main: '#403f44'
    },
    error: {
      main: '#fe2020'
    },
    common: {
      black: '#000',
      white: '#fff'
    },
    warning: {
      good: {
        main: '#55dd6b'
      },
      medium: {
        main: '#ffae42'
      },
      bad: {
        main: '#fe2020'
      }
    }
  }
});
