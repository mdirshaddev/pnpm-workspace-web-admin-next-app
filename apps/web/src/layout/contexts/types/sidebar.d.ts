import { PropsWithChildren, ProviderProps } from 'react';

// Default

/* Defining the sidebar props for the context. */
interface DefaultSidebarProps {
  isOpen: boolean;
}

// Context
/* Defining the context. */
interface SidebarContextProps {
  /* The default value for the context. */
  isOpen: boolean;
  /* A function that returns nothing. */
  toggleSidebar: () => void;
}

// Provider
/* Extending the `ProviderProps` interface with the `PropsWithChildren` interface. */
interface SidebarProviderProps
  extends Partial<ProviderProps<DefaultSidebarProps>>,
    PropsWithChildren {}
