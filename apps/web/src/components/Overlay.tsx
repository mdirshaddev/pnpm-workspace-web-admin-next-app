'use client';

import { BiMouse } from 'react-icons/bi';

function Overlay() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}>
      <a
        href=''
        style={{
          position: 'absolute',
          bottom: 40,
          left: 32,
          fontSize: '13px'
        }}>
        mdirshaddev
        <br />
        personal portfolio
      </a>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%,-50%,0)'
        }}>
        <h1
          className='text-5xl md:text-7xl'
          style={{
            margin: 0,
            padding: 0,
            fontWeight: 500,
            letterSpacing: '-0.05em'
          }}>
          mdirshaddev
        </h1>
      </div>
      <div
        title='Scroll to see section'
        className='animate-bounce absolute bottom-10 left-1/2 -translate-x-1/2 z-10'>
        <BiMouse className='text-white text-4xl' />
      </div>
      <div className='text-white absolute bottom-10 right-8 text-md'>
        {new Date().toDateString()}
      </div>
    </div>
  );
}

export default Overlay;
