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
    };

    /*
     * when you pass an anon function in a useState function, the anon func argument will
     * always be the most recent value of the state variable
     */
    setLists((prev) => [...prev, newList]);
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
          <StyledNav addNewList={addNewList} lists={lists} />
          <PageContainer>
            <Switch>
              <Route exact path="/">
                <StyledHomePage lists={lists} />
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
