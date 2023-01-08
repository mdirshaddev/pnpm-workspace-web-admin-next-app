'use client';

import { FC, useCallback, useState } from 'react';
import { SidebarContext } from './context';
import { SidebarProviderProps } from '../types/sidebar';

/**
 * The SidebarProvider function is a React component that takes in a children prop and returns a JSX
 * element that wraps the children prop in a SidebarContext.Provider component that has a value prop
 * that is an object with a isOpen property and a toggleSidebar property.
 * @param  - FC<SidebarProviderProps> = ({
 * @returns The SidebarProvider is being returned.
 */
const SidebarProvider: FC<SidebarProviderProps> = ({
  children
}): JSX.Element => {
  /* Creating a state variable called isOpen and setting it to false. */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /* Creating a callback function that is being used to toggle the state of the isOpen variable. */
  const toggleSideBar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <SidebarContext.Provider
      value={{ isOpen: isOpen, toggleSidebar: toggleSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider };
