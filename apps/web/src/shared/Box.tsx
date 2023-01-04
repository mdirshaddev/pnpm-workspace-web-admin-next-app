'use client';

import { FC, HTMLAttributes, PropsWithChildren, useContext } from 'react';
import { ThemeContext } from 'src/contexts/theme';

interface BoxProps
  extends Partial<HTMLAttributes<HTMLDivElement>>,
    PropsWithChildren {}

const Box: FC<BoxProps> = ({ className, children, ...props }) => {
  const { presetColor } = useContext(ThemeContext);
  return (
    <div className={`magical${presetColor.name} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Box;
