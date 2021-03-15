import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render () {
    return(
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Cliente Post</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" exact>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/details" exact>Details</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
