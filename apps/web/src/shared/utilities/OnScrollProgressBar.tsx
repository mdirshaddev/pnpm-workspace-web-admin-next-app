// React
import { useContext } from 'react';

// Personally Developed Hook
import { useScrollProgress } from '@mdirshaddev/hooks';

// Shared Context
import { ThemeContext } from 'src/shared/contexts/theme';

/**
 * A Progress bar build with personal react custom hooks
 * @returns JSX.Element
 * */
export default function OnScollProgressBar(): JSX.Element {
  const { presetColor } = useContext(ThemeContext);
  const pageYOffset = useScrollProgress();
  return (
    <div
      style={{
        height: '3px',
        transform: `scaleX(${pageYOffset}) translateZ(0px)`,
        transformOrigin: '0% center',
        background: `linear-gradient(to right, ${presetColor.main} ${
          pageYOffset * 100
        }%, #eee ${pageYOffset * 100}%)`
      }}
      className='fixed  top-0 left-0 right-0 z-50'
    />
  );
}
