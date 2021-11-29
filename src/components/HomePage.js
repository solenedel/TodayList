import React from 'react';

// eslint-disable-next-line
export const HomePage = ({ className }) => {
  return (
    <main className={className} id="home-page-container">
      <div className="today list">
        <h2>Today</h2>
        <ul>
          <li>clean my room</li>
          <li>wash the dishes</li>
          <li>reply to emails</li>
        </ul>
      </div>
      <div className="tomorrow list">
        <h2>Tomorrow</h2>
        <ul>
          <li>exercise</li>
          <li>buy groceries</li>
        </ul>
      </div>
    </main>
  );
};
