import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';

import NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: themes.dark
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme Mode',
    // Text that will be shown on icon hover
    description: 'Theme Mode',
    defaultValue: 'system',
    toolbar: {
      /**
       * You can check all available icons by this link:
       * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
       */
      icon: 'lightning',
      items: [
        {
          left: '💻',
          value: 'system',
          title: 'System'
        },
        {
          left: '🌚',
          value: 'dark',
          title: 'Dark'
        },
        {
          left: '😎',
          value: 'light',
          title: 'Light'
        }
      ],
      // Should "Container size" be shown, or just the "circlehollow" icon
      showName: true
    }
  }
};
