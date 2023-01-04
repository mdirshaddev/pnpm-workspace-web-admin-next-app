import { PropsWithChildren, ProviderProps } from 'react';

interface DefaultViewProps {
  inView: boolean;
}
// (node?: Element | null | undefined)

interface ViewContextProps {
  inView: boolean;
  getViewStatus: (inView: boolean) => void;
}

interface ViewProviderProps
  extends Partial<ProviderProps<DefaultViewProps>>,
    PropsWithChildren {}
