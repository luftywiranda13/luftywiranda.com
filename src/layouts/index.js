import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Flex as F, Provider } from 'rebass';
import 'sanitize.css';
import { injectGlobal } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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

const Layout = ({ children, data }) => (
  <Fragment>
    <Helmet
      defer={false}
      defaultTitle={data.site.siteMetadata.title}
      titleTemplate={`%s - ${data.site.siteMetadata.title}`}
    />
    <Helmet>
      <html lang="en" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffdc00" />

      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Helmet>

    <Provider theme={theme}>
      <Flex>
        <Navbar
          title={data.site.siteMetadata.title}
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

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
