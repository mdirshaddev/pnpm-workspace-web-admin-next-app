'use client';

import Link from 'next/link';

import { Fragment, Dispatch, SetStateAction } from 'react';

import clsx from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavLinkList = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Blogs',
    path: '/blogs'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Libraries',
    path: '/libraries'
  }
];

export default function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <>
      <div
        className={clsx(
          'transition-all fixed w-screen h-screen z-50 inset-0 flex flex-row',
          `${props.isOpen ? '-translate-x-0' : '-translate-x-full'}`
        )}>
        <div
          style={{
            transform: 'none',
            transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms'
          }}
          className='w-5/6 h-screen bg-white px-4 py-2 overflow-y-auto'>
          {/* Sidebar */}
          <div className='flex flex-col items-start'>
            <div>{/* Logo Content */}</div>
            <div>
              {/* Navigation links */}
              {/* TODO: Styling is needed */}
              <ul className='flex flex-col items-start'>
                {NavLinkList.map(({ name, path }) => (
                  <Fragment key={name}>
                    <li className='text-black dark:text-white'>
                      <Link href={path}>{name}</Link>
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='w-1/6 bg-[#1d1d1d50] h-screen'>
          {/* Backdrop */}
          <div
            onClick={() => props.setIsOpen(false)}
            className='w-full bg-[#1d1d1da6] h-screen'
          />
        </div>
      </div>
    </>
  );
}
