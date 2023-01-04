'use client';

import { ReactNode } from 'react';

interface OverlayProps {
  children: ReactNode;
}

const Overlay = (props: OverlayProps) => {
  return (
    <div
      style={{
        background:
          'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url("/overlay_2.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}
      className='static lg:fixed top-0 left-0 w-screen h-screen'>
      {props.children}
    </div>
  );
};

export default Overlay;
