import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import siteConstants from '../site-constants';

export default ({ url, description, image, title }) => (
  <Fragment>
    <Helmet
      defer={false}
      title={
        title
          ? `${title} - ${siteConstants.siteTitle}`
          : `${siteConstants.siteTitle}`
      }
    />

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

      <meta property="og:title" content={title || siteConstants.siteTitle} />
      <meta property="og:url" content={siteConstants.siteUrl + url} />
      <meta
        property="og:type"
        content={url.includes('blog/') ? 'article' : 'website'}
      />
      <meta
        property="og:image"
        content={
          image
            ? `${siteConstants.siteUrl}${image}`
            : `${siteConstants.siteUrl}/icon.png`
        }
      />
      <meta
        property="og:description"
        content={description || siteConstants.siteDescription}
      />
      <meta property="og:site_name" content={siteConstants.siteTitle} />
      <meta property="fb:admins" content={siteConstants.fbAdmins} />
      <meta property="fb:app_id" content={siteConstants.fbAppId} />
    </Helmet>
  </Fragment>
);
