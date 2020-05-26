import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Routes from './routes';
import { UserProvider } from './context/user-context';
import UserChecker from './components/user-checker';

const App = () => {
  return (
    <StrictMode>
      <UserProvider>
        <UserChecker>
          <Router>
            <Header />
            <Routes />
          </Router>
        </UserChecker>
      </UserProvider>
    </StrictMode>
  );
};

export default App;
