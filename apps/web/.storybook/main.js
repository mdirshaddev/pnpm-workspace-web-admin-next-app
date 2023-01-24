const path = require('path');
const TsConfigWebpackPath = require('tsconfig-paths-webpack-plugin'); // Link typescript path config with webpack config

const storybookConfig = {
  staticDirs: ['../public'],
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y', // For Accessibility warning and suggestions
    'storybook-addon-swc', // For SWC Compilation
    'storybook-addon-pseudo-states', // For pseudo state selection
    {
      name: 'storybook-addon-next', // For Nextjs capabilities
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  features: {
    previewMdx2: true, // Moving to MDX2 which is fast and have new features
    postcss: true, // postcss for handling tailwindcss
    storyStoreV7: true // New fast and on demand loading of storybook which makes startup faster
  },
  webpackFinal: async config => {
    config?.resolve?.plugins?.push(new TsConfigWebpackPath());
    return config;
  }
};

module.exports = storybookConfig;
