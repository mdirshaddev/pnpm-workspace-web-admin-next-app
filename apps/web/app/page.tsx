import { Box, Typography } from 'src/shared/components';

import {
  Introduction,
  SectionWithParallax
} from 'src/modules/landing/components';

export default async function Page() {
  return (
    <main className='overflow-hidden' title='Homepage'>
      <Introduction />
      <div className='h-screen' />
      <SectionWithParallax>
        <Box>
          <Typography></Typography>
        </Box>
      </SectionWithParallax>
    </main>
  );
}
