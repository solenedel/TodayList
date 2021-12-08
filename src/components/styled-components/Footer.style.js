/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Footer from '../Footer';
import { colorVars } from './css-variables';

export const StyledFooter = styled(Footer)`
  div.credits {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    margin: 0 0 30px 0;
    width: 100%;

    p {
      color: ${colorVars.primaryPink};
    }

    a {
      color: ${colorVars.primaryBlue};
    }
  }
`;
