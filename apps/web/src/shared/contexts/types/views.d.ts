import { PropsWithChildren, ProviderProps } from 'react';

interface DefaultViewProps {
  isInView: boolean;
}

interface ViewContextProps {
  isInView: boolean;
  getViewStatus: (isInView: boolean) => void;
}

interface ViewProviderProps
  extends Partial<ProviderProps<DefaultViewProps>>,
    PropsWithChildren {}
