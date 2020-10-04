import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/core';
import { LogoImage } from '../../../assets';

export const Objective = () => {
  return (
    <Box m={8} color={'gray.600'}>
      <Text fontSize="3xl">What do we do?</Text>
      <Flex px={4} py={4} justify={'space-around'}>
        <Box px={4} bg="brand-red.50">
          <Box bg="brand-red.100">
            <Flex justify="space-around">
              <Image src={LogoImage} size="100px"></Image>
            </Flex>
            <Text textAlign="center" py={4} fontSize="lg">
              Develop
            </Text>
            <Text textAlign="center" py={4}>
              Building applications for various purposes serving a wide audience
            </Text>
          </Box>
        </Box>

        <Box px={4} bg="brand-blue.50">
          <Box bg="brand-blue.100">
            <Flex justify="space-around">
              <Image src={LogoImage} size="100px"></Image>
            </Flex>
            <Text textAlign="center" py={4}>
              Connect
            </Text>
            <Text textAlign="center" py={4}>
              Enabling meaningful conversations in a diverse environment
            </Text>
          </Box>
        </Box>

        <Box px={4} bg="brand-green.50">
          <Box bg="brand-green.100">
            <Flex justify="space-around">
              <Image src={LogoImage} size="100px"></Image>
            </Flex>
            <Text textAlign="center" py={4}>
              Teach
            </Text>
            <Text textAlign="center" py={4}>
              Deepening our understanding of technology by explaining ideas to peers
            </Text>
          </Box>
        </Box>

        <Box px={4} bg="brand-yellow.50">
          <Box bg="brand-yellow.100">
            <Flex justify="space-around">
              <Image src={LogoImage} size="100px"></Image>
            </Flex>
            <Text textAlign="center" py={4}>
              Design
            </Text>
            <Text textAlign="center" py={4}>
              Guiding every part of our work from marketing to tech through "design with purpose"
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
