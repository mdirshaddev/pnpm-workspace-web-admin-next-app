import { Box, Typography } from 'src/shared/components';

import { Introduction } from 'src/modules/landing/components';
import SectionWithParallax from 'src/modules/landing/components/SectionWithParallax';

export default async function Page() {
  return (
    <main className='overflow-hidden' title='Homepage'>
      <Introduction />
      <div className='h-[105vh]' />
      <SectionWithParallax>
        <Box>
          <Typography></Typography>
        </Box>
      </SectionWithParallax>
    </main>
  );
}
