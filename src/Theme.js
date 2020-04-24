import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: '#FFFAFA',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          main: '#20FC8F',
          lightBlack: '#1F1F1F',
          darkBlack: '#181818',
          contrast: '#D81E5B',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
      },
      type: 'dark',
      typography: {
         fontFamily: `'IBM Plex Mono', monospace`,
         fontSize: 14,
         h1: {
          fontFamily: `'IBM Plex Sans Condensed', sans-serif`
         },
         h2: {
          fontFamily: `'IBM Plex Sans Condensed', sans-serif`
         },
         h3: {
           fontFamily: `'IBM Plex Sans Condensed', sans-serif`
         },
         h4: {
          fontFamily: `'IBM Plex Sans Condensed', sans-serif`
         }
      }
});


export default Theme;