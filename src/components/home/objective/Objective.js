import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/core';
import { DesignImage, DevelopImage, ConnectImage, TeachImage } from '../../../assets';

export const Objective = () => {
  return (
    <Box m={8} color={'gray.500'}>
      <Text fontSize={{ sm: '2xl', md: '3xl', lg: '4xl' }}>What do we do?</Text>
      <Box pt={4} display={{ lg: 'flex' }}>
        <Box width={{ lg: '30vw' }}>
          <Flex bg={{ xs: 'brand-red.50', lg: 'white' }} display={{ xs: 'flex', lg: 'block' }}>
            <Image
              boxShadow={{ lg: '4px 4px 6px 0px' }}
              bg="brand-red.400"
              mx={{ lg: 'auto' }}
              my={{ xs: ' auto' }}
              p={2}
              src={DevelopImage}
              size={{ xs: '12vh', lg: '10vw', xl: '150px' }}
              borderRadius="5%"></Image>

            <Box mx={{ lg: '5vw' }} px={{ xs: '4', lg: '0' }}>
              <Text fontSize={{ xs: 'md', md: 'xl' }} textAlign={{ lg: 'center' }} py={3}>
                Develop
              </Text>

              <Text fontSize={{ xs: 'sm', md: 'md' }} textAlign={{ lg: 'center' }} pb={2}>
                Building applications for various purposes serving a wide audience
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box width={{ lg: '30vw' }}>
          <Flex
            bg={{ xs: 'brand-blue.50', lg: 'white' }}
            display={{ xs: 'flex', lg: 'block' }}
            justify="space-between"
            direction="row-reverse">
            <Image
              boxShadow={{ lg: '4px 4px 6px 0px' }}
              bg="brand-blue.400"
              mx={{ lg: 'auto' }}
              my={{ xs: ' auto' }}
              p={2}
              src={ConnectImage}
              size={{ xs: '12vh', lg: '10vw', xl: '150px' }}
              borderRadius="5%"></Image>

            <Box mx={{ lg: '5vw' }} px={{ xs: '4', lg: '0' }}>
              <Text fontSize={{ xs: 'md', md: 'xl' }} textAlign={{ lg: 'center' }} py={3}>
                Connect
              </Text>

              <Text fontSize={{ xs: 'sm', md: 'md' }} textAlign={{ lg: 'center' }} pb={2}>
                Enabling meaningful conversations in a diverse environment
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box width={{ lg: '30vw' }}>
          <Flex bg={{ xs: 'brand-green.50', lg: 'white' }} display={{ xs: 'flex', lg: 'block' }}>
            <Image
              boxShadow={{ lg: '4px 4px 6px 0px' }}
              bg="brand-green.400"
              mx={{ lg: 'auto' }}
              my={{ xs: ' auto' }}
              p={2}
              src={TeachImage}
              size={{ xs: '12vh', lg: '10vw', xl: '150px' }}
              borderRadius="5%"></Image>

            <Box mx={{ lg: '5vw' }} px={{ xs: '4', lg: '0' }}>
              <Text fontSize={{ xs: 'md', md: 'xl' }} textAlign={{ lg: 'center' }} py={3}>
                Teach
              </Text>

              <Text fontSize={{ xs: 'sm', md: 'md' }} textAlign={{ lg: 'center' }} pb={2}>
                Deepening our understanding of technology by explaining ideas to peers
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box width={{ lg: '30vw' }}>
          <Flex
            bg={{ xs: 'brand-yellow.50', lg: 'white' }}
            display={{ xs: 'flex', lg: 'block' }}
            justify="space-between"
            direction="row-reverse">
            <Image
              boxShadow={{ lg: '4px 4px 6px 0px' }}
              bg="brand-yellow.400"
              mx={{ lg: 'auto' }}
              my={{ xs: ' auto' }}
              p={2}
              src={DesignImage}
              size={{ xs: '12vh', lg: '10vw', xl: '150px' }}
              borderRadius="5%"></Image>

            <Box mx={{ lg: '5vw' }} px={{ xs: '4', lg: '0' }}>
              <Text fontSize={{ xs: 'md', md: 'xl' }} textAlign={{ lg: 'center' }} py={3}>
                Design
              </Text>

              <Text fontSize={{ xs: 'sm', md: 'md' }} textAlign={{ lg: 'center' }} pb={2}>
                Guiding every part of our work from marketing to tech through "design with purpose"
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
