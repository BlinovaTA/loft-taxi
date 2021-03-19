import React, { Component } from 'react';
import LoginPage from './pages/login-page';
import Map from './pages/map-page';
import Profile from './pages/profile-page';
import './scss/App.scss';
import { pages } from './constants';

export default class App extends Component {
  state = { page: pages.login.key };

  setPage = (page) => {
    this.setState({ page });
  }

  render() {
    const { page } = this.state;

    return (
      <div className='App'>
        {
          {
            [pages.login.key]: <LoginPage setPage={this.setPage} />,
            [pages.map.key]: <Map setPage={this.setPage} />,
            [pages.profile.key]: <Profile setPage={this.setPage} />
          }[page]
        }
      </div>
    )
  }
}