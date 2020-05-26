import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import useFetch from '../../hooks/use-fetch'
import UserArticles from './components/user-articles'

const UserProfile = ({ match, location }) => {
  const username = match.params?.username;
  const apiUrl = `/profiles/${username}`;
  const [{response}, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch()
  }, [doFetch]);

  if (!response) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="bg-light text-dark py-4 mb-4">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-secondary mb-3"
                 style={{ width: 100, height: 100 }}>
              <img className="img-fluid" alt="" src={response.profile.image} />
            </div>
            <h1 className='h4'>{response.profile.username}</h1>
            {response?.profile?.bio && <p>{response?.profile?.bio}</p>}
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <NavLink
              exact
              to={`/profile/${response?.profile?.username}`}
              className="nav-link"
              activeClassName="active"
            >
              My Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/profile/${response?.profile?.username}/favorites`}
              className="nav-link"
            >
              Favorites Posts
            </NavLink>
          </li>
        </ul>
        <UserArticles
          username={response?.profile?.username}
          location={location}
          url={match.url}
        />
      </div>
    </div>
  );
};

export default UserProfile;
