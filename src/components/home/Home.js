import React from 'react';

import { Stack } from '@chakra-ui/core';

import { Layout } from '../shared';
import { Jumbotron } from './jumbotron';
import { Event } from './event';
import { Purpose } from './purpose';
import { Objective } from './objective';
import { Project } from './project';

export const Home = () => {
  return (
    <Layout>
      <Stack spacing={4}>
        <Jumbotron />

        <Event />

        <Purpose />

        <Objective />

        {/* todo: uncomment when there is a project */}
        {/*<Project/>*/}
      </Stack>
    </Layout>
  );
};
