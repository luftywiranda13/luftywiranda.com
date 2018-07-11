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
    background: ${colors.accent};
  }

  ::-moz-selection {
    background: ${colors.accent};
  }
`;
/* eslint-enable no-unused-expressions */

const Wrapper = Flex.extend.attrs({ flexDirection: 'column' })`
  min-height: 100vh;
`;

export default ({ children }) => (
  <Provider theme={theme}>
    <Wrapper>
      <Navbar
        title={siteConstants.siteTitle}
        items={[
          { label: 'Blog', href: '/blog/' },
          { label: 'Projects', href: '/projects/' },
          { label: 'Contact', href: '/contact/' },
        ]}
      />

      <Box is="main" mt={56} flex={1}>
        {children()}
      </Box>

      <Footer />
    </Wrapper>
  </Provider>
);
