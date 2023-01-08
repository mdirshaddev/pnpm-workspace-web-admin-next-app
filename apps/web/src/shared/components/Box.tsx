'use client';

import clsx from 'clsx';
import { FC, HTMLAttributes, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'src/shared/contexts/theme';

interface BoxProps
  extends Partial<HTMLAttributes<HTMLDivElement>>,
    PropsWithChildren {}

/**
 * This function takes in a className and children props and returns a div with the className
 * magical{presetColor.name} and the className passed in as a prop.
 * @param {BoxProps}  - JSX.Element - This is the return type of the function.
 */
export default function Box({
  className,
  children,
  ...props
}: BoxProps): JSX.Element {
  const { presetColor } = useContext(ThemeContext);
  return (
    <div
      className={clsx(`magical${presetColor.name}`, `${className}`)}
      {...props}>
      {children}
    </div>
  );
}
