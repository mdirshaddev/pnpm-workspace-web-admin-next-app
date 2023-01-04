'use client';

// React
import type { PropsWithChildren, Key } from 'react';

// Next
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

/* Defining the props that the component will accept. */
interface UnStyledLinkProps extends LinkProps, PropsWithChildren {
  /* A prop that is passed to the component. */
  tailwindClass: string | undefined;

  /* A prop that is passed to the component. */
  tailwindActiveClass?: string | undefined;

  /* A prop that is passed to the Link component. */
  path?: string;

  /* A prop that is passed to the Link component. */
  key?: Key | null | undefined;
}

// TODO: Based on active route should have active class selection
/**
 * It's a React component that renders a Link component from Next.js, and adds a class to it based on
 * the current pathname.
 * @param {UnStyledLinkProps}  UnStyledLinkProps
 * @returns A Link component with a className prop that is a string of the tailwindClass and
 * tailwindActiveClass.
 */
function UnStyledLink({
  key,
  path,
  tailwindClass,
  tailwindActiveClass,
  children,
  ...props
}: UnStyledLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      key={key}
      className={`${tailwindClass} ${
        pathname === path ? tailwindActiveClass : ''
      }`}
      {...props}>
      {children}
    </Link>
  );
}

export default UnStyledLink;
