import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

import { BannerImage } from '../../../assets/images';

export const NotFound404 = ({ isUnBuiltPage }) => {
  const history = useHistory();

  const onClick = () => {
    history.push('/');
  };

  return (
    <Flex height={'90vh'} direction={'column'} alignItems={'center'} justifyContent={'center'}>
      <Image src={BannerImage} alt={'banner'} width={'300px'} />

      <Text mt={4} fontSize={['xl', 'xl', '2xl']}>
        {isUnBuiltPage
          ? `Sorry, this page is still being built.`
          : `Sorry, this page cannot be found.`}
      </Text>

      <Button mt={4} variantColor={'brand-blue'} onClick={onClick}>
        Go back home
      </Button>
    </Flex>
  );
};
