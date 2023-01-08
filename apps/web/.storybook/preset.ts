import '../src/styles/globals.css';

// import * as NextImage from 'next/image';

// const OriginalNextImage = typeof NextImage.default;

/* It's a hack to get Next.js images to work in Storybook. */
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props: any) => <OriginalNextImage {...props} unoptimized />
// });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
