'use client';

import type {
  ThemeContextProps,
  ThemeMode,
  ThemeColorPreset,
  ThemeContrast
} from 'src/contexts/types/theme';
import { createContext } from 'react';
import {
  defaultPresetColor,
  defaultPresetOptions,
  defaultThemeColorPreset,
  defaultThemeContrast,
  defaultThemeMode
} from './default';

/* Creating a context object with a default value. */
const ThemeContext = createContext<ThemeContextProps>({
  /* Setting the default value of the theme mode. */
  mode: defaultThemeMode,

  /* Setting the default value of the preset color. */
  presetColor: defaultPresetColor,

  /* Setting the default value of the preset options. */
  presetOptions: defaultPresetOptions,

  /* Setting the default value of the theme color preset. */
  themeColorPreset: defaultThemeColorPreset,

  /* Setting the default value of the theme contrast. */
  themeContrast: defaultThemeContrast,

  /**
   * This function takes a ThemeMode object as an argument and does nothing with it.
   * @param {ThemeMode} theme - The current theme mode.
   */
  onToggleMode(theme: ThemeMode) {},

  /**
   * This function is called when the user toggles the theme contrast.
   * @param {ThemeContrast} _themeContrast - The new theme contrast.
   */
  onToggleThemeContrast(_themeContrast: ThemeContrast) {},

  /**
   * The function takes a parameter of type ThemeColorPreset and returns nothing
   * @param {ThemeColorPreset} _presetColor - The color preset that was selected.
   */
  onChangeColorPreset(_presetColor: ThemeColorPreset) {},

  /**
   * When the user clicks the reset button, reset the settings.
   */
  onResetSettings() {}
});

export { ThemeContext };
