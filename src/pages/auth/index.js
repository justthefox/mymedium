import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';
import useLocalStorage from '../../hooks/use-local-storage';
import { useUserContext, ACTIONS } from '../../context/user-context';
import { ROUTES } from '../../routes/constants';
import ErrorMessages from '../../components/error-messages';

const Authentication = (props) => {
  const isLogin = props.match.path === ROUTES.LOGIN;
  const pageTitle = isLogin ? 'Sign In' : 'Sign Up';
  const descriptionLink = isLogin ? ROUTES.REGISTER : ROUTES.LOGIN;
  const descriptionText = isLogin ? 'Need an account?' : 'Have an account?';
  const apiUrl = isLogin ? '/users/login' : '/users';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{ isLoading, response, error }, doFetch] = useFetch(apiUrl);
  const [, setToken] = useLocalStorage('token');
  const [, dispatch] = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = isLogin ? { email, password } : { email, password, username };

    doFetch({
      method: 'post',
      data: {
        user,
      },
    });
  };

  useEffect(() => {
    if (!response) return;
    setToken(response.user.token);
    setIsSuccessfullSubmit(true);
    dispatch({ type: ACTIONS.SET_AUTHORIZED, payload: response.user });
  }, [response, setToken, dispatch]);

  if (isSuccessfullSubmit) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <div className="auth-page mt-3">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-center mb-2">{pageTitle}</h1>
            <p className="text-center">
              <Link to={descriptionLink}>{descriptionText}</Link>
            </p>
            <form className="form-signin" onSubmit={handleSubmit}>
              {error && <ErrorMessages errors={error.errors} />}
              {!isLogin && (
                <fieldset className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </fieldset>
              )}
              <fieldset className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary btn-block mt-2"
                type="submit"
                disabled={isLoading}
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
