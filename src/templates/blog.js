import { DiscussionEmbed } from 'disqus-react';
import Link from 'gatsby-link';
import { camelCase, kebabCase, upperFirst } from 'lodash';
import React from 'react';
import { Box, Button, Heading, Text } from 'rebass';
import Container from '../components/Container';
import SharingButtons from '../components/SharingButtons';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import siteConstants from '../site-constants';
import { lineHeights } from '../theme';

const MarkdownWrapper = Box.extend.attrs({ pt: 3 })`
  p {
    line-height: ${lineHeights.loose};
  }
`;

const Tag = Button.extend.attrs({
  mx: 1,
  bg: 'gray',
  borderRadius: 1,
  color: 'black87',
  fontSize: 0,
  fontWeight: 'normal',
})`
  &:hover {
    text-decoration: underline;
  }
`;

export default ({ data, location }) => {
  const { excerpt, fields, frontmatter, html } = data.markdownRemark;
  const { src: thumbnail } = frontmatter.thumbnail.childImageSharp.resize;

  const url = siteConstants.siteUrl + fields.slug;

  return (
    <Container py={0}>
      <TitleAndMetaTags
        title={frontmatter.title}
        url={location.pathname}
        description={excerpt}
        image={thumbnail}
      />

      <Box is="article" width={[1, 2 / 3]} py={4}>
        <Heading is="h1" color="black87" lineHeight={lineHeights.compact}>
          {frontmatter.title}
        </Heading>
        <Text is="p" fontSize={1} color="black54">
          {fields.date}
        </Text>

        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: html }} />

        <Box py={4} mx={-1}>
          {frontmatter.tags.map(tag => (
            <Tag key={tag} is={Link} to={`/tags/${kebabCase(tag)}/`}>
              {tag}
            </Tag>
          ))}
        </Box>

        <SharingButtons
          title={frontmatter.title}
          description={excerpt}
          tags={frontmatter.tags.map(x => `${upperFirst(camelCase(x))}`)}
          url={url}
        />

        <Box py={4}>
          <DiscussionEmbed
            shortname={siteConstants.disqusShortname}
            config={{
              identifier: url,
              title: frontmatter.title,
              url,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      fields {
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      frontmatter {
        title
        tags
        thumbnail {
          childImageSharp {
            resize(quality: 85) {
              src
            }
          }
        }
      }
    }
  }
`;
