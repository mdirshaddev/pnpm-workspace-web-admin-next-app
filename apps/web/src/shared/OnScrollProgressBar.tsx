import { useScrollProgress } from '@mdirshaddev/hooks';

/* A React component that is using a custom hook called useScrollProgress. */
const OnScollProgressBar = () => {
  const pageYOffset = useScrollProgress();
  return (
    <div
      style={{
        height: '3px',
        transform: `scaleX(${pageYOffset}) translateZ(0px)`,
        transformOrigin: '0% center',
        background: `linear-gradient(to right, #7200da ${
          pageYOffset * 100
        }%, #eee ${pageYOffset * 100}%)`
      }}
      className='fixed  top-0 left-0 right-0 z-50'
    />
  );
};

export default OnScollProgressBar;
