import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {ROUTES} from "../../routes/constants";

const Header = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={ROUTES.HOME} className="font-weight-bold">MyMedium</Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink to={ROUTES.HOME} className="nav-link" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={ROUTES.LOGIN} className="nav-link">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={ROUTES.REGISTER} className="nav-link">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;