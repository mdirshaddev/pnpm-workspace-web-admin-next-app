const path = require('path');
const TsConfigWebpackPath = require('tsconfig-paths-webpack-plugin');

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
    'storybook-addon-swc',
    {
      name: 'storybook-addon-next',
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
    previewMdx2: true,
    postcss: true,
    storyStoreV7: false
  },
  webpackFinal: async config => {
    config?.resolve?.plugins?.push(new TsConfigWebpackPath());
    return config;
  }
};

module.exports = storybookConfig;
