import React from 'react';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
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
        <button type="button" className="today">
          + new item
        </button>
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
        <button type="button" className="tomorrow">
          + new item
        </button>
      </div>
    </main>
  );
};
