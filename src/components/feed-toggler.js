import React from 'react'
import {NavLink} from 'react-router-dom'
import {useUserContext} from '../context/user-context';
import {ROUTES} from "../routes/constants";

const FeedToggler = ({tagName}) => {
  const [{isLoggedIn}] = useUserContext();

  return (
    <div className="mb-3">
      <ul className="nav nav-tabs">
        {isLoggedIn && (
          <li className="nav-item">
            <NavLink to={ROUTES.FEED} className="nav-link">
              Your feed
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink to={ROUTES.HOME} className="nav-link" activeClassName="active" exact>
            Global feed
          </NavLink>
        </li>
        {tagName && (
          <li className="nav-item">
            <NavLink to={`/tags/${tagName}`} className="nav-link" exact>
              #{tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  )
};

export default FeedToggler;
