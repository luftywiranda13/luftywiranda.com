import React from 'react';
import {
  Box,
  Button as B,
  Heading,
  Input as I,
  Label as L,
  Text,
  Textarea as T,
} from 'rebass';
import { css } from 'styled-components';
import Container from '../components/Container';
import TitleAndMetaTags from '../components/TitleAndMetaTags';
import { colors, fonts, lineHeights } from '../theme';

const defaultStateStyles = css`
  border: 1px solid ${colors.black12};
  font-family: ${fonts.mono};
`;

const focusStyles = css`
  color: ${colors.black87};
  border-color: ${colors.black38};
  box-shadow: 0 0 0 0.2rem ${colors.black12};
`;

const placeholderStyles = css`
  color: ${colors.black38};
`;

const Form = Box.extend.attrs({
  is: 'form',
  name: 'contact',
  method: 'post',
  'data-netlify': true,
  'netlify-honeypot': 'bot-field',
  pt: 3,
})``;

const Button = B.extend.attrs({
  type: 'submit',
  mt: 3,
  bg: 'black87',
  borderRadius: 1,
  lineHeight: 'loose',
})`
  box-shadow: inset 0 0 0 2px ${colors.black87};

  &:focus {
    box-shadow: 0 0 0 2px ${colors.black38};
  }

  &:hover {
    background: transparent;
    color: ${colors.black87};
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
`;

const Label = L.extend.attrs({ mb: 2, color: colors.black87 })`
  font-weight: 600;
`;

const Input = I.extend.attrs({
  borderRadius: 1,
  px: 2,
  width: [1, 296],
  fontSize: 1,
})`
  ${defaultStateStyles};

  &::placeholder {
    ${placeholderStyles};
  }

  &:focus {
    ${focusStyles};
  }
`;

const Textarea = T.extend.attrs({
  rows: 5,
  borderRadius: 1,
  px: 2,
  width: [1, 440],
  fontSize: 1,
})`
  ${defaultStateStyles};
  line-height: ${lineHeights.loose};

  &::placeholder {
    ${placeholderStyles};
  }

  &:focus {
    ${focusStyles};
  }
`;

export default ({ location }) => (
  <Container>
    <TitleAndMetaTags
      title="Contact"
      url={location.pathname}
      description="Get in touch, tell me what you want to talk about!"
    />

    <Box is="section" pb={5} w={[1, 1, '62%']}>
      <Heading is="h1" mb={3} color="black87" lineHeight={lineHeights.compact}>
        Contact
      </Heading>

      <Text is="p" fontSize={3} color="black54" lineHeight="1.25" mb={20}>
        Get in touch, tell me what you want to talk about!
      </Text>

      <Form>
        <input type="hidden" name="form-name" value="contact" />

        <Box style={{ visibility: 'hidden', display: 'none' }}>
          <Label htmlFor="bot-field">Don’t fill this out if you’re human</Label>
          <Input name="bot-field" type="text" />
        </Box>

        <Box>
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="text" placeholder="Angela Moss" required />
        </Box>

        <Box mt={3}>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="angela.moss@e-corp.com"
            required
          />
        </Box>

        <Box mt={3}>
          <Label htmlFor="message">Message</Label>
          <Textarea name="message" placeholder="Hi, Elliot!" required />
        </Box>

        <Button>Send message</Button>
      </Form>
    </Box>
  </Container>
);
