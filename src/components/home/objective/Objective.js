import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/core';
import { LogoImage } from '../../../assets';

export const Objective = () => {
  return (
    <Box>
      <Box m={8} color={'gray.600'}>
        <Text fontSize="3xl">What do we do?</Text>
        <Box p={4} display={{ lg: 'flex' }} bg="gray.100">
          <Box width={{ lg: '30vw' }} px={4} bg="brand-red.50">
            <Flex bg="brand-red.100" display={{ xs: 'flex', lg: 'block' }}>
              <Image
                ml={{ lg: 'auto' }}
                mr={{ lg: 'auto' }}
                src={LogoImage}
                width={{ xs: '20vw', lg: '15vw' }}
                height={{ lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }} bg="brand-red.200">
                <Text textAlign={{ lg: 'center' }} py={4} fontSize="lg">
                  Develop
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Building applications for various purposes serving a wide audience
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={{ lg: '30vw' }} px={4} bg="brand-blue.50">
            <Flex
              bg="brand-blue.100"
              display={{ xs: 'flex', lg: 'block' }}
              justify="space-between"
              direction="row-reverse">
              <Image
                ml={{ lg: 'auto' }}
                mr={{ lg: 'auto' }}
                src={LogoImage}
                width={{ xs: '20vw', lg: '15vw' }}
                height={{ lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }} bg="brand-blue.200">
                <Text textAlign={{ lg: 'center' }} py={4}>
                  Connect
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Enabling meaningful conversations in a diverse environment
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={{ lg: '30vw' }} px={4} bg="brand-green.50">
            <Flex bg="brand-green.100" display={{ xs: 'flex', lg: 'block' }}>
              <Image
                ml={{ lg: 'auto' }}
                mr={{ lg: 'auto' }}
                src={LogoImage}
                width={{ xs: '20vw', lg: '15vw' }}
                height={{ lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }} bg="brand-green.200">
                <Text textAlign={{ lg: 'center' }} py={4}>
                  Teach
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Deepening our understanding of technology by explaining ideas to peers
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={{ lg: '30vw' }} px={4} bg="brand-yellow.50">
            <Flex
              bg="brand-yellow.100"
              display={{ xs: 'flex', lg: 'block' }}
              justify="space-between"
              direction="row-reverse">
              <Image
                ml={{ lg: 'auto' }}
                mr={{ lg: 'auto' }}
                src={LogoImage}
                width={{ xs: '20vw', lg: '15vw' }}
                height={{ lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }} bg="brand-yellow.200">
                <Text textAlign={{ lg: 'center' }} py={4}>
                  Design
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Guiding every part of our work from marketing to tech through "design with
                  purpose"
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      {/* Testing out responsive design */}
      <Box px={4} bg="brand-yellow.50">
        <Flex bg="brand-yellow.100" justify="space-between">
          <Image bg="gray.300" src={LogoImage} size="100px"></Image>
          <Image bg="gray.300" src={LogoImage} size="100px"></Image>

          <Box>
            <Text>I'm here to screw you up!</Text>
            <Text>Now you know!</Text>
          </Box>
        </Flex>
      </Box>

      {/* <Box px={4} bg="brand-yellow.50">
        <Flex bg="brand-yellow.100" justify = "space-around">
          <Flex bg = "brand-yellow.200">
            
            <Image bg = "gray.300" src = {LogoImage} size="100px"></Image>
            
            <Box px = {{xs: 5, lg: 0}}>
              <Text py = {4}>
                Design
              </Text>
              <Text py = {4}>
                Guiding every part of our work from marketing to tech through "design with purpose"
              </Text>
            </Box>

          </Flex>
        </Flex>
      </Box> */}

      <Flex bg="gray.100" justify="space-between">
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
        <Text>Trying out chakra-ui responsive design</Text>
      </Flex>
    </Box>
  );
};
