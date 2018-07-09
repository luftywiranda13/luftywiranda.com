import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Flex as F, Provider } from 'rebass';
import 'sanitize.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import siteConstants from '../site-constants';
import theme from '../theme';

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
