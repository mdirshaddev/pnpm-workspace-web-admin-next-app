'use client';

import type { PaletteMode, ThemeOptions } from '@mui/material';

/**
 * It takes a palette mode (light or dark) and returns a theme object with a palette object that has a
 * mode property and a background object with a default property and a paper property.
 * @param {PaletteMode} mode - PaletteMode - This is the mode of the theme. It can be either 'light' or
 * 'dark'.
 * @returns A function that takes a PaletteMode and returns a ThemeOptions object.
 */
function CustomTheme(mode: PaletteMode): ThemeOptions {
  return {
    palette: {
      mode: mode,
      background: {
        default: mode === 'dark' ? '#212b36' : '#f6f6f6',
        paper: mode === 'dark' ? '' : ''
      }
    }
  };
}

export default CustomTheme;
