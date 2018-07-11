import Img from 'gatsby-image';
import Link from 'gatsby-link';
import React from 'react';
import { BackgroundImage, Box, Card as C, Subhead, Text } from 'rebass';
import { lineHeights, radii } from '../theme';

const Card = C.extend`
  min-height: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: ${radii[1]}px;

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);

    h3 {
      text-decoration: underline;
    }
  }
`;

const Thumbnail = BackgroundImage.extend.attrs({ ratio: 9 / 16 })`
  border-top-left-radius: ${radii[1]}px;
  border-top-right-radius: ${radii[1]}px;

  ${Card}:hover & {
    opacity: 0.8;
  }
`;

export default ({ node }) => {
  const { excerpt, fields, frontmatter } = node;
  const { sizes: thumbnailSizes } = frontmatter.thumbnail.childImageSharp;

  return (
    <Box is="article" p={2} w={[1, 1 / 3]}>
      <Link to={fields.slug} style={{ textDecoration: 'none' }}>
        <Card p={0}>
          <Thumbnail is={Img} sizes={thumbnailSizes} />

          <Box p={3}>
            <Subhead fontSize={3} color="black87">
              {frontmatter.title}
            </Subhead>
            <Text fontSize={1} color="black54">
              {fields.date}
            </Text>

            <Text is="p" mt={3} color="black87" lineHeight={lineHeights.loose}>
              {excerpt}
            </Text>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};
