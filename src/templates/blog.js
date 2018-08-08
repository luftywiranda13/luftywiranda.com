import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import { camelCase, kebabCase, upperFirst } from 'lodash';
import { Border, Box, Button } from 'rebass';

import Anchor, { StyledAnchor } from '../components/Anchor';
import Container from '../components/Container';
import Heading from '../components/Heading';
import SharingButtons from '../components/SharingButtons';
import Text from '../components/Text';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import siteConstants from '../site-constants';
import { fontSizes, space } from '../theme';

const Category = StyledAnchor.extend`
  font-size: ${fontSizes[0]}px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
`;

const MarkdownWrapper = Box.extend.attrs({
  pb: 3,
  my: 3,
})`
  p {
    margin: 0 0 ${space[3]}px;
    line-height: 1.5;
  }
`;

const Tag = Button.extend.attrs({
  bg: 'gray',
  mx: 1,
  mb: 3,
  color: 'primary',
  fontSize: 0,
  fontWeight: 'normal',
})`
  &:hover {
    text-decoration: underline;
  }
`;

const BlogTemplate = ({ data, location }) => {
  const { excerpt, fields, frontmatter, html } = data.markdownRemark;
  const { src: thumbnail } = frontmatter.thumbnail.childImageSharp.resize;

  const url = siteConstants.siteUrl + fields.slug;

  return (
    <Container>
      <TitleAndMetaTags
        title={frontmatter.title}
        url={location.pathname}
        description={excerpt}
        image={thumbnail}
      />

      <Box is="article" width={[1, 2 / 3]}>
        <header>
          <Category to={`/blog/${kebabCase(frontmatter.category)}/`}>
            {frontmatter.category}
          </Category>

          <Heading is="h1" mt={1}>
            {frontmatter.title}
          </Heading>

          <Border
            py={2}
            border="1px dotted"
            borderColor="primary"
            borderLeft="none"
            borderRight="none"
          >
            <Text fontSize={1} color="black54" mb={0}>
              Published on{' '}
              <time dateTime={frontmatter.dateRaw}>{frontmatter.date}</time>
              {fields.dateModified.includes(frontmatter.date) ? null : (
                <Fragment>
                  <br />
                  Updated on{' '}
                  <time dateTime={fields.dateModifiedRaw}>
                    {fields.dateModified}
                  </time>
                </Fragment>
              )}
            </Text>
          </Border>
        </header>

        <MarkdownWrapper dangerouslySetInnerHTML={{ __html: html }} />

        <footer>
          <Box mx={-1}>
            {frontmatter.tags.map(tag => (
              <Tag key={tag} is={Anchor} to={`/blog/tags/${kebabCase(tag)}/`}>
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

          <DiscussionEmbed
            shortname={siteConstants.disqusShortname}
            config={{
              identifier: url,
              title: frontmatter.title,
              url,
            }}
          />
        </footer>
      </Box>
    </Container>
  );
};

BlogTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,

  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogTemplate;

export const query = graphql`
  query BlogTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      fields {
        slug
        dateModifiedRaw: dateModified
        dateModified: dateModified(formatString: "MMMM D, YYYY")
      }
      frontmatter {
        title
        dateRaw: date
        date: date(formatString: "MMMM D, YYYY")
        category
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
