'use client';

// Types
import type { SidebarContextProps } from '../types/sidebar';

// React
import { createContext } from 'react';

// Default Context Values
import { defaultValue } from './default';

/* Creating a context object with the default values of the `isOpen` and `toggleSidebar` properties. */
const SidebarContext = createContext<SidebarContextProps>({
  /* Setting the default value of the `isOpen` property to the value of the `isOpen` property in the
  `defaultValue` object. */
  isOpen: defaultValue.isOpen,
  /* A function that does nothing. */
  toggleSidebar: () => {}
});

export { SidebarContext, defaultValue };
