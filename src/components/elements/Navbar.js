import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
            <Link to="/" className="navbar-brand">
                contact book
            </Link>
            <div>
                <Link to="/contacts/add" className="btn btn-light">create contact</Link>
            </div>
        </div>
      </nav>
    );
};

export default Navbar;