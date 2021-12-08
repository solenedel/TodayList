import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
const Nav = ({ className, addNewList}) => {
  return (
    <nav className={className}>
      <div id="nav-flexbox">
        <Link to="/" id="logo-link">
          <div id="logo">TodayList</div>
        </Link>
        <ul>
          <Link to="/">
            {/* eslint-disable-next-line */}
            <li className="nav-link new-list" onClick={addNewList}>
              New list
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
