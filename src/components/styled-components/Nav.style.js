/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  height: 140px;
  border: solid red 3px;

  & #nav-flexbox {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: Arial, Helvetica, sans-serif;
  }

  #logo-link {
    color: ${colorVars.primaryLight};
    text-decoration: none;
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
      color: ${colorVars.primaryLight};

      &:visited {
        color: ${colorVars.primaryLight};
      }

      &:hover {
        color: ${colorVars.linkHover};
        transition: color 0.4s;
      }
    }
  }
`;
