import { PaletteMode } from '@mui/material';
import type { PropsWithChildren, ProviderProps } from 'react';

type ThemeMode = PaletteMode | 'system';

// Context Props
interface MuiThemeContextProps extends MuiThemeProps {
  mode: ThemeMode;
  toggleMode: () => void;
  resetSettings: () => void;
}

interface MuiThemeProviderProps
  extends Partial<ProviderProps<MuiThemeProps>>,
    PropsWithChildren {}
