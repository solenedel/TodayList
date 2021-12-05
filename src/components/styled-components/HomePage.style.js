/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars, fontVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  border: solid blue 3px;
  /* height: 100vh; */
  /* width: fit-content; */
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  font-size: 20px;
  margin-top: 50px;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & input {
      padding-left: 8px;
      width: 80%;
      height: 40px;
      font-size: 22px;
      border: none;
      border-radius: 5px;
      margin-right: 10px;
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
    border: solid ${colorVars.primaryBlue} 3px;
    background: ${colorVars.primaryBlue};
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

  button.btn {
    font-size: 20px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    background: none;
    margin-left: 20px;

    &.delete {
      border: solid 3px #fca4a3;
      color: #fca4a3;

      &:hover {
        background: #fca4a3;
        color: black;
      }
    }

    &.new-list {
      border: solid 3px ${colorVars.primaryGreen};
      color: ${colorVars.primaryGreen};

      &:hover {
        background: ${colorVars.primaryGreen};
        color: black;
      }
    }

    &.rename {
      border: solid 3px ${colorVars.primaryYellow};
      color: ${colorVars.primaryYellow};

      &:hover {
        background: ${colorVars.primaryYellow};
        color: black;
      }
    }
  }
`;
