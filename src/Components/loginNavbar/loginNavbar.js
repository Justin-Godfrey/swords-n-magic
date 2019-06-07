import React, { Component } from "react";
import { Link } from "react-router-dom";

import './loginNavbar.css';

export default class loginNavbar extends Component {
  render() {
    return (
      <div className="login-navbar">
        <nav className="navbar-2">
          <div className="logo-container-2" />
          <div className="links-2">
            <Link to="/">Home</Link>
          </div>
        </nav>
        
      </div>
    );
  }
}
