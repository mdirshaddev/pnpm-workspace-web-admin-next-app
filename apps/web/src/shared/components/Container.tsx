'use client';

import { HTMLAttributes, PropsWithChildren } from 'react';

/* Extending the props of the component with the props of the HTMLDivElement. */
interface ContainerProps
  extends Partial<HTMLAttributes<HTMLDivElement>>,
    PropsWithChildren {}

/**
 * This function takes in a children prop, a className prop, and any other props, and returns a div
 * with the className and any other props passed in.
 * @param {ContainerProps}  - ContainerProps): JSX.Element {
 * @returns A JSX.Element
 */
export default function Container({
  children,
  className,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
