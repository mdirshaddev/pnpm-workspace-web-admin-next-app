'use client';

import type { HTMLAttributes, PropsWithChildren } from 'react';

import { useContext } from 'react';

import clsx from 'clsx';

import { ThemeContext } from 'src/shared/contexts/theme';

interface TypographyProps
  extends Partial<HTMLAttributes<HTMLParagraphElement>>,
    PropsWithChildren {}

/**
 * Typography is a function that takes in a className, children, and props, and returns a JSX element.
 * @param {TypographyProps}  - JSX.Element -&gt; The return type of the function.
 * @returns A function that returns a JSX.Element
 */
export default function Typography({
  className,
  children,
  ...props
}: TypographyProps): JSX.Element {
  const { mode } = useContext(ThemeContext);
  return (
    <p
      className={clsx(
        className,
        `${mode === 'dark' ? 'TextLight' : 'TextDark'}`
      )}
      {...props}>
      {children}
    </p>
  );
}
