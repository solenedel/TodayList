/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  height: 110px;

  .new-list {
    margin-right: 80px;
    font-weight: 600;
    animation: color-change 1.5s infinite;
    font-size: 35px;
  }

  @keyframes color-change {
    0% {
      color: ${colorVars.primaryYellow};
    }
    50% {
      color: #a890ff;
    }
    100% {
      color: ${colorVars.primaryYellow};
    }
  }

  & #nav-flexbox {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  div#logo {
    margin-top: 15px;
    margin-left: 40px;
    font-size: 50px;
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
