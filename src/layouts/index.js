import 'sanitize.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Provider as P } from 'rebass';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import siteConstants from '../site-constants';
import theme from '../theme';

const Provider = styled(P)`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

const IndexLayout = ({ children }) => (
  <Provider theme={theme}>
    <Navbar
      title={siteConstants.siteTitle}
      items={[
        { label: 'Blog', href: '/blog/' },
        { label: 'Projects', href: '/projects/' },
        { label: 'Contact', href: '/contact/' },
      ]}
    />

    <Box is="main" mt={theme.navbarHeight} pt={4} pb={6} flex={1}>
      {children()}
    </Box>

    <Footer />
  </Provider>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;
