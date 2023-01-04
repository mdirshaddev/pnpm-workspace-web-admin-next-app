import type { PropsWithChildren, ProviderProps } from 'react';

interface ThemeProps {
  /* A type guard. It is telling the compiler that the `mode` property is of type `ThemeMode`. */
  mode: ThemeMode;
  /**
   * To be used for showing theme options not required any mutations here
   */
  presetOptions: PresetOptions;
  /**
   * Theme Color
   */
  presetColor: PresetColor;
  /**
   * Theme Contrast
   */
  themeContrast: ThemeContrast;
  /**
   * Theme Color Preset
   */
  themeColorPreset: ThemeColorPreset;
}

type ThemeMode = 'dark' | 'light';

type PresetOptions = [
  DefaultOptions,
  CyanOptions,
  PurpleOptions,
  BlueOptions,
  OrangeOptions,
  RedOptions
];

type PresetColor =
  | DefaultColor
  | CyanColor
  | PurpleColor
  | BlueColor
  | OrangeColor
  | RedColor;

//#startregion Preset Options
interface DefaultOptions {
  name: 'Default';
  value: '#00AB55';
}

interface CyanOptions {
  name: 'Cyan';
  value: '#078DEE';
}

interface PurpleOptions {
  name: 'Purple';
  value: '#7635DC';
}

interface BlueOptions {
  name: 'Blue';
  value: '#2065D1';
}

interface OrangeOptions {
  name: 'Orange';
  value: '#FDA92D';
}

interface RedOptions {
  name: 'Red';
  value: '#F03030';
}
//#endregion

//#startregion Preset Color
interface DefaultColor {
  contrastText: '#fff';
  dark: '#007B55';
  darker: '#005249';
  light: '#5BE584';
  lighter: '#C8FACD';
  main: '#00AB55';
  name: 'Default';
}

interface CyanColor {
  contrastText: '#FFFFFF';
  dark: '#0351AB';
  darker: '#012972';
  light: '#68CDF9';
  lighter: '#CCF4FE';
  main: '#078DEE';
  name: 'Cyan';
}

interface PurpleColor {
  contrastText: '#FFFFFF';
  dark: '#431A9E';
  darker: '#200A69';
  light: '#B985F4';
  lighter: '#EBD6FD';
  main: '#7635dc';
  name: 'Purple';
}

interface BlueColor {
  contrastText: '#FFFFFF';
  dark: '#103996';
  darker: '#061B64';
  light: '#76B0F1';
  lighter: '#D1E9FC';
  main: '#2065D1';
  name: 'Blue';
}

interface OrangeColor {
  contrastText: '#212B36';
  dark: '#B66816';
  darker: '#793908';
  light: '#FED680';
  lighter: '#FEF4D4';
  main: '#fda92d';
  name: 'Orange';
}

interface RedColor {
  contrastText: '#FFFFFF';
  dark: '#B71833';
  darker: '#7A0930';
  light: '#FFC1AC';
  lighter: '#FFE3D5';
  main: '#FF3030';
  name: 'Red';
}
//#endregion

type ThemeContrast = 'default' | 'bold';

type ThemeColorPreset =
  | 'Default'
  | 'Cyan'
  | 'Purple'
  | 'Blue'
  | 'Orange'
  | 'Red';

// ---------------- //

/* Reducers */

interface ColorReducerState {
  themeColorPreset: ThemeColorPreset;
  presetColor: PresetColor;
}

interface ThemeReducerActionProps {
  type: ThemeColorPreset;
}

/*#end Reducers */

// ---------------- //

/* Contexts */

/* Defining the context for theme. */
type ThemeType = ThemeColorPreset;

interface ThemeContextProps extends ThemeProps {
  /**
   * Toggle theme mode between
   * dark, light or system as default
   *
   * @returns void
   */
  onToggleMode: (theme: ThemeMode) => void;
  /**
   * A function that takes a `ThemeColorPreset`
   * @param presetColor
   * @returns
   */
  onChangeColorPreset: (presetColor: ThemeColorPreset) => void;
  /**
   *
   * @param themeContrast
   * @returns
   */
  onToggleThemeContrast: (themeContrast: ThemeContrast) => void;
  /**
   *
   * @returns void
   */
  onResetSettings: () => void;
}

/*#end Contexts */

// ---------------- //

/* Providers */

/* Extending the `ProviderProps` interface with the `DefaultThemeProps` interface. */
interface ThemeProviderProps
  extends Partial<ProviderProps<ThemeProps>>,
    PropsWithChildren {}

/*#end Providers */
