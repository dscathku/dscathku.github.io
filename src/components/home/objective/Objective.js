import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/core';
import { LogoImage } from '../../../assets';

export const Objective = () => {
  return (
    <Box>
      <Box m={8} color={'gray.600'}>
        <Text fontSize="3xl">What do we do?</Text>
        <Box
          p={4}
          display={{ xs: 'block', lg: 'flex' }}
          bg="gray.100"
          justify={{ sm: 'space-around', md: 'space-between' }}>
          <Box px={4} bg="brand-red.50">
            <Box bg="brand-red.100">
              <Flex justify={{ lg: 'space-around' }}>
                <Image p={{ xs: 7 }} src={LogoImage} size="100px"></Image>
              </Flex>
              <Text textAlign={{ lg: 'center' }} py={4} fontSize="lg">
                Develop
              </Text>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Building applications for various purposes serving a wide audience
              </Text>
            </Box>
          </Box>

          <Box px={4} bg="brand-blue.50">
            <Box bg="brand-blue.100">
              <Flex justify={{ lg: 'space-around' }}>
                <Image src={LogoImage} size="100px"></Image>
              </Flex>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Connect
              </Text>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Enabling meaningful conversations in a diverse environment
              </Text>
            </Box>
          </Box>

          <Box px={4} bg="brand-green.50">
            <Box bg="brand-green.100">
              <Flex justify={{ lg: 'space-around' }}>
                <Image src={LogoImage} size="100px"></Image>
              </Flex>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Teach
              </Text>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Deepening our understanding of technology by explaining ideas to peers
              </Text>
            </Box>
          </Box>

          <Box px={4} bg="brand-yellow.50">
            <Box bg="brand-yellow.100">
              <Flex justify={{ lg: 'space-around' }}>
                <Image src={LogoImage} size="100px"></Image>
              </Flex>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Design
              </Text>
              <Text textAlign={{ lg: 'center' }} py={4}>
                Guiding every part of our work from marketing to tech through "design with purpose"
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Testing out responsive design */}
      <Box bg="gray.100" display={['flex', 'block', 'flex', 'block']}>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
      </Box>
    </Box>
  );
};
