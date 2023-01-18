'use client';

import type { MuiThemeContextProps, ThemeMode } from './typings';
import { createContext } from 'react';

export const defaultMode: ThemeMode = 'system';

const MuiThemeContext = createContext<MuiThemeContextProps>({
  mode: defaultMode,
  toggleMode: () => {},
  resetSettings: () => {}
});

export default MuiThemeContext;
