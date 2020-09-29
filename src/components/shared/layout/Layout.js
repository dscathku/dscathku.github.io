import React, { useRef } from 'react';
import { Box } from '@chakra-ui/core';

import { NavBar } from '../navbar';
import { useComponentBox } from '../../../hooks/useComponentBox';

export const Layout = ({ children }) => {
  const navBarContainerRef = useRef(null);
  const { height } = useComponentBox(navBarContainerRef);
  const defaultHeight = 75;

  return (
    <Box minH={'100vh'} color={'gray.900'}>
      {/* navbar */}
      <Box
        ref={navBarContainerRef}
        position={'fixed'}
        w={'full'}
        top={0}
        left={0}
        backgroundColor={'white'}>
        <NavBar />
      </Box>

      {/* page components */}
      <Box key={`box-${height || defaultHeight}`} marginTop={`${height || defaultHeight}px`}>
        {children}
      </Box>
    </Box>
  );
};
