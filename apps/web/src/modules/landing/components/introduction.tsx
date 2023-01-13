'use client';

import { Fragment, useContext } from 'react';

import { BsMouse } from 'react-icons/bs';

import clsx from 'clsx';

import Overlay from './Overlay';

// Shared Component
import { Container } from 'src/shared/components';

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme';

import { HiOutlineNewspaper } from 'react-icons/hi';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { FiGithub } from 'react-icons/fi';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaAws, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiTerraform,
  SiGithubactions
} from 'react-icons/si';

/**
 * The function returns a fragment that contains an overlay component.
 * @returns A fragment.
 */
export default function Introduction() {
  const { mode } = useContext(ThemeContext);
  return (
    <Fragment>
      <Overlay>
        <Container className='w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto md: px-4 md:px-8 mt-[70px] md:mt-20 py-4'>
          <div
            title='Introduction Text'
            className='flex flex-col lg:flex-row items-center py-4'>
            <div className='w-full lg:w-1/2'>
              <div className='text-4xl text-black dark:text-white'>Hi, I'm</div>
              <div className=''>
                <p className='magicalDefault text-5xl md:text-6xl lg:text-7xl font-bold'>
                  Md Irshad
                </p>
                <p className='text-black dark:text-white font-bold text-2xl md:text-3xl'>
                  Full-Stack Developer
                </p>
              </div>
              <div className='py-4'>
                <p className='text-black dark:text-white'>
                  I am eager to learn new technologies and tools to keep myself
                  updated and also to meet the recent market demand
                </p>
              </div>
              <div>
                <div className='flex flex-row flex-wrap items-center pt-2'>
                  <button className='p-2 bg-black dark:bg-white font-bold text-white dark:text-black rounded-sm mr-4'>
                    Read the blog
                  </button>
                  <button className='p-2 bg-black dark:bg-white font-bold text-white dark:text-black rounded-sm'>
                    About Me
                  </button>
                </div>
                <div className='flex flex-row flex-wrap items-center pt-4'>
                  <div className='flex flex-row items-center py-2'>
                    <HiOutlineNewspaper className='text-black dark:text-white text-3xl' />
                    <span className='block text-black dark:text-white font-bold px-2 text-lg md:text-xl'>
                      Resume
                    </span>
                  </div>
                  <div className='flex flex-row items-center py-2'>
                    <TfiTwitterAlt className='text-black dark:text-white text-3xl' />{' '}
                    <span className='block text-black dark:text-white font-bold px-2 text-lg md:text-xl'>
                      @mdirshaddev
                    </span>
                  </div>
                  <div className='flex flex-row items-center py-2'>
                    <FiGithub className='text-black dark:text-white text-3xl' />{' '}
                    <span className='block text-black dark:text-white font-bold px-2 text-lg md:text-xl'>
                      mdirshaddev
                    </span>
                  </div>
                </div>
                <div>
                  <div className='text-black dark:text-white font-bold pt-4 text-2xl lg:text-3xl'>
                    Current Favourite Stack
                  </div>
                  <div className='flex flex-row flex-wrap py-2'>
                    <FaNodeJs className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <TbBrandNextjs className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <FaReact className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <SiTypescript className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <SiTailwindcss className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <FaAws className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <SiTerraform className='text-black dark:text-white text-3xl mr-2 mt-2' />
                    <SiGithubactions className='text-black dark:text-white text-3xl mr-2 mt-2' />
                  </div>
                </div>
              </div>
            </div>
            <svg
              width='1890'
              height='1344'
              viewBox='0 0 1890 1344'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute bottom-0 right-6 translate-y-[37%] transform-gpu w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px] z-[-1] opacity-70 dark:opacity-30'>
              <path
                d='M473 468V757.944L709 639.944V351.5M473 468L237 351.5M473 468L709 351.5M473 468V756.444L237 874.444M473 468L237 352L1 468M473 468L237 584.5M709 351.5L473 235.5L237 351.5M709 351.5V641.444M709 351.5L473 235L709 119L945 235L709 351.5ZM237 351.5V118M237 584.5V874.444M237 584.5L1 468M237 874.444L1 756.444V468M237 118L473 2L709 118L473 234.5L237 118ZM1181 587V352M1181 352L945 236L709 352M1181 352L945 468.5M709 352V640.444L892.5 729.5M709 352L945 468.5M945 468.5V701.5M1417 990.944V702.5M1417 702.5L1181 586.5L945 702.5L1181 819M1417 702.5L1181 819M1417 702.5V992.444M1417 702.5L1181 586L1417 470L1653 586L1417 702.5ZM1181 819L945 703L709 819M1181 819L945 935.5M945 935.5V1225.44L709 1107.44V819M945 935.5L709 819M1181 1052.5V1342.44M1181 1052.5L945 936M1181 1052.5L1417 936M1181 1342.44L1417 1224.44V936M1181 1342.44L945 1224.44V936M1417 936L1181 820L945 936M1653 819.5V1109.44M1653 819.5L1417 703M1653 819.5L1889 703M1653 1109.44L1889 991.444V703M1653 1109.44L1417 991.444V703M1889 703L1653 587L1417 703'
                stroke='url(#paint0_linear_606_425)'
                stroke-width='2'></path>
              <defs>
                <linearGradient
                  id='paint0_linear_606_425'
                  x1='1888.85'
                  y1='711.272'
                  x2='752.465'
                  y2='-321.779'
                  gradientUnits='userSpaceOnUse'>
                  <stop
                    className='text-primary-400 dark:text-primary-400'
                    stop-color='currentColor'></stop>
                  <stop
                    className='text-primary-300 dark:text-primary-300'
                    offset='0.5'
                    stop-color='currentColor'></stop>
                  <stop
                    className='text-primary-300 dark:text-primary-200'
                    offset='1'
                    stop-color='currentColor'></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <a className='fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-10 cursor-pointer rounded-md transition-colors hover:text-primary-300 focus-visible:text-primary-300'>
              <BsMouse
                className={clsx(
                  'text-4xl animate-bounce',
                  `${mode === 'dark' ? 'TextLight' : 'TextDark'}`
                )}
              />
            </a>
          </div>
        </Container>
      </Overlay>
    </Fragment>
  );
}
