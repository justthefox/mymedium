import { useEffect } from 'react';
import useFetch from '../hooks/use-fetch';
import useLocalStorage from '../hooks/use-local-storage';
import { useUserContext, ACTIONS } from '../context/user-context';

const UserChecker = ({ children }) => {
  const [, dispatch] = useUserContext();
  const [{ response }, doFetch] = useFetch('/user');
  const [token] = useLocalStorage('token');

  useEffect(() => {
    if (!token) {
      dispatch({ type: ACTIONS.SET_UNAUTHORIZED });
      return;
    }

    doFetch();
    dispatch({ type: ACTIONS.LOADING });
  }, [doFetch, dispatch, token]);

  useEffect(() => {
    if (!response) return;

    dispatch({ type: ACTIONS.SET_AUTHORIZED, payload: response.user });
  }, [response, dispatch]);
  return children;
};

export default UserChecker;
