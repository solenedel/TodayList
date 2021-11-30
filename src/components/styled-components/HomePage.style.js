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
  align-items: baseline;
  justify-content: center;
  font-size: 20px;

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & input {
      padding-left: 8px;
      width: 80%;
      height: 40px;
      font-size: 22px;
      border: none;
      border-radius: 5px;
      background-color: ${colorVars.primaryYellow};

      ::placeholder {
        font-size: 22px;
        color: black;
        opacity: 0.7;
      }
    }

    button {
      background: none;
      border: none;

      & i {
        color: ${colorVars.primaryYellow};
        font-size: 40px;

        :hover {
          color: ${colorVars.primaryBlue};
        }

        :active {
          transform: translateY(4px);
        }
      }
    }
  }

  .list {
    margin: 20px 50px 0 50px;
  }

  & h2 {
    font-family: ${fontVars.mainFont};
    margin-bottom: 20px;
    font-weight: 400;
  }

  .today h2 {
    color: ${colorVars.primaryPink};
  }

  .today ul {
    border: solid ${colorVars.primaryPink} 3px;
    background: ${colorVars.primaryPink};
  }

  .tomorrow h2 {
    color: ${colorVars.primaryGreen};
  }

  .tomorrow ul {
    border: solid ${colorVars.primaryGreen} 3px;
    background: ${colorVars.primaryGreen};
  }

  ul {
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 50px;

    & li {
      margin-bottom: 25px;
      min-width: 200px;
      color: black;

      & span {
        margin-right: 15px;
      }
    }
  }
`;
