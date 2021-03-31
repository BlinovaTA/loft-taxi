import React, { useState, useContext } from 'react';
import LoginPage from './pages/login-page';
import MapPage from './pages/map-page';
import Profile from './pages/profile-page';
import { AuthorizationContext } from './context/authorizationContext';
import './scss/App.scss';
import { PAGES } from './constants';

const App = () => {
  const [page, setPage] = useState(PAGES.login.key);
  const context = useContext(AuthorizationContext);

  const navigateTo = (page) => {
    setPage(page);

    if (page === PAGES.login.key) {
      context.logout();
    }
  }

  return (
    <div className='App'>
      {
        {
          [PAGES.login.key]: <LoginPage setPage={navigateTo} />,
          [PAGES.map.key]: <MapPage setPage={navigateTo} />,
          [PAGES.profile.key]: <Profile setPage={navigateTo} />
        }[page]
      }
    </div>
  )
}

export default App;