import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button as B, Input as I, Textarea as T } from 'rebass';
import styled, { css } from 'styled-components';

import Container from '../components/Container';
import Heading from '../components/Heading';
import Lead from '../components/Lead';
import Text from '../components/Text';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { colors, space } from '../theme';

const defaultStateStyles = css`
  border: 1px solid ${colors.black12};
`;

const focusStyles = css`
  color: ${colors.primary};
  border-color: ${colors.primary};
  box-shadow: none;
`;

const placeholderStyles = css`
  color: ${colors.black38};
`;

const Button = B.extend.attrs({
  bg: 'primary',
  lineHeight: 'loose',
})`
  display: block;
  box-shadow: inset 0 0 0 2px ${colors.primary};

  &:focus {
    box-shadow: 0 0 0 2px ${colors.black38};
  }

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: ${colors.primary};
    transition: background 0.2s ease-in-out;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${space[2]}px;
  font-weight: 600;
`;

const Input = I.extend.attrs({
  mb: 3,
  px: 2,
  width: [1, 320],
})`
  ${defaultStateStyles};
  display: block;

  &::placeholder {
    ${placeholderStyles};
  }

  &:focus {
    ${focusStyles};
  }
`;

const Textarea = T.extend.attrs({
  rows: 5,
  mb: 3,
  px: 2,
  width: [1, 400],
})`
  ${defaultStateStyles};

  &::placeholder {
    ${placeholderStyles};
  }

  &:focus {
    ${focusStyles};
  }
`;

const ContactPage = ({ location }) => (
  <Container>
    <TitleAndMetaTags
      title="Contact"
      url={location.pathname}
      description="Get in touch, tell me what you want to talk about!"
    />

    <header>
      <Heading is="h1">Contact</Heading>
      <Lead>Get in touch, tell me what you want to talk about!</Lead>
    </header>

    <form
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      style={{ paddingTop: `${space[3]}px` }}
    >
      <Box>
        <input name="form-name" type="hidden" value="contact" />
        <Input name="bot-field" type="text" style={{ display: 'none' }} />

        <Label htmlFor="name">Name</Label>
        <Input
          name="name"
          type="text"
          placeholder="Angela Moss"
          autoFocus
          required
        />

        <Label htmlFor="email">Email</Label>
        <Text color="black54" fontSize={1} mb={2}>
          Provide your real email address so I can reply to your message
        </Text>
        <Input
          name="email"
          type="email"
          placeholder="angela.moss@e-corp.com"
          required
        />

        <Label htmlFor="message">Message</Label>
        <Textarea name="message" placeholder="Hi, Elliot!" required />

        <Button type="submit">Send message</Button>
      </Box>
    </form>
  </Container>
);

ContactPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactPage;
