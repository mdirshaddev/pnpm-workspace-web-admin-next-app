'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Fragment, useContext } from 'react';
import { RxDashboard } from 'react-icons/rx';
import Container from 'src/shared/Container';

// Contexts
import { ThemeContext } from 'src/contexts/theme';
import { ViewContext } from 'src/contexts/views';

const OnScrollProgressBar = dynamic(
  () => {
    return import('src/shared/OnScrollProgressBar');
  },
  { ssr: false }
);

/**
 * It's a function that returns a fragment that contains a navbar with a logo and a search widget.
 * @returns A Fragment with a navbar.
 */
function NavBar() {
  const router = useRouter();
  const { mode, onChangeColorPreset, presetColor } = useContext(ThemeContext);

  const { inView } = useContext(ViewContext);
  return (
    <Fragment>
      <Container className=''>
        <OnScrollProgressBar />
        <nav
          className={`transition-all fixed inset-0 backdrop-blur bg-[rgba(249, 250, 251, 0.8)] ${
            inView
              ? 'bg-[#ffffff] pt-4 pb-4 h-20 shadow-2xl'
              : 'bg-transparent h-24'
          } w-full flex flex-row items-center justify-between px-4 md:px-12 z-40`}>
          <div className='flex flex-col'>
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
                <span
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
                    textTransform: 'capitalize',
                    padding: '0px 8px',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontFamily: '"Public Sans", sans-serif',
                    backgroundColor: '#000',
                    fontWeight: 700
                  }}>
                  v0.0.0
                </span>
              </div>
            </div>
            {/* <div className='title hidden lg:block text-md text-white'>
              Full Stack Developer
            </div> */}
          </div>
          <div className='flex flex-row items-center'>
            {/* Search Widget */}
            <div className='w-10 h-full flex flex-col items-center justify-center'>
              {/* <RxDashboard
                onClick={() => {
                  onChangeColorPreset('orange');
                  console.log(presetColor);
                }}
                className='transition-all w-8 h-8 cursor-pointer active:w-6 active:h-6 text-white'
              /> */}
            </div>
          </div>
        </nav>
      </Container>
    </Fragment>
  );
}

export default NavBar;
