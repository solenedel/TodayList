/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { fontVars, colorVars } from './css-variables';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: ${fontVars.titleFont};
}

a,
  a:visited {
    text-decoration: none;
    color: ${colorVars.linkHover};
    font-family: ${fontVars.mainFont};
  }

  body {
    background-color: black;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    height: 100%; 
    min-height: 100%;

    div#logo {
      margin-top: 15px;
      margin-left: 25px;
      font-size: 60px;
      color: white;
      font-family: ${fontVars.mainFont};
    }

    li, p, div {
      font-family: ${fontVars.mainFont};
      color: white;
    }

    li {
      list-style-type: none;
    }
  }
`;
