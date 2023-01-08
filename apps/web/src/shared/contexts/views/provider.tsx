'use client';

import { FC, useCallback, useState } from 'react';
import type { ViewProviderProps } from '../types/views';
import { ViewContext } from './context';

const ViewProvider: FC<ViewProviderProps> = ({ children }): JSX.Element => {
  const [isInView, setIsInView] = useState(false);

  const getViewStatus = useCallback(
    (isInView: boolean) => {
      setIsInView(isInView);
    },
    [isInView]
  );
  return (
    <ViewContext.Provider value={{ isInView, getViewStatus }}>
      {children}
    </ViewContext.Provider>
  );
};

export { ViewProvider };
