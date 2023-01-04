'use client';

import { ThemeContext } from 'src/contexts/theme';
import { ButtonHTMLAttributes, PropsWithChildren, useContext } from 'react';

import clsx from 'clsx';

import { BiGhost, BiAbacus } from 'react-icons/bi';
import { IconType } from 'react-icons';

interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>>,
    PropsWithChildren {}

// TODO: Implement the class control logic with clsx
const Button = ({ children, className, ...props }: ButtonProps) => {
  const { mode, themeColorPreset, themeContrast } = useContext(ThemeContext);
  return (
    <button
      className={`${themeContrast ? '' : ''} ${mode ? '' : ''} ${
        themeColorPreset ? '' : ''
      } ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
