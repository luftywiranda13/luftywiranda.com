import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Heading, Text } from 'rebass';

export default () => (
  <Fragment>
    <Helmet defer={false} title="Page not found" />

    <Container is="section" py={4}>
      <Heading is="h1" mb={3}>
        Page not found
      </Heading>

      <Text is="p" mt={3} mb={3}>
        You may have mistyped the address or the page may have been removed.
      </Text>
    </Container>
  </Fragment>
);
