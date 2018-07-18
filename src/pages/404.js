import React from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Lead from '../components/Lead';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

export default ({ location }) => (
  <Container>
    <TitleAndMetaTags title="Page not found" url={location.pathname} />

    <Heading is="h1">Page not found</Heading>

    <Lead>
      You may have mistyped the address or the page may have been removed.
    </Lead>
  </Container>
);
