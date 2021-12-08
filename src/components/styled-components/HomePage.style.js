/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { HomePage } from '../HomePage';
import { colorVars, fontVars } from './css-variables';

export const StyledHomePage = styled(HomePage)`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: flex-start;
  font-size: 20px;
  margin-top: 50px;

  #rename-btn {
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    background: ${colorVars.primaryGreen};
    color: black;
  }

  #rename-form {
    margin-top: 20px;
  }

  #no-list-yet {
    margin-left: 50px;
    font-size: 25px;
  }

  #no-todos-yet {
    margin: 60px 0px 60px 10px;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    & input {
      padding-left: 8px;
      width: 80%;
      height: 40px;
      font-size: 22px;
      border-radius: 5px;
      margin-right: 10px;
      border: solid 2px ${colorVars.primaryBlue};
      background: none;
      color: white;

      ::placeholder {
        font-size: 22px;
        color: ${colorVars.primaryBlue};
        opacity: 0.9;
      }
    }

    button {
      background: none;
      border: none;

      & i {
        color: ${colorVars.primaryGreen};
        font-size: 40px;

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

  #remove-todo-btn {
    background: none;
    border: none;
    height: 25px;

    & i {
      font-size: 25px;
    }
  }

  ul {
    width: fit-content;
  }

  #todo-input {
    width: 300px;
    display: flex;
    justify-content: space-between;

    & input {
      margin-right: 8px;
    }

    & li {
      word-wrap: break-word;
    }

    .todo-item {
      width: 90%;
      display: flex;
      align-items: baseline;
      word-wrap: break-word;
    }
  }
`;
