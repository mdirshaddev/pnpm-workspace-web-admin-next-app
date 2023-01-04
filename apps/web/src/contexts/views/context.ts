'use client';

import type {
  DefaultViewProps,
  ViewContextProps
} from 'src/contexts/types/views';

import { createContext } from 'react';

const defaultValue: DefaultViewProps = {
  inView: false
};

const ViewContext = createContext<ViewContextProps>({
  inView: defaultValue.inView,
  getViewStatus: (inView: boolean) => {}
});

export { ViewContext, defaultValue };
