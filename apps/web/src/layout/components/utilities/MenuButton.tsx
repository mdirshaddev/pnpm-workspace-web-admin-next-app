// React
import { useContext } from 'react';

// Class Utility
import clsx from 'clsx';

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme';
import { SidebarContext } from 'src/layout/contexts/sidebar';

interface MenuButtonProps {}

export default function MenuButton({}: MenuButtonProps): JSX.Element {
  const { toggleSidebar } = useContext(SidebarContext);
  const { mode, presetColor } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleSidebar}
      className={clsx(
        'transition-all block md:hidden p-2 rounded-md active:scale-95'
      )}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        aria-hidden='true'
        role='img'
        className={`text-4xl ${mode === 'dark' ? 'text-white' : 'text-black'}`}
        width='1em'
        height='1em'
        viewBox='0 0 24 24'>
        <circle cx='4' cy='12' r='1' fill='currentColor'></circle>
        <rect
          width='14'
          height='2'
          x='7'
          y='11'
          fill='currentColor'
          rx='.94'
          ry='.94'></rect>
        <rect
          width='18'
          height='2'
          x='3'
          y='16'
          fill='currentColor'
          rx='.94'
          ry='.94'></rect>
        <rect
          width='18'
          height='2'
          x='3'
          y='6'
          fill='currentColor'
          rx='.94'
          ry='.94'></rect>
      </svg>
    </button>
  );
}
