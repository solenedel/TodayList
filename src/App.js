import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { StyledNav } from './components/styled-components/Nav.style';
import { GlobalStyles } from './components/styled-components/GlobalStyles.style';
import { StyledHomePage } from './components/styled-components/HomePage.style';
import { AppContainer } from './components/styled-components/AppContainer';
import { PageContainer } from './components/styled-components/PageContainer';
import { StyledFooter } from './components/styled-components/Footer.style';

// unique local storage key to store the todos
const LOCAL_STORAGE_KEY_LISTS = 'todaylist-lists';

function App() {
  const [lists, setLists] = useState([]);

  // persist lists on reload page
  useEffect(() => {
    const storageLists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LISTS));

    if (storageLists) {
      setLists(storageLists);
    }
  }, []);

  // save lists array to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LISTS, JSON.stringify(lists));
  }, [lists]);

  // add a new list
  const addNewList = () => {
    const newList = {
      id: uuid(),
      name: 'my list',
    };

    setLists((prev) => [...prev, newList]);
  };

  // delete a list
  const deleteList = (id) => {
    // eslint-disable-next-line
    setLists((prev) => [...prev.filter((list) => list.id !== id)]); 
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
    <Router>
      <AppContainer>
        <GlobalStyles />
        <StyledNav deleteList={deleteList} addNewList={addNewList} lists={lists} />
        <PageContainer>
          <Switch>
            <Route exact path="/TodayList/">
              <StyledHomePage
                deleteList={deleteList}
                addNewList={addNewList}
                lists={lists}
                renameList={renameList}
              />
            </Route>
          </Switch>
        </PageContainer>
        <StyledFooter />
      </AppContainer>
    </Router>
  );
}

export default App;
