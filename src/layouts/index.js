import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Flex as F, Provider } from 'rebass';
import 'sanitize.css';
import { injectGlobal } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import siteConstants from '../site-constants';
import theme, { colors, lineHeights } from '../theme';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    color: ${colors.black87};
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${lineHeights.compact};
  }

  p {
    line-height: ${lineHeights.loose};
  }
`;
/* eslint-enable no-unused-expressions */

const Flex = F.extend.attrs({ flexDirection: 'column' })`
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <Fragment>
    <Helmet
      defer={false}
      defaultTitle={siteConstants.siteTitle}
      titleTemplate={`%s - ${siteConstants.siteTitle}`}
    />

    <Provider theme={theme}>
      <Flex>
        <Navbar
          title={siteConstants.siteTitle}
          items={[
            { label: 'Blog', href: '/blog' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' },
          ]}
        />

        <Box is="main" mt={56} flex={1}>
          {children()}
        </Box>

        <Footer />
      </Flex>
    </Provider>
  </Fragment>
);

export default Layout;
