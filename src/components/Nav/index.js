import React from 'react';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => (
  <div className="Nav-bar">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
