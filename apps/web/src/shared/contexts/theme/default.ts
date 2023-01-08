import {
  PresetColor,
  PresetOptions,
  ThemeColorPreset,
  ThemeContrast,
  ThemeMode
} from '../types/theme';

/* Defining the default theme mode for the app. */
const defaultThemeMode: ThemeMode = 'dark';

/* Defining the default color scheme for the app. */
const defaultPresetColor: PresetColor = {
  contrastText: '#fff',
  dark: '#007B55',
  darker: '#005249',
  light: '#5BE584',
  lighter: '#C8FACD',
  main: '#00AB55',
  name: 'Default'
};

/* Defining the default color scheme for the app. */
const defaultPresetOptions: PresetOptions = [
  { name: 'Default', value: '#00AB55' },
  { name: 'Cyan', value: '#078DEE' },
  { name: 'Purple', value: '#7635DC' },
  { name: 'Blue', value: '#2065D1' },
  { name: 'Orange', value: '#FDA92D' },
  { name: 'Red', value: '#F03030' }
];

/* Defining the default color scheme for the app. */
const defaultThemeColorPreset: ThemeColorPreset = 'Default';

/* Setting the default contrast for the app. */
const defaultThemeContrast: ThemeContrast = 'default';

const defaultPanelSwitch: boolean = false;

export {
  defaultThemeMode,
  defaultPresetColor,
  defaultPresetOptions,
  defaultThemeColorPreset,
  defaultThemeContrast,
  defaultPanelSwitch
};
