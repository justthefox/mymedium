import { useEffect, useContext } from 'react';
import useFetch from '../hooks/use-fetch';
import useLocalStorage from '../hooks/use-local-storage';
import { UserContext } from '../context/user-context';

const UserChecker = ({ children }) => {
  const [, setUserState] = useContext(UserContext);
  const [{ response }, doFetch] = useFetch('/user');
  const [token] = useLocalStorage('token');

  useEffect(() => {
    if (!token) {
      setUserState((state) => ({
        ...state,
        isLoggedIn: false,
      }));
      return;
    }

    doFetch();
    setUserState((state) => ({
      ...state,
      isLoading: true,
    }));
  }, [doFetch, setUserState, token]);

  useEffect(() => {
    if (!response) return;

    setUserState((state) => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }));
  }, [response, setUserState]);
  return children;
};

export default UserChecker;
