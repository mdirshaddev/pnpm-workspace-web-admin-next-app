import { Introduction } from 'src/feature/landing/components/Introduction';
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
        <SectionWithParallax></SectionWithParallax>
      </main>
    </>
  );
}
