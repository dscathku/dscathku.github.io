import React from 'react';

import { Layout } from '../shared/layout';
import { NotFound404 } from '../shared/not-found-404';

export const EventsPage = () => {
  return (
    <Layout>
      <NotFound404 isUnBuiltPage />
    </Layout>
  );
};
