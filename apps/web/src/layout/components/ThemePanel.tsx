'use client';

// React
import { Fragment, useContext } from 'react';

// Class Utility
import clsx from 'clsx';

// Shared Component
import { ThemeContext } from 'src/shared/contexts/theme';

interface ThemePanelProps {}

export default function ThemePanel({}: ThemePanelProps): JSX.Element {
  const { mode, panelSwitch, onPanelControl, onToggleMode } =
    useContext(ThemeContext);
  return (
    <Fragment>
      <div
        title='Theme panel'
        className={clsx(
          'transition-all fixed  h-screen z-60 top-0 right-0 bottom-0 flex flex-row',
          `${panelSwitch ? 'translate-x-0' : 'translate-x-full'}`
        )}>
        <div className='w-[calc(100vw-300px)] bg-transparent h-screen'>
          <div
            onClick={onPanelControl}
            className='w-full bg-transparent h-screen transition-all'
          />
        </div>
        <div
          style={{
            transform: 'none',
            transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
          }}
          className={clsx(
            'w-[300px] h-screen backdrop-blur-md px-4 py-2 overflow-y-auto',
            `${panelSwitch ? 'shadow-themePanelDark' : ''}`,
            `${mode === 'dark' ? 'Dark' : 'Light'}`
          )}>
          <div className='flex flex-col items-start'>
            <div>
              <button
                className='text-green-500 font-bold'
                onClick={() => onToggleMode('light')}>
                Light
              </button>
              <button
                className='text-green-500 font-bold'
                onClick={() => onToggleMode('dark')}>
                Dark
              </button>
            </div>
            <div>
              <ul className='flex flex-col items-start'></ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
