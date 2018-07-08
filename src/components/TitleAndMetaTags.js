import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import siteConstants from '../site-constants';

export default ({ description, image, title }) => (
  <Fragment>
    {title && <Helmet defer={false} title={title} />}

    <Helmet>
      <meta
        name="description"
        content={description || siteConstants.siteDescription}
      />

      <meta itemProp="name" content={title || siteConstants.siteTitle} />
      <meta
        itemProp="description"
        content={description || siteConstants.siteDescription}
      />
      <meta
        itemProp="image"
        content={
          image
            ? `${siteConstants.siteUrl}${image}`
            : `${siteConstants.siteUrl}/icon.png`
        }
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={`@${siteConstants.twitterUsername}`}
      />

      <meta name="og:title" content={title || siteConstants.siteTitle} />
      <meta
        name="og:description"
        content={description || siteConstants.siteDescription}
      />
      <meta name="og:site_name" content={siteConstants.siteTitle} />
      <meta name="fb:admins" content={siteConstants.fbAdmins} />
      <meta name="fb:app_id" content={siteConstants.fbAppId} />
    </Helmet>
  </Fragment>
);
