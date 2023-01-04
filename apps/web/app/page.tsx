import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Introduction } from 'src/feature/landing/components/Introduction';
// import Overlay from 'src/components/Overlay';
import Box from 'src/shared/Box';
import Container from 'src/shared/Container';
import SectionWithParallax from 'src/shared/SectionWithParallax';

export default async function Page() {
  return (
    <>
      <main className='overflow-hidden'>
        <div
          style={{
            background:
              'linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center / cover no-repeat, url("/overlay.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
          className='static lg:fixed top-0 left-0 w-screen h-screen'>
          <Introduction />
        </div>
        <div className='h-0 lg:h-[105vh]' />
        <SectionWithParallax>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            explicabo perferendis voluptates cupiditate mollitia, esse itaque
            vero odio necessitatibus. Molestiae est dignissimos itaque minus
            explicabo! Aut corporis expedita a delectus?
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
          <div className='text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            molestiae, eaque aliquam vitae repellendus natus consequatur
            assumenda ex ducimus et est ipsa perferendis error beatae illo
            repudiandae eos aperiam quam.
          </div>
        </SectionWithParallax>
      </main>
    </>
  );
}
