'use client';

import type { MuiThemeProviderProps, ThemeMode } from './typings';

import { useCallback, useMemo, useState } from 'react';
import { CssBaseline, PaletteMode, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import MuiThemeContext, { defaultMode } from './context';
import createEmotionCache from './emotionCache';
import CustomTheme from './theme';

const MuiThemeProvider = (props: MuiThemeProviderProps): JSX.Element => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const emotionCache = createEmotionCache();

  const toggleMode = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('themeMode', mode);
      setMode(mode);
    }
  }, [mode]);

  let choosenMode: PaletteMode;

  const theme = useMemo(() => {
    if (mode !== 'system') {
      if (mode === 'dark') choosenMode = 'dark';
      else choosenMode = 'light';
    } else {
      if (isDarkMode === true) choosenMode = 'dark';
      else choosenMode = 'light';
    }
    const selectedTheme = createTheme(CustomTheme(choosenMode));
    return selectedTheme;
  }, [mode, isDarkMode]);

  return (
    <CacheProvider value={emotionCache}>
      <MuiThemeContext.Provider
        value={{ mode: mode, toggleMode: toggleMode, resetSettings: () => {} }}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          {props.children}
        </ThemeProvider>
      </MuiThemeContext.Provider>
    </CacheProvider>
  );
};
export default MuiThemeProvider;
