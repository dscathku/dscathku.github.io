import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/core';
import { LogoImage, DesignImage, DevelopImage, ConnectImage, TeachImage } from '../../../assets';

export const Objective = () => {
  return (
    <Box>
      <Box m={8} color={'gray.600'}>
        <Text fontSize="3xl">What do we do?</Text>
        <Box p={4} display={{ lg: 'flex' }}>
          <Box width={{ lg: '30vw' }} px={4}>
            <Flex display={{ xs: 'flex', lg: 'block' }}>
              <Image
                bg="brand-red.400"
                mx={{ lg: 'auto' }}
                my={{ xs: ' auto' }}
                src={DevelopImage}
                size={{ xs: '12vh', lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }}>
                <Text textAlign={{ lg: 'center' }} py={4} fontSize="lg">
                  Develop
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Building applications for various purposes serving a wide audience
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={{ lg: '30vw' }} px={4}>
            <Flex
              display={{ xs: 'flex', lg: 'block' }}
              justify="space-between"
              direction="row-reverse">
              <Image
                bg="brand-blue.400"
                mx={{ lg: 'auto' }}
                my={{ xs: ' auto' }}
                src={ConnectImage}
                size={{ xs: '12vh', lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }}>
                <Text textAlign={{ lg: 'center' }} py={4}>
                  Connect
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Enabling meaningful conversations in a diverse environment
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={{ lg: '30vw' }} px={4}>
            <Flex display={{ xs: 'flex', lg: 'block' }}>
              <Image
                bg="brand-green.400"
                mx={{ lg: 'auto' }}
                my={{ xs: ' auto' }}
                src={TeachImage}
                size={{ xs: '12vh', lg: '15vh' }}></Image>

              <Box px={{ xs: 5, lg: 0 }}>
                <Text textAlign={{ lg: 'center' }} py={4}>
                  Teach
                </Text>

                <Text textAlign={{ lg: 'center' }} py={4}>
                  Deepening our understanding of technology by explaining ideas to peers
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box width={{ lg: '30vw' }} px={4}>
            <Flex
              bg="brand-yellow.50"
              display={{ xs: 'flex', lg: 'block' }}
              justify="space-between"
              direction="row-reverse">
              <Image
                bg="brand-yellow.400"
                mx={{ lg: 'auto' }}
                my={{ xs: ' auto' }}
                src={DesignImage}
                size={{ xs: '12vh', lg: '10vw' }}></Image>

              <Box mx={{ lg: '5vw' }} px={{ xs: '4', lg: '0' }} bg="brand-yellow.100">
                <Text
                  fontSize={{ xs: 'md', md: 'lg', lg: 'xl' }}
                  textAlign={{ lg: 'center' }}
                  py={3}>
                  Design
                </Text>

                <Text fontSize={{ xs: 'sm', lg: 'md' }} textAlign={{ lg: 'center' }} pb={2}>
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
