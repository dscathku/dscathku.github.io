import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/core';

import { ContentContainer } from '../../shared';
import { IconWithText } from './IconWithText';

import { DesignImage, DevelopImage, ConnectImage, TeachImage } from '../../../assets';

export const Objective = () => {
  const icons = [
    {
      icon: DevelopImage,
      iconBackgroundColor: 'brand-red.400',
      title: 'Develop',
      description: 'Building applications for various purposes serving a wide audience',
    },
    {
      icon: ConnectImage,
      iconBackgroundColor: 'brand-blue.400',
      title: 'Connect',
      description: 'Enabling meaningful conversations in a diverse environment',
    },
    {
      icon: TeachImage,
      iconBackgroundColor: 'brand-green.400',
      title: 'Teach',
      description: 'Deepening our understanding of technology by explaining ideas to peers',
    },
    {
      icon: DesignImage,
      iconBackgroundColor: 'brand-yellow.400',
      title: 'Design',
      description:
        'Guiding every part of our work from marketing to tech through "design with purpose"',
    },
  ];

  return (
    <ContentContainer>
      <Box color={'gray.500'}>
        <Text fontSize={{ xs: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}>What do we do?</Text>

        <Stack
          mt={4}
          display={{ lg: 'flex' }}
          flexDirection={{ lg: 'row' }}
          justifyContent={'space-between'}
          spacing={8}>
          {icons.map((props, index) => (
            <Box key={index} width={{ lg: '22.5%' }}>
              <IconWithText {...props} />
            </Box>
          ))}
        </Stack>
      </Box>
    </ContentContainer>
  );
};
