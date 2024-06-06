import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: ['Roboto', 'Raleway', 'Open Sans'].join(','),
      h1: {
        fontSize: '5rem',
        fontFamily: 'Raleway',
      },
      h2: {
        fontSize: '3.5rem',
        fontFamily: 'Open Sans',
        fontStyle: 'bold',
      },
      h3: {
        fontSize: '2.5rem',
        fontFamily: 'Roboto',
      },
    },
    palette: {
      background: {
        default: '#009900', // green
      },
      error: {
        main: '#D72A2A', // red
      },
      warning: {
        main: '#FC7B09', // orange
      },
      info: {
        main: '#6B7D6A', // gray
      },
      success: {
        main: '#09FE00', // green
      },
      text: {
        primary: '#000000', // black
        secondary: '#FFFFFF', // white,
      },
      primary: {
        main: '#222831', //black
        dark: '#31363F', //dark gray
        light: '#76ABAE', //teal
        contrastText: '#a2a4a8', // light gray
      },
    },
  }),
);
