import { Fragment } from 'react';

export default async function BlogsLayout({
  children
}: React.PropsWithChildren) {
  return <Fragment>{children}</Fragment>;
}
