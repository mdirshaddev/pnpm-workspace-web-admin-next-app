'use client';

import clsx from 'clsx';
// React Typings
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

// React
import { useContext } from 'react';

import { ThemeContext } from 'src/shared/contexts/theme';

interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>>,
    PropsWithChildren {}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps): JSX.Element {
  const { mode, themeColorPreset, themeContrast } = useContext(ThemeContext);
  return (
    <button
      className={clsx(
        `${themeContrast ? '' : ''}`,
        `${mode ? '' : ''}`,
        `${className}`,
        `${themeColorPreset ? '' : ''}`
      )}
      {...props}>
      {children}
    </button>
  );
}
