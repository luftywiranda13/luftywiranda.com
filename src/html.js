/* eslint-disable global-require, no-console, react/no-danger */
import React from 'react';
import { colors } from './theme';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  let css;
  if (process.env.NODE_ENV === `production`) {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }

  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

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
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={colors.accent}
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {css}
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}

        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        {postBodyComponents}
      </body>
    </html>
  );
};
