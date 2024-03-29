import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>NOT FOUND</h1>
      <p>Oops, you just hit a route that doesn&#39;t exist...</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
