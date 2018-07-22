import React from 'react';
import { Box, Flex, Provider } from 'rebass';
import 'sanitize.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import siteConstants from '../site-constants';
import theme from '../theme';

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

      <Box
        is="main"
        mt={siteConstants.navbarHeight}
        pt={
          theme.space[3] +
          (theme.lineHeights.loose * theme.fontSizes[2] * 3 -
            siteConstants.navbarHeight)
        }
        pb={6}
        flex={1}
      >
        {children()}
      </Box>

      <Footer />
    </Flex>
  </Provider>
);
