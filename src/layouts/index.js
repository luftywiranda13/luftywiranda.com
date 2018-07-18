import React from 'react';
import { Box, Flex, Provider } from 'rebass';
import 'sanitize.css';
import { injectGlobal } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import siteConstants from '../site-constants';
import theme, { colors } from '../theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  ::selection {
    background-color: ${colors.primary};
    color: ${colors.white};
  }

  ::-moz-selection {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
`;
/* eslint-enable no-unused-expressions */

export default ({ children }) => (
  <Provider theme={theme}>
    <Flex flexDirection="column" style={{ minHeight: '100vh' }}>
      <Navbar
        title={siteConstants.siteTitle}
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: 'Projects', href: '/projects/' },
          { label: 'Contact', href: '/contact/' },
        ]}
      />

      <Box is="main" mt={61} pt={28} pb={6} flex={1}>
        {children()}
      </Box>

      <Footer />
    </Flex>
  </Provider>
);
