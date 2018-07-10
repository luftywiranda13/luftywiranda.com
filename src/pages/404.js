import React from 'react';
import { Container, Heading, Text } from 'rebass';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { lineHeights } from '../theme';

export default ({ location }) => (
  <Container py={4}>
    <TitleAndMetaTags title="Page not found" url={location.pathname} />

    <Heading is="h1" mb={3} color="black87" lineHeight={lineHeights.compact}>
      Page not found
    </Heading>

    <Text is="p" mt={3} mb={3} color="black87" lineHeight={lineHeights.loose}>
      You may have mistyped the address or the page may have been removed.
    </Text>
  </Container>
);
