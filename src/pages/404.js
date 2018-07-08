import React, { Fragment } from 'react';
import { Container, Heading, Text } from 'rebass';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

export default () => (
  <Fragment>
    <TitleAndMetaTags title="Page not found" url="/404" />

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
