import styled from 'styled-components';
import { space } from '../theme';

// Bug in `rebass/styled-components`
// The HTML element cannot be `div` or the component will lose its styles
export default styled.section`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${space[6]}px;
  padding-left: ${space[3]}px;
  padding-right: ${space[3]}px;
`;
