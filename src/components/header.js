import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../routes/constants';
import { useUserContext } from '../context/user-context';

const Header = () => {
  const [{ isLoggedIn, currentUser }] = useUserContext();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={ROUTES.HOME} className="font-weight-bold">
          MyMedium
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <NavLink
              to={ROUTES.HOME}
              className="nav-link"
              activeClassName="active"
              exact
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn === false && (
            <>
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
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink to="/articles/new" className="nav-link">
                  New Post
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                  Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/profiles/${currentUser?.username}`}
                  className="nav-link"
                >
                  <img
                    className="rounded-circle"
                    src={currentUser?.image}
                    alt=""
                  />
                  &nbsp; {currentUser?.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
