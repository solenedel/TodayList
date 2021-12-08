/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars } from './css-variables';

export const StyledNav = styled(Nav)`
  height: 100px;
  background: rgba(55, 220, 212, 0.95);
  padding-top: 8px;
  /* border: solid red 3px; */

  .new-list {
    border: solid black 3px;
    background: black;
    border-radius: 8px;
    padding: 0 7px 0 7px;
    margin-right: 40px;
    font-weight: 600;
    animation: color-change 1.8s infinite;
    font-size: 35px;
  }

  @keyframes color-change {
    0% {
      color: #b38dff;
    }
    50% {
      color: #ff90f3;
    }
    100% {
      color: #b38dff;
    }
  }

  & #nav-flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: solid blue 3px; */
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
