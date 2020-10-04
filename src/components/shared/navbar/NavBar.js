import React, { forwardRef } from 'react';
import { Stack, Flex, Image, Link as ChakraLink, Text } from '@chakra-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import { LogoImage, FacebookIcon, InstagramIcon } from '../../../assets';

export const NavBar = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      px={[2, 4, 8]}
      py={3}
      color={'gray.600'}
      fontSize={['md', 'md', 'xl']}>
      <Stack isInline spacing={8} alignItems={'center'}>
        <Image src={LogoImage} width={'40px'} />
        <Text display={['none', 'none', 'block']}>Developer Student Club HKU</Text>
      </Stack>

      <Stack ml={2} isInline spacing={[4, 4, 8]} alignItems={'center'}>
        <RouterLink to={'/projects'} component={Link}>
          Projects
        </RouterLink>

        <RouterLink to={'/events'} component={Link}>
          Events
        </RouterLink>

        <RouterLink to={'/about'} component={Link}>
          About
        </RouterLink>

        <RouterLink to={'/facebook'} component={Link}>
          <FacebookIcon height={24} width={24} />
        </RouterLink>

        <RouterLink to={'/instagram'} component={Link}>
          <InstagramIcon height={24} width={24} />
        </RouterLink>
      </Stack>
    </Flex>
  );
};

const Link = forwardRef((props, ref) => (
  <ChakraLink
    ref={ref}
    color={'gray.600'}
    _hover={{ textDecoration: 'none', color: 'gray.800' }}
    {...props}
  />
));
