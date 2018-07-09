import Img from 'gatsby-image';
import Link from 'gatsby-link';
import React from 'react';
import { BackgroundImage, Box, Card as C, Small, Subhead, Text } from 'rebass';
import { lineHeights } from '../theme';

const Card = C.extend`
  min-height: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 1px;

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);

    h3 {
      text-decoration: underline;
    }
  }
`;

const Thumbnail = BackgroundImage.extend.attrs({ ratio: 9 / 16 })`
  border-radius: 1px;

  ${Card}:hover & {
    opacity: 0.8;
  }
`;

export default ({ node }) => (
  <Box is="article" p={2} w={[1, 1 / 3]}>
    <Link to={node.fields.slug} style={{ textDecoration: 'none' }}>
      <Card p={0}>
        <Thumbnail
          is={Img}
          sizes={node.frontmatter.thumbnail.childImageSharp.sizes}
        />

        <Box p={3}>
          <Subhead fontSize={3} color="black87">
            {node.frontmatter.title}
          </Subhead>
          <Small fontSize={1} color="black54">
            {node.fields.date}
          </Small>

          <Text is="p" mt={3} color="black87" lineHeight={lineHeights.loose}>
            {node.excerpt}
          </Text>
        </Box>
      </Card>
    </Link>
  </Box>
);
