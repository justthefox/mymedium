import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {useUserContext, ACTIONS} from '../../context/user-context';
import useFetch from '../../hooks/use-fetch';
import useLocalStorage from '../../hooks/use-local-storage'
import ErrorMessages from '../../components/error-messages';

const Settings = () => {
  const apiUrl = '/user'
  const [{response, error}, doFetch] = useFetch(apiUrl)
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userState, dispatch] = useUserContext()
  const [, setToken] = useLocalStorage('token')
  const [successfullLogout, setIsSuccessfullLogout] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    doFetch({
      method: 'put',
      data: {
        user: {
          ...userState.currentUser,
          image,
          bio,
          username: name,
          email,
          password
        }
      }
    })
  }
  const logout = e => {
    e.preventDefault();
    setToken('');
    dispatch({type: ACTIONS.SET_UNAUTHORIZED});
    setIsSuccessfullLogout(true);
  }

  useEffect(() => {
    if (!userState.currentUser) {
      return;
    }
    const currentUser = userState.currentUser;

    setName(currentUser.username);
    setImage(currentUser.image);
    setBio(currentUser.bio);
    setEmail(currentUser.email);
  }, [userState.currentUser]);

  useEffect(() => {
    if (!response) {
      return
    }

    dispatch({type: ACTIONS.SET_AUTHORIZED, payload: response.user})
  }, [response, dispatch])

  if (successfullLogout) {
    return <Redirect to="/" />
  }

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your settings</h1>
            {error && <ErrorMessages errors={error.errors} />}
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="URL of profile picture"
                    value={image === null ? '' : image}
                    onChange={e => setImage(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Short bio"
                    value={bio === null ? '' : bio}
                    rows="4"
                    onChange={e => setBio(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="New password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary pull-xs-right"
                >
                  Update settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" onClick={logout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
