'use client';

// React
import type { PropsWithChildren, Key } from 'react';

import clsx from 'clsx';

// Next
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

/* Defining the props that the component will accept. */
interface StyledLinkProps extends LinkProps, PropsWithChildren {
  /* A prop that is passed to the component. */
  tailwindClass: string | undefined;

  /* A prop that is passed to the component. */
  tailwindActiveClass?: string | undefined;

  /* A prop that is passed to the Link component. */
  path?: string;

  /* A prop that is passed to the Link component. */
  key?: Key | null | undefined;
}

/**
 * StyledLink is a function that returns a Link component with a className prop that is a string of two
 * classes, one of which is a tailwind class and the other is a tailwind active class, and the active
 * class is only added if the pathname is equal to the path prop.
 * @param {StyledLinkProps}  - StyledLinkProps
 * @returns A React component.
 */
export default function StyledLink({
  key,
  path,
  tailwindClass,
  tailwindActiveClass,
  children,
  ...props
}: StyledLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      key={key}
      className={clsx(
        `${tailwindClass}`,
        `${pathname === path ? tailwindActiveClass : ''}`
      )}
      {...props}>
      {children}
    </Link>
  );
}
