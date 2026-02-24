import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

<nav className="navbar">
<div className="navbar-left">

  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/propose">Propose</a>
      </li>
      <li>
        <a href="/what">What is This?</a>
      </li>
      <li>
        <a href="/vote">Vote/View</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">

    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>
);
};

export default Navbar;