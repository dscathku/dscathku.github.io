import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/core';

export const App = () => {
  return (
    <Stack spacing={4}>
      <Text fontSize={'3xl'}>hello world</Text>

      <Box>
        {['blue', 'red', 'yellow', 'green'].map((color, index) => (
          <Box key={index} w={'100%'} h={10} backgroundColor={`brand-${color}.400`} />
        ))}
      </Box>

      <Box>hello world again</Box>
    </Stack>
  );
};
