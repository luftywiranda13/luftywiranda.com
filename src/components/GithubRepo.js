import emojiStrip from 'emoji-strip';
import React from 'react';
import Card from './Card';

export default ({ node }) => (
  <Card
    key={node.url}
    title={node.name}
    category={node.primaryLanguage.name}
    description={emojiStrip(node.description).replace('—', '')}
    link={node.url}
  />
);

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
