import React from 'react';

// The home page is the lists page

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  // form to add a new item
  const NewTaskForm = () => (
    <form action="/lists">
      <input type="text" placeholder="add new task" />
      <button type="button" className="tomorrow">
        <i className="fas fa-plus-circle" />
      </button>
    </form>
  );

  return (
    <main className={className} id="home-page-container">
      <div className="today list">
        <h2>Today</h2>
        <ul className="today">
          <li>
            <span>
              <i className="fas fa-broom" />
            </span>
            clean my room
          </li>
          <li>
            <span>
              <i className="fas fa-hand-sparkles" />
            </span>
            wash the dishes
          </li>
          <li>
            <span>
              <i className="far fa-envelope" />
            </span>
            reply to emails
          </li>
        </ul>
        <NewTaskForm className="today" />
      </div>
      <div className="tomorrow list">
        <h2>Tomorrow</h2>
        <ul>
          <li>
            <span>
              <i className="fas fa-running" />
            </span>
            exercise
          </li>
          <li>
            <span>
              <i className="fas fa-shopping-basket" />
            </span>
            buy groceries
          </li>
        </ul>
        <NewTaskForm className="tomorrow" />
      </div>
    </main>
  );
};
