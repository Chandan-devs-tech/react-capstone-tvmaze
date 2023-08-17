import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/tvm-header-logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar" data-testid="nav">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="navHeading">TVMaze Shows</h1>
      <div className="icons">
        <FontAwesomeIcon icon={faMicrophone} className="user-icon" />
        <FontAwesomeIcon icon={faGear} className="user-icon" />
      </div>
    </div>
  );
}

export default Navbar;
