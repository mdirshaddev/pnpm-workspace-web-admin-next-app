'use client';

// React
import { Fragment, useContext } from 'react';

// React Icons
import { IoClose } from 'react-icons/io5';

// Class Utility
import clsx from 'clsx';

// Layout Context
import { SidebarContext } from '../contexts/sidebar'; // For Sidebar Control

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme'; // For themeing

// Shared Component
import Container from 'src/shared/components/Container';

interface SidebarProps {}

export default function Sidebar({}: SidebarProps): JSX.Element {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const { mode, presetColor } = useContext(ThemeContext);
  return (
    <Fragment>
      <div
        title='Mobile Navigation Sidebar'
        className={clsx(
          'transition-all fixed w-screen h-screen z-60 inset-0 flex flex-row',
          `${isOpen ? 'clip clip-circle-enlarge' : 'clip clip-circle-small'}`,
          // `${mode == 'dark' ? 'Dark' : 'Light'}`,
          `${presetColor.name}`
        )}>
        <Container
          className={clsx(
            `${isOpen ? 'flex' : 'hidden'}`,
            'w-full md:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto md: px-4 md:px-8 h-full'
          )}>
          <div
            className={clsx(
              `${isOpen ? 'flex' : 'hidden '}`,
              'w-full h-screen overflow-y-auto'
            )}>
            <div className='w-full flex flex-col items-start'>
              <div className='w-full h-20 flex flex-row items-center justify-end'>
                <div
                  onClick={toggleSidebar}
                  className={clsx('text-white p-2 rounded-md')}>
                  <IoClose className={`text-4xl text-white`} />
                </div>
              </div>
              <div className='w-full'></div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
