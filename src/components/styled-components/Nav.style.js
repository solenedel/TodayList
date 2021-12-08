/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  height: 100px;
  background: ${colorVars.primaryGreen};

  .new-list {
    margin-right: 40px;
    font-weight: 600;
    animation: color-change 1.8s infinite;
    font-size: 35px;
  }

  @keyframes color-change {
    0% {
      color: #661ef8;
    }
    50% {
      color: #e31acd;
    }
    100% {
      color: #661ef8;
    }
  }

  & #nav-flexbox {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  div#logo {
    margin-top: 15px;
    margin-left: 40px;
    font-size: 50px;
    font-family: 'Righteous', cursive;
    color: black;
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

  @media screen and (max-width: 700px) {
    ul {
      padding: 0;
      margin-right: 0;
    }
    .new-list {
      margin-right: 0;
      font-size: 28px;
      letter-spacing: -1.2px;
      position: relative;
      left: 10px;
    }

    div#logo {
      margin-left: 20px;
      margin-right: 40px;
      font-size: 38px;
    }
  }

  @media screen and (max-width: 370px) {
    .new-list {
      font-size: 24px;
    }

    div#logo {
      font-size: 32px;
    }
  }
`;
