'use client';
import type { PropsWithChildren, ProviderProps } from 'react';
import type { PaletteMode } from '@mui/material';

import { useCallback, useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import { DarkTheme } from './dark';
import { LightTheme } from './light';
import MuiThemeContext, { MuiThemeProps } from './context';
import createEmotionCache from './emotionCache';

interface MuiThemeProviderProps
  extends Partial<ProviderProps<MuiThemeProps>>,
    PropsWithChildren {}

export default function MuiThemeProvider(props: MuiThemeProviderProps) {
  const emotionCache = createEmotionCache();
  const [mode, setMode] = useState<PaletteMode>('dark');

  const toggleMode = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('themeMode', mode);
      setMode(mode);
    }
  }, [mode]);

  const theme = useMemo(() => {
    return createTheme(mode === 'light' ? LightTheme : DarkTheme);
  }, [mode]);
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
}
