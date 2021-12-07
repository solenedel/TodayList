import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { StyledNav } from './components/styled-components/Nav.style';
import { GlobalStyles } from './components/styled-components/GlobalStyles.style';
import { StyledHomePage } from './components/styled-components/HomePage.style';
import { AppContainer } from './components/styled-components/AppContainer';
import { PageContainer } from './components/styled-components/PageContainer';
import { StyledFooter } from './components/styled-components/Footer.style';
import { StyledLoginPage } from './components/styled-components/LoginPage.style';
import { AppContext } from './context';

function App() {
  const [user, setUser] = useState({});

  const [lists, setLists] = useState([]);

  // add a new list
  const addNewList = () => {
    const newList = {
      id: uuid(),
      name: 'my list',
    };

    /*
     * when you pass an anon function in a useState function, the anon func argument will
     * always be the most recent value of the state variable
     */
    setLists((prev) => [...prev, newList]);
  };

  // delete a list
  const deleteList = (id) => {
    // eslint-disable-next-line
    setLists((prev) => [...prev.filter((list) => list.id !== id)]); // spread new array so that you don't mutate original array
  };

  // rename a list
  const renameList = (listId, name) => {
    const listsCopy = [...lists];

    const isListToRename = (list) => list.id === listId;

    const listIndex = listsCopy.findIndex(isListToRename);

    listsCopy.splice(listIndex, 1, {
      ...listsCopy[listIndex],
      name,
    });

    setLists(listsCopy);
  };

  return (
    <AppContext.Provider
      value={{
        userContext: [user, setUser],
      }}
    >
      <Router>
        <AppContainer>
          <GlobalStyles />
          <StyledNav deleteList={deleteList} addNewList={addNewList} lists={lists} />
          <PageContainer>
            <Switch>
              <Route exact path="/">
                <StyledHomePage
                  deleteList={deleteList}
                  addNewList={addNewList}
                  lists={lists}
                  renameList={renameList}
                />
              </Route>
              <Route exact path="/login">
                <StyledLoginPage />
              </Route>
            </Switch>
          </PageContainer>
          <StyledFooter />
        </AppContainer>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
