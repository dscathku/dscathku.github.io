import React from 'react';
import { Box, Text, Flex, Image, Stack } from '@chakra-ui/core';

export const IconWithText = ({ icon, iconBackgroundColor, title, description }) => {
  return (
    <Flex flexDirection={{ xs: 'row', lg: 'column' }} alignItems={'center'}>
      <Box
        flex={'none'}
        width={{ xs: '20%', lg: '40%' }}
        maxWidth={'100px'}
        boxShadow={{ xs: '2px 2px 5px', lg: '4px 4px 6px' }}
        bg={iconBackgroundColor}
        borderRadius="5%"
        p={2}>
        <Image src={icon} />
      </Box>

      <Stack
        mt={{ lg: 4 }}
        px={{ xs: 4, lg: 0 }}
        textAlign={{ lg: 'center' }}
        spacing={{ xs: 1, lg: 3 }}>
        <Text fontSize={{ xs: 'md', md: 'xl' }}>{title}</Text>

        <Text fontSize={{ xs: 'sm', md: 'md' }}>{description}</Text>
      </Stack>
    </Flex>
  );
};
