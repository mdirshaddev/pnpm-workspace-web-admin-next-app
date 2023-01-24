import type { DecoratorFn } from '@storybook/react';

import React, { useEffect } from 'react';

export const DEFAULT_THEME = 'light';

/**
 * It's a decorator function that takes a Story and a context object as parameters, and returns a React
 * component that renders the Story
 * @param Story - The component that is being decorated.
 * @param context - The context object is a global object that contains all the information about the
 * story.
 */
const withTailwindTheme: DecoratorFn = (Story, context) => {
  const { theme } = context.globals;
  console.log(theme);
  useEffect(() => {
    const htmlTag = document.documentElement;
    // Set the "data-mode" attribute on the iFrame html tag
    htmlTag.setAttribute('data-mode', theme || DEFAULT_THEME);
  }, [theme]);

  return <Story />;
};

export default withTailwindTheme;
