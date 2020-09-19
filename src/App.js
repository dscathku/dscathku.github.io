import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/core';
import Flex from '@chakra-ui/core/dist/Flex';

export const App = () => {
  return (
    <Stack spacing={4}>
      <Text fontSize={'3xl'}>hello world</Text>

      <Flex mx={10} justifyContent={'space-between'}>
        {['blue', 'red', 'yellow', 'green'].map((color, index) => (
          <Box key={index} w={'20%'} h={40} backgroundColor={`brand-${color}.400`} />
        ))}
      </Flex>
    </Stack>
  );
};
