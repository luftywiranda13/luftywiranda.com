import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import siteConstants from '../site-constants';

const defaultProps = {
  title: siteConstants.siteTitle,
  description: siteConstants.siteDescription,
  image: '/icon.png',
};

const TitleAndMetaTags = ({ url, description, image, title }) => (
  <Fragment>
    <Helmet
      defer={false}
      title={
        title === siteConstants.siteTitle
          ? title
          : `${title} - ${siteConstants.siteTitle}`
      }
    />

    <Helmet>
      <meta name="description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={siteConstants.siteUrl + image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={`@${siteConstants.twitterUsername}`}
      />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteConstants.siteUrl + url} />
      <meta
        property="og:type"
        content={url.includes('/blog/') ? 'article' : 'website'}
      />
      <meta property="og:image" content={siteConstants.siteUrl + image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteConstants.siteTitle} />
      <meta property="fb:admins" content={siteConstants.fbAdmins} />
      <meta property="fb:app_id" content={siteConstants.fbAppId} />
    </Helmet>
  </Fragment>
);

TitleAndMetaTags.defaultProps = defaultProps;

export default TitleAndMetaTags;
