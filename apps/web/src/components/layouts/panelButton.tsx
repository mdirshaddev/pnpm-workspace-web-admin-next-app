'use client';

import type { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { useContext } from 'react';

import clsx from 'clsx';

import { ThemeContext } from 'src/contexts/theme';

interface ButtonPanelProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {}

const ButtonPanel: FC<ButtonPanelProps> = ({ className }): JSX.Element => {
  const { mode, presetColor } = useContext(ThemeContext);
  return (
    <button className={clsx(className, `${presetColor.name}`)}>
      {/* SVG Icon */}
    </button>
  );
};
