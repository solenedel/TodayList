/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Footer from '../Footer';

export const StyledFooter = styled(Footer)`
  /* border: solid yellow 3px; */

  div.credits {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    position: relative;
    bottom: 10px;

    p {
      color: black;
    }

    a {
      color: cornsilk;
    }
  }

  svg {
    position: relative;
    top: 40px;
  }
`;
