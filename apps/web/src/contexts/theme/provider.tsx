// Provider for theme

'use client';

import {
  ThemeMode,
  ThemeProviderProps,
  ThemeReducerActionProps,
  ThemeColorPreset,
  ThemeContrast,
  ColorReducerState
} from 'src/contexts/types/theme';
import { Reducer, useReducer, useState } from 'react';
import { ThemeContext } from './context';
import {
  defaultPresetColor,
  defaultPresetOptions,
  defaultThemeColorPreset
} from './default';
import { ColorPresetReducer } from './reducer';

/**
 * ThemeProvider is a function that takes a children prop of type React.ReactNode and returns a
 * JSX.Element that has a ThemeContext.Provider that has a value of an object that has a mode,
 * presetColor, themeContrast, onToggleMode, onChangeColorPreset, and onToggleThemeContrast property.
 * @param {ThemeProviderProps}  - ThemeMode - This is the mode that you want to set the theme to.
 * @returns The ThemeProvider is returning a ThemeContext.Provider.
 */
const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const [themeModeState, setThemeMode] = useState<ThemeMode>('dark');

  const [themeContrastState, setThemeContrast] =
    useState<ThemeContrast>('default');

  const [colorState, dispatch] = useReducer<
    Reducer<ColorReducerState, ThemeReducerActionProps>
  >(ColorPresetReducer, {
    themeColorPreset: defaultThemeColorPreset,
    presetColor: defaultPresetColor
  });

  /**
   * OnToggleMode is a function that takes a parameter of type ThemeMode and returns a function that
   * sets the theme mode to the parameter passed in.
   * @param {ThemeMode} mode - ThemeMode - This is the mode that you want to set the theme to.
   */
  const onToggleMode = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  /**
   * OnToggleThemeContrast is a function that takes a themeContrastState and sets the themeContrast to
   * that themeContrastState.
   * @param {ThemeContrast} themeContrastState - ThemeContrast - This is the state of the theme
   * contrast.
   */
  const onToggleThemeContrast = (themeContrastState: ThemeContrast) => {
    setThemeContrast(themeContrastState);
  };

  /**
   * OnChangeColorPreset is a function that takes a presetColor of type ThemeColorPreset and returns a
   * dispatch function that takes a type of presetColor.
   * @param {ThemeColorPreset} presetColor - ThemeColorPreset
   */
  const onChangeColorPreset = (presetColor: ThemeColorPreset) => {
    dispatch({ type: presetColor });
  };

  /**
   * OnResetSettings() is a function that calls onToggleMode(), onToggleThemeContrast(), and
   * onChangeColorPreset() with the arguments 'system' and 'default' respectively.
   */
  const onResetSettings = () => {
    onToggleMode('dark');
    onToggleThemeContrast('default');
    onChangeColorPreset('Default');
  };

  return (
    <ThemeContext.Provider
      value={{
        mode: themeModeState,
        presetOptions: defaultPresetOptions,
        presetColor: colorState.presetColor,
        themeContrast: themeContrastState,
        themeColorPreset: colorState.themeColorPreset,
        onToggleMode: onToggleMode,
        onChangeColorPreset: onChangeColorPreset,
        onToggleThemeContrast: onToggleThemeContrast,
        onResetSettings: onResetSettings
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
