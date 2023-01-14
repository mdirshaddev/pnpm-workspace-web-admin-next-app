'use client';

import type { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export interface MuiThemeProps {
  mode: PaletteMode;
}

interface MuiThemeContextProps extends MuiThemeProps {
  toggleMode: (mode: PaletteMode) => void;
  resetSettings: () => void;
}

const MuiThemeContext = createContext<MuiThemeContextProps>({
  mode: 'dark',
  toggleMode: (mode: PaletteMode) => {},
  resetSettings: () => {}
});

export default MuiThemeContext;
