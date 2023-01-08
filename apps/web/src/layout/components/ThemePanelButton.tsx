'use client';

// React Typings
import type { ButtonHTMLAttributes } from 'react';

// React
import { useContext } from 'react';

// React Icons
import { GoSettings } from 'react-icons/go';

// Class Utility
import clsx from 'clsx';

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme';

interface ThemePanelButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function ThemePanelButton({
  className
}: ThemePanelButtonProps): JSX.Element {
  const { mode, presetColor, onPanelControl } = useContext(ThemeContext);
  return (
    <button
      role='button'
      title='Theme panel button'
      onClick={onPanelControl}
      className={clsx(className, `${presetColor.name}`)}>
      <GoSettings className={`text-4xl text-white`} />
    </button>
  );
}
