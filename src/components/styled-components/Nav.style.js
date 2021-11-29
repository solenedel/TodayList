/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  height: 110px;
  /* border: solid red 3px; */

  & #nav-flexbox {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  div#logo {
    margin-top: 15px;
    margin-left: 25px;
    font-size: 60px;
    font-family: 'Righteous', cursive;
    color: ${colorVars.primaryGreen};
  }

  & ul {
    display: flex;
    justify-content: flex-end;

    & li,
    a {
      margin-right: 30px;
      font-size: 30px;
      transition: color 0.4s;
      text-decoration: none;
      color: ${colorVars.primaryPink};

      &:visited {
        color: ${colorVars.primaryPink};
      }

      &:hover {
        color: ${colorVars.linkHover};
        transition: color 0.4s;
      }
    }
  }
`;
