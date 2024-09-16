export type Theme = { [key: string]: string | number | string[] | Theme };

export const theme: Theme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#0055CC',
      main: '#0C66E4',
      dark: '#09326C',
      contrastText: '#fff',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    },
    background: '#f5f5f5',
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  ],
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  typography: {
    page: {
      fontSize: '1.5rem', // 24
      fontWeight: 400,
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      lineHeight: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    section: {
      fontSize: '1.25rem', // 20
      fontWeight: 400,
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      lineHeight: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    subsection: {
      fontSize: '1rem', // 16
      fontWeight: 400,
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      lineHeight: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    paragraph: {
      fontSize: '0.875rem', // 14
      fontWeight: 400,
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      lineHeight: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
    caption: {
      fontSize: '0.875rem', // 14
      fontWeight: 400,
      fontFamily: '"Roboto", sans-serif',
      fontStyle: 'normal',
      lineHeight: 1.5,
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },
};
