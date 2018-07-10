import styled from 'styled-components';
import { space } from 'styled-system';

const defaultProps = {
  px: 3,
  py: 4,
  mx: 'auto',
};

const Container = styled.section`
  ${space};
  max-width: 1024px;
`;

Container.defaultProps = defaultProps;

export default Container;
