'use client';

import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

interface TypographyProps
  extends Partial<HTMLAttributes<HTMLParagraphElement>>,
    PropsWithChildren {}

const Typography: FC<TypographyProps> = ({
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <p className={clsx(className)} {...props}>
      {children}
    </p>
  );
};

export default Typography;
