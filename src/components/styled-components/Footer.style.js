/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Footer from '../Footer';
import { colorVars } from './css-variables';

export const StyledFooter = styled(Footer)`
  div.credits {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px 10px 30px;
    margin: 50px 0 30px 0;
    width: 100%;
    border-top: solid ${colorVars.primaryBlue} 2px;

    p {
      color: ${colorVars.primaryPink};
    }

    a {
      color: ${colorVars.primaryBlue};
    }
  }

  @media screen and (max-width: 700px) {
    div.credits {
      flex-direction: column;
      align-items: flex-start;

      & p {
        margin-bottom: 5px;
      }
    }
  }
`;
