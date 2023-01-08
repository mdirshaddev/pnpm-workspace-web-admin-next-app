'use client';

import { ColorReducerState, ThemeReducerActionProps } from '../types/theme';
import { defaultPresetColor } from './default';

const ColorPresetReducer = (
  state: ColorReducerState,
  action: ThemeReducerActionProps
): ColorReducerState => {
  switch (action.type) {
    case 'Default':
      state.presetColor = defaultPresetColor;
      state.themeColorPreset = 'Default';
      return { ...state };
    case 'Cyan':
      state.presetColor = {
        contrastText: '#FFFFFF',
        dark: '#0351AB',
        darker: '#012972',
        light: '#68CDF9',
        lighter: '#CCF4FE',
        main: '#078DEE',
        name: 'Cyan'
      };
      state.themeColorPreset = 'Cyan';
      return { ...state };
    case 'Purple':
      state.presetColor = {
        contrastText: '#FFFFFF',
        dark: '#431A9E',
        darker: '#200A69',
        light: '#B985F4',
        lighter: '#EBD6FD',
        main: '#7635dc',
        name: 'Purple'
      };
      state.themeColorPreset = 'Purple';
      return { ...state };
    case 'Blue':
      state.presetColor = {
        contrastText: '#FFFFFF',
        dark: '#103996',
        darker: '#061B64',
        light: '#76B0F1',
        lighter: '#D1E9FC',
        main: '#2065D1',
        name: 'Blue'
      };
      state.themeColorPreset = 'Blue';
      return { ...state };
    case 'Orange':
      state.presetColor = {
        contrastText: '#212B36',
        dark: '#B66816',
        darker: '#793908',
        light: '#FED680',
        lighter: '#FEF4D4',
        main: '#fda92d',
        name: 'Orange'
      };
      state.themeColorPreset = 'Orange';
      return { ...state };
    case 'Red':
      state.presetColor = {
        contrastText: '#FFFFFF',
        dark: '#B71833',
        darker: '#7A0930',
        light: '#FFC1AC',
        lighter: '#FFE3D5',
        main: '#FF3030',
        name: 'Red'
      };
      state.themeColorPreset = 'Red';
      return { ...state };
    default:
      state.presetColor = defaultPresetColor;
      state.themeColorPreset = 'Default';
      return { ...state };
  }
};

export { ColorPresetReducer };
