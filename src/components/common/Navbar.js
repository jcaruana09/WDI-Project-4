import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

const Navbar = (props) => {

  function handleLogout() {
    Auth.logout();
    props.history.push('/');
  }

  if(props.location.pathname === '/') return null;
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <h1>Theatre Critic</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/performances" id="nav-item-1" className="navbar-item">Shows</Link>
          <Link to="/performances/new" id="nav-item-2" className="navbar-item">Add Show</Link>
          {Auth.isAuthenticated() && <a onClick={handleLogout}
            className="navbar-item">Logout</a>}
          {!Auth.isAuthenticated() && <Link to="/register"
            className="navbar-item" id="nav-item-3">Register</Link>}
          {!Auth.isAuthenticated() && <Link to="/login"
            className="navbar-item">Login</Link>}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
