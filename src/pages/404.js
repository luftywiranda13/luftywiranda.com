import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import Heading from '../components/Heading';
import Lead from '../components/Lead';
import TitleAndMetaTags from '../components/TitleAndMetaTags';

const NotFoundPage = ({ location }) => (
  <Container>
    <TitleAndMetaTags title="Page not found" url={location.pathname} />

    <header>
      <Heading is="h1">Page not found</Heading>

      <Lead>
        You may have mistyped the address or the page may have been removed.
      </Lead>
    </header>
  </Container>
);

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotFoundPage;
