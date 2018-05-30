import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const Navbar = (props) => {

  function handleLogout() {
    Auth.logout();
    props.history.push('/');
  }

  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://seeklogo.com/images/T/Theater_Masks-logo-8C9D2AD393-seeklogo.com.png" />
          <h1>Theatre Review</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/performances" className="navbar-item">Shows</Link>
          <Link to="/performances/new" className="navbar-item">Add Show</Link>
          {Auth.isAuthenticated() && <a onClick={handleLogout}
            className="navbar-item">Logout</a>}
          {!Auth.isAuthenticated() && <Link to="/register"
            className="navbar-item">Register</Link>}
          {!Auth.isAuthenticated() && <Link to="/login"
            className="navbar-item">Login</Link>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
