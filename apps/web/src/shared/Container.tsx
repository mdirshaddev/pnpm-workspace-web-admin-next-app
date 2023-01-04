'use client';

import { HTMLAttributes, PropsWithChildren, useContext } from 'react';

/* Extending the props of the component with the props of the HTMLDivElement. */
interface ContainerProps
  extends Partial<HTMLAttributes<HTMLDivElement>>,
    PropsWithChildren {}

/**
 * It's a function that takes in a children prop, a className prop, and any other props, and returns a
 * div with the className and any other props passed in.
 * </code>
 *
 *
 * A:
 *
 * You can use <code>React.Children.map</code> to iterate over the children and add the className to
 * each child.
 * <code>const Container = ({ children, className, ...props }: ContainerProps) =&gt; {
 *   return (
 *     &lt;div className={className} {...props}&gt;
 *       {React.Children.map(children, child =&gt; React.cloneElement(child, { className }))}
 *     &lt;/div&gt;
 *   );
 * };
 * </code>
 * @param {ContainerProps} ContainerProps - This is the type of props that the component will
 * receive.
 * @returns A div with children and className and props
 */
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Container;
