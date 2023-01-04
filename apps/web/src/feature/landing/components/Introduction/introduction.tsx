'use client';

import { Fragment } from 'react';

import Box from 'src/shared/Box';
import Container from 'src/shared/Container';

export default function Introduction() {
  return (
    <Fragment>
      <Box
        style={{ color: 'transparent' }}
        className={`pt-[100px] text-black dark:text-white px-4`}>
        <Container className='max-w-8xl mx-auto px-4 md:px-8'></Container>
      </Box>
    </Fragment>
  );
}
