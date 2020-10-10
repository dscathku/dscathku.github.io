import React from 'react';
import { Box } from '@chakra-ui/core';

export const ContentContainer = ({ children }) => {
  return (
    <Box mx={'auto'} width={{ xs: '96%', sm: '93%', md: '90%', lg: '80%', xl: '70%' }}>
      {children}
    </Box>
  );
};
