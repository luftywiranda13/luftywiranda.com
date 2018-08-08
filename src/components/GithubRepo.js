import React from 'react';
import emojiStrip from 'emoji-strip';
import PropTypes from 'prop-types';

import Card from './Card';

const GithubRepo = ({ node }) => (
  <Card
    key={node.url}
    title={node.name}
    category={node.primaryLanguage.name}
    description={emojiStrip(node.description).replace('—', '')}
    link={node.url}
  />
);

GithubRepo.propTypes = {
  node: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    primaryLanguage: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GithubRepo;

export const query = graphql`
  fragment GithubRepoFragment on GithubRepositoriesEdge {
    node {
      name
      description
      url
      primaryLanguage {
        name
      }
    }
  }
`;
