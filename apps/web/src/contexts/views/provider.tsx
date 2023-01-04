'use client';

import type { ViewProviderProps } from 'src/contexts/types/views';
import { FC, useState } from 'react';
import { ViewContext } from './context';

const ViewProvider: FC<ViewProviderProps> = ({ children }): JSX.Element => {
  const [inView, setInView] = useState(false);

  const getViewStatus = (inView: boolean) => {
    setInView(inView);
  };
  return (
    <ViewContext.Provider value={{ inView, getViewStatus }}>
      {children}
    </ViewContext.Provider>
  );
};

export { ViewProvider };
