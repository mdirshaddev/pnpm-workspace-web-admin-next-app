'use client';

// React
import { Fragment, useContext, useState, useRef, useEffect } from 'react';

import clsx from 'clsx';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

// Contexts
import { ViewContext } from 'src/contexts/views';
import { ThemeContext } from 'src/contexts/theme';

// React Icons
import { RxGithubLogo } from 'react-icons/rx';

// Components
import Sidebar from './sidebar';
import Container from 'src/shared/Container';

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

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { inView } = useContext(ViewContext);
  const { themeColorPreset, presetColor } = useContext(ThemeContext);

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let ignore: boolean = false;
    if (!ignore) {
      let styleTransition = headerRef.current?.style.transition;
      if (inView) {
        styleTransition =
          'height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
      } else {
        styleTransition = '';
      }
    }
    return () => {
      ignore = true;
    };
  }, [inView]);
  return (
    <>
      <header
        ref={headerRef}
        className={`transition-all fixed inset-x-0 top-0 w-full flex flex-row items-center z-30 ${
          inView
            ? 'bg-[#161c24cc] backdrop-blur h-[72px]'
            : 'bg-transparent h-20'
        }`}>
        <Container className='w-full md:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto md: px-4 md:px-8 flex flex-row items-center justify-between h-full'>
          <div className='flex flex-row items-center'>
            <div
              className='pl-2 cursor-pointer'
              onClick={() => router.push('/')}>
              <Image
                src={'/logo.svg'}
                width={55}
                height={55}
                quality={100}
                alt='Profile Picture'
              />
            </div>
            <div className='ml-2' onClick={() => router.push('/')}>
              {/* TODO: Need to start using Theme context in each individual components */}
              <VersionTagBox />
            </div>
          </div>

          <div className='flex flex-row items-center'>
            <nav className='hidden lg:block'>
              {/* TODO: Styling is needed */}
              <ul className='flex flex-row items-center mr-12'>
                {NavLinkList.map(({ name, path }) => (
                  <Fragment key={name}>
                    <li className='text-black dark:text-white px-6 flex flex-row items-center'>
                      <span
                        className={`${
                          pathname == path
                            ? `block w-2 h-2 rounded-full ${presetColor.name} mr-4`
                            : ''
                        }`}
                      />
                      <Link
                        className={`${
                          pathname === path ? `Text${presetColor.name}` : ''
                        }`}
                        href={path}>
                        {name}
                      </Link>
                    </li>
                  </Fragment>
                ))}
              </ul>
            </nav>
            <a
              className={clsx(`bg-black rounded-lg p-2`)}
              title='Repository'
              target={'_blank'}
              href={'https://github.com/mdirshaddev/mdirshaddev.github.io'}>
              <RxGithubLogo className={`text-white text-3xl`} />
            </a>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className='ml-4 lg:hidden lg:ml-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                aria-hidden='true'
                role='img'
                className='text-white text-4xl'
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
          </div>
        </Container>
        <div className='' />
      </header>
      {/* TODO: Need Animation Transition */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

function VersionTagBox() {
  const { mode, presetColor } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: '24px',
        minWidth: '22px',
        lineHeight: 0,
        borderRadius: '6px',
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: '0px 8px',
        color: `#61f3f3`,
        fontSize: '0.75rem',
        fontFamily: '"Public Sans", sans-serif',
        backgroundColor: `#00b8d929`,
        fontWeight: 700
      }}>
      v0.0.0
    </div>
  );
}
