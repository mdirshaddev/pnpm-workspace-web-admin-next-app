'use client';

import type { DefaultViewProps, ViewContextProps } from '../types/views';

import { createContext } from 'react';

const defaultValue: DefaultViewProps = {
  isInView: false
};

const ViewContext = createContext<ViewContextProps>({
  isInView: defaultValue.isInView,
  getViewStatus: (isInView: boolean) => {}
});

export { ViewContext, defaultValue };
