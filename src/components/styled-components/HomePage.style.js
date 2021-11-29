/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars, fontVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  /* border: solid blue 3px; */
  /* height: 100vh; */
  /* width: fit-content; */
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  .list {
    margin: 20px 50px 0 50px;
  }

  & h2 {
    font-family: ${fontVars.mainFont};
    margin-bottom: 12px;
    font-weight: 400;
  }

  ul {
    border: solid ${colorVars.primaryGreen} 3px;
    background: ${colorVars.primaryGreen};
    border-radius: 6px;
    padding: 10px;

    & li {
      margin-bottom: 25px;
      min-width: 200px;
      color: black;
    }
  }
`;
