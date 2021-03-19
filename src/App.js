import React, { Component } from 'react';
import LoginPage from './pages/login-page';
import Map from './pages/map-page';
import Profile from './pages/profile-page';
import './scss/App.scss';
import { PAGES } from './constants';

export default class App extends Component {
  state = { page: PAGES.login.key };

  setPage = (page) => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;

    return (
      <div className='App'>
        {
          {
            [PAGES.login.key]: <LoginPage setPage={this.setPage} />,
            [PAGES.map.key]: <Map setPage={this.setPage} />,
            [PAGES.profile.key]: <Profile setPage={this.setPage} />
          }[page]
        }
      </div>
    )
  }
}